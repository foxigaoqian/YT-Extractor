import { NextResponse } from 'next/server';

function extractJSON(html: string, keyword: string): any {
  const start = html.indexOf(keyword);
  if (start === -1) return null;
  
  const jsonStart = html.indexOf('{', start + keyword.length);
  if (jsonStart === -1) return null;

  let braceCount = 0;
  let inString = false;
  let escapeNext = false;

  for (let i = jsonStart; i < html.length; i++) {
    const char = html[i];
    if (escapeNext) {
      escapeNext = false;
      continue;
    }
    if (char === '\\') {
      escapeNext = true;
      continue;
    }
    if (char === '"') {
      inString = !inString;
      continue;
    }
    if (!inString) {
      if (char === '{') braceCount++;
      else if (char === '}') {
        braceCount--;
        if (braceCount === 0) {
          const jsonStr = html.substring(jsonStart, i + 1);
          try {
            return JSON.parse(jsonStr);
          } catch (e) {
            return null;
          }
        }
      }
    }
  }
  return null;
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Basic validation
    const ytRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    if (!ytRegex.test(url)) {
      return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
    }

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch video page');
    }

    const html = await response.text();

    // Try to extract ytInitialPlayerResponse
    let playerResponse = extractJSON(html, 'ytInitialPlayerResponse = ');
    if (!playerResponse) {
      playerResponse = extractJSON(html, 'window["ytInitialPlayerResponse"] = ');
    }

    let initialData = extractJSON(html, 'ytInitialData = ');
    if (!initialData) {
      initialData = extractJSON(html, 'window["ytInitialData"] = ');
    }

    let title = '';
    let description = '';
    let tags: string[] = [];
    let thumbnail = '';
    let channelName = '';
    let publishDate = '';

    if (playerResponse) {
      try {
        const videoDetails = playerResponse.videoDetails || {};
        const microformat = playerResponse.microformat?.playerMicroformatRenderer || {};

        title = videoDetails.title || '';
        description = videoDetails.shortDescription || microformat.description?.simpleText || '';
        tags = videoDetails.keywords || [];
        thumbnail = videoDetails.thumbnail?.thumbnails?.pop()?.url || microformat.thumbnail?.thumbnails?.pop()?.url || '';
        channelName = videoDetails.author || microformat.ownerChannelName || '';
        publishDate = microformat.publishDate || '';
      } catch (e) {
        console.error("Error processing ytInitialPlayerResponse", e);
      }
    }

    if (initialData) {
      try {
        // Try to find the full description in initialData
        const contents = initialData.contents?.twoColumnWatchNextResults?.results?.results?.contents;
        if (contents) {
          for (const content of contents) {
            const secondaryInfo = content.videoSecondaryInfoRenderer;
            if (secondaryInfo) {
              if (secondaryInfo.description?.runs) {
                const fullDesc = secondaryInfo.description.runs.map((r: any) => r.text).join('');
                if (fullDesc && fullDesc.length > description.length) description = fullDesc;
              } else if (secondaryInfo.attributedDescription?.content) {
                const fullDesc = secondaryInfo.attributedDescription.content;
                if (fullDesc && fullDesc.length > description.length) description = fullDesc;
              }
            }
          }
        }

        // Also check engagement panels
        const engagementPanels = initialData.engagementPanels;
        if (engagementPanels) {
          for (const panel of engagementPanels) {
            const panelRenderer = panel.engagementPanelSectionListRenderer;
            if (panelRenderer?.panelIdentifier === 'engagement-panel-structured-description') {
              const content = panelRenderer.content?.structuredDescriptionContentRenderer?.items;
              if (content) {
                for (const item of content) {
                  if (item.expandableVideoDescriptionBodyRenderer) {
                    const runs = item.expandableVideoDescriptionBodyRenderer.attributedDescriptionBodyText?.content;
                    if (runs && runs.length > description.length) {
                      description = runs;
                    }
                  }
                }
              }
            }
          }
        }
      } catch (e) {
        console.error("Error processing ytInitialData", e);
      }
    }

    // Fallback to meta tags if still empty
    if (!title) {
      const titleMatch = html.match(/<meta name="title" content="(.*?)">/) || html.match(/<title>(.*?)<\/title>/);
      title = titleMatch ? titleMatch[1].replace(' - YouTube', '') : '';
    }
    
    if (!description) {
      const descMatch = html.match(/<meta name="description" content="(.*?)">/);
      description = descMatch ? descMatch[1] : '';
    }
    
    if (!tags || tags.length === 0) {
      const tagsMatch = html.match(/<meta name="keywords" content="(.*?)">/);
      tags = tagsMatch ? tagsMatch[1].split(',').map((t: string) => t.trim()) : [];
    }
    
    if (!thumbnail) {
      const thumbMatch = html.match(/<link itemprop="thumbnailUrl" href="(.*?)">/) || html.match(/<meta property="og:image" content="(.*?)">/);
      thumbnail = thumbMatch ? thumbMatch[1] : '';
    }
    
    if (!channelName) {
      const channelMatch = html.match(/<link itemprop="name" content="(.*?)">/);
      channelName = channelMatch ? channelMatch[1] : '';
    }
    
    if (!publishDate) {
      const dateMatch = html.match(/<meta itemprop="datePublished" content="(.*?)">/);
      publishDate = dateMatch ? dateMatch[1] : '';
    }

    return NextResponse.json({
      title,
      description,
      tags,
      thumbnail,
      channelName,
      publishDate
    });

  } catch (error: any) {
    console.error("Extraction error:", error);
    return NextResponse.json({ error: error.message || 'Failed to extract data' }, { status: 500 });
  }
}

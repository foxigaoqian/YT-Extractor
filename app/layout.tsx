import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'YouTube Description Extractor – Copy Any Video Description Instantly',
  description: 'Extract and copy the full description from any YouTube video instantly. Free YouTube Description Extractor tool. Works with Shorts, tags, and titles.',
  alternates: {
    canonical: 'https://youtubedescriptionextractor.in/',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "YouTube Description Extractor",
        "applicationCategory": "DeveloperTool",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "YouTube Description Extractor",
        "url": "https://youtubedescriptionextractor.in"
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JWJ91L8G8E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JWJ91L8G8E');
</script>
      </head>
      <body className="font-sans bg-gray-50 text-gray-900 antialiased selection:bg-red-100 selection:text-red-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

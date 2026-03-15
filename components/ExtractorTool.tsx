'use client';

import { useState } from 'react';
import { Copy, Download, CheckCircle2, AlertCircle, Loader2, Youtube, Link as LinkIcon, Calendar, User } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function ExtractorTool() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<any>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleExtract = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!url) {
      setError('Please enter a YouTube URL');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to extract');
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDownloadThumbnail = async () => {
    if (!result?.thumbnail) return;
    try {
      const response = await fetch(result.thumbnail);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `thumbnail-${Date.now()}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      window.open(result.thumbnail, '_blank');
    }
  };

  const setExample = () => {
    setUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 sm:mt-12">
      <form onSubmit={handleExtract} className="flex flex-col gap-4 relative z-10">
        <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-white/50 focus-within:ring-4 focus-within:ring-red-500/20 transition-all">
          <div className="relative flex-1 flex items-center">
            <Youtube className="absolute left-5 sm:left-6 w-6 h-6 sm:w-7 sm:h-7 text-red-500" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste YouTube Video URL here..."
              className="w-full pl-14 sm:pl-16 pr-4 sm:pr-6 py-4 sm:py-5 rounded-[1.5rem] bg-transparent outline-none text-lg sm:text-xl text-gray-900 placeholder:text-gray-400 font-medium"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-gray-900 hover:bg-black text-white px-6 sm:px-10 py-4 sm:py-5 rounded-[1.5rem] font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 whitespace-nowrap shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5 sm:w-6 sm:h-6" /> : <LinkIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            Extract Now
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 px-4 sm:px-6 gap-2 text-center sm:text-left">
          <p className="font-medium">Extract Description in 1 Click • Free • No signup • Works with Shorts</p>
          <button type="button" onClick={setExample} className="hover:text-red-600 underline decoration-dotted font-medium transition-colors">
            Try Example URL
          </button>
        </div>
      </form>

      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-4 bg-red-50 text-red-700 rounded-2xl flex items-center gap-3 border border-red-100"
        >
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="font-medium">{error}</p>
        </motion.div>
      )}

      {result && (
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
        >
          
          {/* Left Column: Title, Description, Tags */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            
            {/* Title Card */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_2px_40px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="font-display font-bold text-gray-900 text-xl sm:text-2xl">Video Title</h3>
                <button
                  onClick={() => handleCopy(result.title, 'title')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-bold text-gray-700 hover:text-red-600 bg-gray-100 hover:bg-red-50 px-5 py-2.5 rounded-full transition-all"
                >
                  {copiedField === 'title' ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  {copiedField === 'title' ? 'Copied!' : 'Copy Title'}
                </button>
              </div>
              <p className="text-gray-900 text-lg sm:text-xl md:text-2xl font-bold leading-snug">{result.title}</p>
            </div>

            {/* Description Card */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_2px_40px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
                <h3 className="font-display font-bold text-gray-900 text-xl sm:text-2xl">Video Description</h3>
                <button
                  onClick={() => handleCopy(result.description, 'description')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-bold text-gray-700 hover:text-red-600 bg-gray-100 hover:bg-red-50 px-5 py-2.5 rounded-full transition-all"
                >
                  {copiedField === 'description' ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  {copiedField === 'description' ? 'Copied!' : 'Copy Description'}
                </button>
              </div>
              <div className="bg-[#F8F9FA] p-5 sm:p-8 rounded-[1.5rem] max-h-[400px] sm:max-h-[600px] overflow-y-auto whitespace-pre-wrap text-gray-700 font-mono text-sm sm:text-[15px] leading-relaxed border border-gray-200/60 shadow-inner">
                {result.description || 'No description found.'}
              </div>
            </div>

            {/* Tags Card */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_2px_40px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
                <h3 className="font-display font-bold text-gray-900 text-xl sm:text-2xl">Video Tags</h3>
                <button
                  onClick={() => handleCopy(result.tags.join(', '), 'tags')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-bold text-gray-700 hover:text-red-600 bg-gray-100 hover:bg-red-50 px-5 py-2.5 rounded-full transition-all"
                >
                  {copiedField === 'tags' ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  {copiedField === 'tags' ? 'Copied!' : 'Copy Tags'}
                </button>
              </div>
              {result.tags && result.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {result.tags.map((tag: string, i: number) => (
                    <span key={i} className="bg-gray-100 text-gray-800 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold border border-gray-200/80 hover:bg-gray-200 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic bg-gray-50 p-4 sm:p-6 rounded-2xl text-center font-medium text-sm sm:text-base">No tags found for this video.</p>
              )}
            </div>
          </div>

          {/* Right Column: Thumbnail & Meta */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_2px_40px_rgb(0,0,0,0.04)] border border-gray-100 sticky top-24">
              <h3 className="font-display font-bold text-gray-900 text-xl sm:text-2xl mb-6 sm:mb-8">Thumbnail</h3>
              {result.thumbnail ? (
                <div className="space-y-6">
                  <div className="relative aspect-video rounded-[1.5rem] overflow-hidden bg-gray-100 border border-gray-200/60 group shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={result.thumbnail} alt="Video thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <button
                    onClick={handleDownloadThumbnail}
                    className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-4 rounded-[1.25rem] font-bold text-lg transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Download className="w-5 h-5" />
                    Download HD
                  </button>
                </div>
              ) : (
                <div className="aspect-video rounded-[1.5rem] bg-gray-50 border border-gray-200/60 flex items-center justify-center text-gray-400 font-medium">
                  No thumbnail
                </div>
              )}

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-5 p-5 rounded-[1.5rem] bg-gray-50 border border-gray-200/60 hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <User className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Channel</p>
                    <p className="font-bold text-gray-900 text-lg line-clamp-1">{result.channelName || 'Unknown'}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 p-5 rounded-[1.5rem] bg-gray-50 border border-gray-200/60 hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Calendar className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Published</p>
                    <p className="font-bold text-gray-900 text-lg">
                      {result.publishDate ? new Date(result.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'Unknown'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      )}
    </div>
  );
}

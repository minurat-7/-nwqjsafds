import { ExternalLink } from 'lucide-react';
import { getYouTubeWatchUrl } from '../../utils/youtube';

interface YouTubeEmbedProps {
  youtubeId: string;
  title?: string;
}

export function YouTubeEmbed({ youtubeId, title = 'YouTube video' }: YouTubeEmbedProps) {
  return (
    <div className="space-y-2">
      <div className="yt-iframe-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <a
        href={getYouTubeWatchUrl(youtubeId)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        <ExternalLink size={12} />
        YouTube 앱에서 보기
      </a>
    </div>
  );
}

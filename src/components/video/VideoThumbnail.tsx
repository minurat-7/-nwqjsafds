import { Play } from 'lucide-react';
import { getYouTubeThumbnail } from '../../utils/youtube';

interface VideoThumbnailProps {
  youtubeId: string;
  title?: string;
  onClick?: () => void;
}

export function VideoThumbnail({ youtubeId, title, onClick }: VideoThumbnailProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-full aspect-video overflow-hidden rounded-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <img
        src={getYouTubeThumbnail(youtubeId, 'mq')}
        alt={title ?? 'Video thumbnail'}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).src = getYouTubeThumbnail(youtubeId, 'default');
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-11 h-11 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <Play size={18} className="text-gray-900 ml-0.5" fill="currentColor" />
        </div>
      </div>
    </button>
  );
}

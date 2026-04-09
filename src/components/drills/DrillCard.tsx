import { Play } from 'lucide-react';
import { Badge } from '../ui/Badge';
import type { Drill, DrillSource, Difficulty } from '../../types';
import { getYouTubeThumbnail } from '../../utils/youtube';

const sourceLabels: Record<DrillSource, string> = {
  tread: 'Tread',
  driveline: 'Driveline',
  other: 'Other',
};

const difficultyLabels: Record<Difficulty, string> = {
  beginner: '초급',
  intermediate: '중급',
  advanced: '고급',
};

interface DrillCardProps {
  drill: Drill;
  onClick: (drill: Drill) => void;
}

export function DrillCard({ drill, onClick }: DrillCardProps) {
  return (
    <div
      onClick={() => onClick(drill)}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img
          src={getYouTubeThumbnail(drill.youtubeId, 'mq')}
          alt={drill.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = getYouTubeThumbnail(drill.youtubeId, 'default');
          }}
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        {/* play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
            <Play size={16} className="text-gray-900 ml-0.5" fill="currentColor" />
          </div>
        </div>
        {/* source pill */}
        <div className="absolute top-2 left-2">
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${
            drill.source === 'tread'
              ? 'bg-blue-500 text-white'
              : drill.source === 'driveline'
              ? 'bg-red-500 text-white'
              : 'bg-gray-600 text-white'
          }`}>
            {sourceLabels[drill.source]}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-xs font-semibold text-gray-900 leading-snug line-clamp-2 mb-1.5">
          {drill.name}
        </p>
        <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
          {drill.description}
        </p>
        <div className="flex items-center gap-1.5 mt-2">
          <Badge variant={drill.difficulty}>{difficultyLabels[drill.difficulty]}</Badge>
          {drill.equipment.length > 0 && (
            <span className="text-[10px] text-gray-400 truncate">
              {drill.equipment[0]}{drill.equipment.length > 1 ? ` +${drill.equipment.length - 1}` : ''}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

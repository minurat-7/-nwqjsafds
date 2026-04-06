import { VideoThumbnail } from '../video/VideoThumbnail';
import { Badge } from '../ui/Badge';
import type { Drill, DrillSource, Difficulty } from '../../types';

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
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
      <VideoThumbnail
        youtubeId={drill.youtubeId}
        title={drill.name}
        onClick={() => onClick(drill)}
      />
      <div className="p-3">
        <button
          onClick={() => onClick(drill)}
          className="text-left w-full"
        >
          <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-gray-700 transition-colors line-clamp-2">
            {drill.name}
          </p>
        </button>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
          {drill.description}
        </p>
        <div className="flex items-center gap-1.5 mt-2.5 flex-wrap">
          <Badge variant={drill.source}>{sourceLabels[drill.source]}</Badge>
          <Badge variant={drill.difficulty}>{difficultyLabels[drill.difficulty]}</Badge>
        </div>
        {drill.equipment.length > 0 && (
          <p className="text-[11px] text-gray-400 mt-2">
            준비물: {drill.equipment.join(', ')}
          </p>
        )}
      </div>
    </div>
  );
}

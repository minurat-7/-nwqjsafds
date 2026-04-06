import { ExternalLink, Package, Tag } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { YouTubeEmbed } from '../video/YouTubeEmbed';
import { Badge } from '../ui/Badge';
import type { Drill } from '../../types';
import { getYouTubeWatchUrl } from '../../utils/youtube';
import type { DrillSource, Difficulty } from '../../types';

const sourceLabels: Record<DrillSource, string> = {
  tread: 'Tread Athletics',
  driveline: 'Driveline Baseball',
  other: 'Other',
};

const difficultyLabels: Record<Difficulty, string> = {
  beginner: '초급',
  intermediate: '중급',
  advanced: '고급',
};

interface DrillModalProps {
  drill: Drill | null;
  onClose: () => void;
}

export function DrillModal({ drill, onClose }: DrillModalProps) {
  if (!drill) return null;

  return (
    <Modal isOpen={!!drill} onClose={onClose} size="xl">
      <div className="p-5 space-y-5">
        {/* Video */}
        <YouTubeEmbed youtubeId={drill.youtubeId} title={drill.name} />

        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-gray-900">{drill.name}</h2>
            <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
              <Badge variant={drill.source as DrillSource}>{sourceLabels[drill.source]}</Badge>
              <Badge variant={drill.difficulty as Difficulty}>
                {difficultyLabels[drill.difficulty]}
              </Badge>
            </div>
          </div>
          <a
            href={getYouTubeWatchUrl(drill.youtubeId)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg px-2.5 py-1.5 hover:bg-gray-50 transition-colors flex-shrink-0"
          >
            <ExternalLink size={12} />
            YouTube
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">{drill.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Equipment */}
          {drill.equipment.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Package size={13} className="text-gray-400" />
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">준비물</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {drill.equipment.map((eq) => (
                  <span
                    key={eq}
                    className="px-2.5 py-1 text-xs bg-gray-50 border border-gray-200 rounded-md text-gray-700"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {drill.tags.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Tag size={13} className="text-gray-400" />
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">태그</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {drill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs bg-gray-50 border border-gray-200 rounded text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

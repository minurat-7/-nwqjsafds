import { useState } from 'react';
import { Package, Tag, Play, ExternalLink } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';
import type { Drill } from '../../types';
import { getYouTubeWatchUrl, getYouTubeThumbnail } from '../../utils/youtube';
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
  const [showEmbed, setShowEmbed] = useState(false);

  if (!drill) return null;

  const ytUrl = getYouTubeWatchUrl(drill.youtubeId);

  return (
    <Modal isOpen={!!drill} onClose={() => { setShowEmbed(false); onClose(); }} size="xl">
      <div className="p-4 space-y-4">

        {/* Video area */}
        {showEmbed ? (
          <div className="space-y-2">
            <div className="yt-iframe-wrapper">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${drill.youtubeId}?rel=0&playsinline=1`}
                title={drill.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <button
              onClick={() => setShowEmbed(false)}
              className="w-full text-xs text-gray-400 hover:text-gray-600 py-1"
            >
              ✕ 인앱 플레이어 닫기
            </button>
          </div>
        ) : (
          /* Thumbnail with two options */
          <div className="space-y-2">
            <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video">
              <img
                src={getYouTubeThumbnail(drill.youtubeId, 'mq')}
                alt={drill.name}
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getYouTubeThumbnail(drill.youtubeId, 'default');
                }}
              />
              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Center play → opens YouTube */}
              <a
                href={ytUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </a>

              {/* Bottom label */}
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5">
                <ExternalLink size={13} className="text-white/80" />
                <span className="text-xs text-white/80 font-medium">YouTube에서 재생</span>
              </div>
            </div>

            {/* Two CTA buttons */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={ytUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                <Play size={13} fill="white" />
                YouTube 앱으로 보기
              </a>
              <button
                onClick={() => setShowEmbed(true)}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl transition-colors"
              >
                <Play size={13} />
                인앱 재생 시도
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <div>
          <p className="text-xs font-medium text-gray-400 mb-0.5">{drill.channelName}</p>
          <h2 className="text-sm font-bold text-gray-900 leading-snug">{drill.name}</h2>
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <Badge variant={drill.source as DrillSource}>{sourceLabels[drill.source]}</Badge>
            <Badge variant={drill.difficulty as Difficulty}>{difficultyLabels[drill.difficulty]}</Badge>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">{drill.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Equipment */}
          {drill.equipment.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Package size={12} className="text-gray-400" />
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">준비물</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {drill.equipment.map((eq) => (
                  <span key={eq} className="px-2.5 py-1 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
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
                <Tag size={12} className="text-gray-400" />
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">태그</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {drill.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] bg-gray-50 border border-gray-200 rounded text-gray-500">
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

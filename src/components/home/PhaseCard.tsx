import { Link } from 'react-router-dom';
import { ChevronRight, CircleDot, ArrowUp, MoveRight, Zap, RotateCw, Flame, Wind } from 'lucide-react';
import type { PitchingPhase } from '../../types';
import { getDrillsByPhase } from '../../data';

const iconMap: Record<string, React.ElementType> = {
  CircleDot, ArrowUp, MoveRight, Zap, RotateCw, Flame, Wind,
};

const colorMap: Record<string, { icon: string; badge: string; border: string }> = {
  slate:  { icon: 'text-slate-600',  badge: 'bg-slate-50 text-slate-600 border-slate-200',  border: 'hover:border-slate-300' },
  indigo: { icon: 'text-indigo-600', badge: 'bg-indigo-50 text-indigo-600 border-indigo-200', border: 'hover:border-indigo-300' },
  orange: { icon: 'text-orange-500', badge: 'bg-orange-50 text-orange-600 border-orange-200', border: 'hover:border-orange-300' },
  yellow: { icon: 'text-yellow-500', badge: 'bg-yellow-50 text-yellow-600 border-yellow-200', border: 'hover:border-yellow-300' },
  purple: { icon: 'text-purple-600', badge: 'bg-purple-50 text-purple-600 border-purple-200', border: 'hover:border-purple-300' },
  red:    { icon: 'text-red-500',    badge: 'bg-red-50 text-red-600 border-red-200',    border: 'hover:border-red-300' },
  teal:   { icon: 'text-teal-500',   badge: 'bg-teal-50 text-teal-600 border-teal-200',   border: 'hover:border-teal-300' },
};

export function PhaseCard({ phase }: { phase: PitchingPhase }) {
  const Icon = iconMap[phase.icon] ?? CircleDot;
  const colors = colorMap[phase.color] ?? colorMap.slate;
  const drillCount = getDrillsByPhase(phase.id).length;

  return (
    <Link
      to={`/phase/${phase.id}`}
      className={`block bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all group ${colors.border}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colors.badge} border`}>
            <Icon size={17} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">
                Phase {phase.order}
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-900 mt-0.5">{phase.name}</p>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
              {phase.description.slice(0, 80)}…
            </p>
          </div>
        </div>
        <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-500 flex-shrink-0 mt-1 transition-colors" />
      </div>

      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
        <span className={`px-2 py-0.5 rounded-md text-[11px] font-medium border ${colors.badge}`}>
          드릴 {drillCount}개
        </span>
        <span className="text-[11px] text-gray-400">
          {phase.keyMetrics.length}개 핵심 수치 · {phase.commonFaults.length}개 폼 오류
        </span>
      </div>
    </Link>
  );
}

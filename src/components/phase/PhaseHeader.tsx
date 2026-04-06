import type { PitchingPhase } from '../../types';
import {
  CircleDot, ArrowUp, MoveRight, Zap, RotateCw, Flame, Wind,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  CircleDot, ArrowUp, MoveRight, Zap, RotateCw, Flame, Wind,
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  slate:  { bg: 'bg-slate-50',  text: 'text-slate-700',  border: 'border-slate-200' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  red:    { bg: 'bg-red-50',    text: 'text-red-700',    border: 'border-red-200' },
  teal:   { bg: 'bg-teal-50',   text: 'text-teal-700',   border: 'border-teal-200' },
};

interface PhaseHeaderProps {
  phase: PitchingPhase;
  drillCount: number;
}

export function PhaseHeader({ phase, drillCount }: PhaseHeaderProps) {
  const Icon = iconMap[phase.icon] ?? CircleDot;
  const colors = colorMap[phase.color] ?? colorMap.slate;

  return (
    <div className="border-b border-gray-200 bg-white px-6 py-6">
      <div className="flex items-start gap-4">
        <div className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center flex-shrink-0`}>
          <Icon size={20} className={colors.text} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              Phase {phase.order}
            </span>
          </div>
          <h1 className="text-xl font-bold text-gray-900 leading-tight">{phase.name}</h1>
          <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{phase.description}</p>
        </div>
      </div>

      {/* Key Metrics */}
      {phase.keyMetrics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {phase.keyMetrics.map((m) => (
            <div
              key={m.label}
              title={m.description}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${colors.bg} ${colors.border} cursor-help`}
            >
              <span className="text-xs text-gray-500">{m.label}</span>
              <span className={`text-xs font-bold ${colors.text}`}>
                {m.value}{m.unit ? ` ${m.unit}` : ''}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border bg-gray-50 border-gray-200">
            <span className="text-xs text-gray-500">드릴</span>
            <span className="text-xs font-bold text-gray-700">{drillCount}개</span>
          </div>
        </div>
      )}
    </div>
  );
}

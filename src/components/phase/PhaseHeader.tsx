import {
  CircleDot, ArrowUp, MoveRight, Zap, RotateCw, Flame, Wind,
  Activity, Video, AlertTriangle,
} from 'lucide-react';
import type { PitchingPhase } from '../../types';
import { phases } from '../../data';

const iconMap: Record<string, React.ElementType> = {
  CircleDot, ArrowUp, MoveRight, Zap, RotateCw, Flame, Wind,
};

const colorMap: Record<string, {
  bg: string; text: string; border: string;
  headerBg: string; stepBg: string; stepText: string;
}> = {
  slate:  { bg: 'bg-slate-50',  text: 'text-slate-700',  border: 'border-slate-200',  headerBg: 'bg-slate-900',  stepBg: 'bg-slate-100', stepText: 'text-slate-600' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', headerBg: 'bg-indigo-600', stepBg: 'bg-indigo-50', stepText: 'text-indigo-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', headerBg: 'bg-orange-500', stepBg: 'bg-orange-50', stepText: 'text-orange-600' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', headerBg: 'bg-yellow-500', stepBg: 'bg-yellow-50', stepText: 'text-yellow-700' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', headerBg: 'bg-purple-600', stepBg: 'bg-purple-50', stepText: 'text-purple-600' },
  red:    { bg: 'bg-red-50',    text: 'text-red-700',    border: 'border-red-200',    headerBg: 'bg-red-500',    stepBg: 'bg-red-50',    stepText: 'text-red-600' },
  teal:   { bg: 'bg-teal-50',   text: 'text-teal-700',   border: 'border-teal-200',   headerBg: 'bg-teal-500',   stepBg: 'bg-teal-50',   stepText: 'text-teal-600' },
};

interface PhaseHeaderProps {
  phase: PitchingPhase;
  drillCount: number;
}

export function PhaseHeader({ phase, drillCount }: PhaseHeaderProps) {
  const Icon = iconMap[phase.icon] ?? CircleDot;
  const c = colorMap[phase.color] ?? colorMap.slate;

  return (
    <div>
      {/* Colored header band */}
      <div className={`${c.headerBg} px-5 pt-5 pb-4`}>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
            <Icon size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">
              Phase {phase.order} of {phases.length}
            </p>
            <h1 className="text-lg font-bold text-white leading-tight mt-0.5">{phase.name}</h1>
          </div>
        </div>

        {/* Phase progress dots */}
        <div className="flex items-center gap-1.5 mt-4">
          {phases.map((p) => (
            <div
              key={p.id}
              className={`h-1 flex-1 rounded-full transition-all ${
                p.id === phase.id
                  ? 'bg-white'
                  : p.order < phase.order
                  ? 'bg-white/50'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Description + stats */}
      <div className="bg-white border-b border-gray-200 px-5 py-4 space-y-4">
        <p className="text-sm text-gray-600 leading-relaxed">{phase.description}</p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          <div className={`flex flex-col items-center py-2.5 rounded-xl ${c.bg} border ${c.border}`}>
            <Video size={14} className={c.text} />
            <p className={`text-base font-bold mt-1 ${c.text}`}>{drillCount}</p>
            <p className="text-[10px] text-gray-500">드릴</p>
          </div>
          <div className={`flex flex-col items-center py-2.5 rounded-xl ${c.bg} border ${c.border}`}>
            <Activity size={14} className={c.text} />
            <p className={`text-base font-bold mt-1 ${c.text}`}>{phase.biomechanicsNotes.details.length}</p>
            <p className="text-[10px] text-gray-500">메카닉스</p>
          </div>
          <div className={`flex flex-col items-center py-2.5 rounded-xl ${c.bg} border ${c.border}`}>
            <AlertTriangle size={14} className={c.text} />
            <p className={`text-base font-bold mt-1 ${c.text}`}>{phase.commonFaults.length}</p>
            <p className="text-[10px] text-gray-500">폼 오류</p>
          </div>
        </div>

        {/* Key Metrics */}
        {phase.keyMetrics.length > 0 && (
          <div className="space-y-1.5">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">핵심 수치</p>
            <div className="flex flex-wrap gap-2">
              {phase.keyMetrics.map((m) => (
                <div
                  key={m.label}
                  title={m.description}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${c.bg} ${c.border} cursor-help`}
                >
                  <span className="text-[11px] text-gray-500">{m.label}</span>
                  <span className={`text-[11px] font-bold ${c.text}`}>
                    {m.value}{m.unit ? ` ${m.unit}` : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

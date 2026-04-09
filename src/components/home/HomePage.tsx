import { Link } from 'react-router-dom';
import {
  CircleDot, ArrowUp, MoveRight, Zap, RotateCw, Flame, Wind,
  ChevronRight, BookOpen, Video, Activity,
} from 'lucide-react';
import { phases, drills } from '../../data';
import { getDrillsByPhase } from '../../data';
import type { PitchingPhase } from '../../types';

const iconMap: Record<string, React.ElementType> = {
  CircleDot, ArrowUp, MoveRight, Zap, RotateCw, Flame, Wind,
};

const colorMap: Record<string, {
  bg: string; text: string; border: string;
  dot: string; line: string;
}> = {
  slate:  { bg: 'bg-slate-50',  text: 'text-slate-700',  border: 'border-slate-200',  dot: 'bg-slate-400',  line: 'border-slate-200' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', dot: 'bg-indigo-400', line: 'border-indigo-200' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', dot: 'bg-orange-400', line: 'border-orange-200' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200', dot: 'bg-yellow-400', line: 'border-yellow-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', dot: 'bg-purple-400', line: 'border-purple-200' },
  red:    { bg: 'bg-red-50',    text: 'text-red-700',    border: 'border-red-200',    dot: 'bg-red-400',    line: 'border-red-200' },
  teal:   { bg: 'bg-teal-50',   text: 'text-teal-700',   border: 'border-teal-200',   dot: 'bg-teal-400',   line: 'border-teal-200' },
};

function PhaseRow({ phase, isLast }: { phase: PitchingPhase; isLast: boolean }) {
  const Icon = iconMap[phase.icon] ?? CircleDot;
  const c = colorMap[phase.color] ?? colorMap.slate;
  const drillCount = getDrillsByPhase(phase.id).length;

  return (
    <div className="flex gap-4">
      {/* Timeline column */}
      <div className="flex flex-col items-center w-10 flex-shrink-0">
        <div className={`w-9 h-9 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0 z-10`}>
          <Icon size={16} className={c.text} />
        </div>
        {!isLast && (
          <div className={`w-px flex-1 mt-1 border-l-2 border-dashed ${c.line} opacity-40`} style={{ minHeight: 20 }} />
        )}
      </div>

      {/* Content */}
      <Link
        to={`/phase/${phase.id}`}
        className="flex-1 pb-4 group"
      >
        <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-gray-300 transition-all">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${c.bg} ${c.text} ${c.border} border`}>
                  Phase {phase.order}
                </span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                {phase.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">
                {phase.description.slice(0, 90)}…
              </p>
            </div>
            <ChevronRight size={15} className="text-gray-300 group-hover:text-gray-500 flex-shrink-0 mt-1 transition-colors" />
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1 text-[11px] text-gray-500">
              <Video size={11} className="text-gray-400" />
              <span>드릴 {drillCount}개</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-gray-500">
              <Activity size={11} className="text-gray-400" />
              <span>메카닉스 {phase.biomechanicsNotes.details.length}포인트</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-gray-500">
              <BookOpen size={11} className="text-gray-400" />
              <span>폼 오류 {phase.commonFaults.length}가지</span>
            </div>
          </div>

          {/* Key metrics preview */}
          {phase.keyMetrics.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {phase.keyMetrics.map((m) => (
                <span
                  key={m.label}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-medium border ${c.bg} ${c.text} ${c.border}`}
                >
                  {m.label}: {m.value}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export function HomePage() {
  const treadCount = drills.filter(d => d.source === 'tread').length;
  const drivelineCount = drills.filter(d => d.source === 'driveline').length;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Hero */}
      <div className="bg-gray-900 rounded-2xl p-5 text-white">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
            <Flame size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Pitching Biomechanics</h1>
            <p className="text-sm text-gray-400 mt-1 leading-relaxed">
              Tread Athletics · Driveline Baseball 드릴 영상 기반<br />
              투구 동작 7단계 바이오메카닉스 레퍼런스
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10">
          <div className="text-center">
            <p className="text-xl font-bold">{phases.length}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">투구 페이즈</p>
          </div>
          <div className="text-center border-x border-white/10">
            <p className="text-xl font-bold">{drills.length}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">드릴 영상</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{phases.reduce((a, p) => a + p.commonFaults.length, 0)}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">폼 오류 분석</p>
          </div>
        </div>
      </div>

      {/* Source badges */}
      <div className="flex gap-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 border border-blue-200 flex-1">
          <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold text-blue-800">Tread Athletics</p>
            <p className="text-[10px] text-blue-500">드릴 {treadCount}개</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 border border-red-200 flex-1">
          <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold text-red-800">Driveline Baseball</p>
            <p className="text-[10px] text-red-500">드릴 {drivelineCount}개</p>
          </div>
        </div>
      </div>

      {/* Phase timeline */}
      <div>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-1">
          투구 동작 7단계
        </h2>
        <div>
          {phases.map((phase, i) => (
            <PhaseRow key={phase.id} phase={phase} isLast={i === phases.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

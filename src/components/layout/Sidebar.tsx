import { NavLink } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { phases } from '../../data';
import { getDrillsByPhase } from '../../data';
import type { PitchingPhase } from '../../types';
import {
  CircleDot, ArrowUp, MoveRight, Zap, RotateCw, Flame, Wind, Home,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  CircleDot, ArrowUp, MoveRight, Zap, RotateCw, Flame, Wind,
};

const phaseColorMap: Record<string, string> = {
  slate: 'text-slate-600',
  indigo: 'text-indigo-600',
  orange: 'text-orange-500',
  yellow: 'text-yellow-500',
  purple: 'text-purple-600',
  red: 'text-red-500',
  teal: 'text-teal-500',
};

function PhaseNavItem({ phase, onSelect }: { phase: PitchingPhase; onSelect?: () => void }) {
  const Icon = iconMap[phase.icon] ?? CircleDot;
  const drillCount = getDrillsByPhase(phase.id).length;

  return (
    <NavLink
      to={`/phase/${phase.id}`}
      onClick={onSelect}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors group',
          isActive
            ? 'bg-gray-100 text-gray-900 font-medium'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
        )
      }
    >
      <Icon
        size={16}
        className={cn(
          'flex-shrink-0 transition-colors',
          phaseColorMap[phase.color] ?? 'text-gray-400',
        )}
      />
      <span className="flex-1 truncate">{phase.shortName}</span>
      <span className="text-xs text-gray-400 tabular-nums">{drillCount}</span>
    </NavLink>
  );
}

interface SidebarProps {
  onSelect?: () => void;
}

export function Sidebar({ onSelect }: SidebarProps) {
  return (
    <aside className="w-[260px] flex-shrink-0 h-full flex flex-col bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-3">
        {/* Home link */}
        <NavLink
          to="/"
          end
          onClick={onSelect}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors mb-1',
              isActive
                ? 'bg-gray-100 text-gray-900 font-medium'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            )
          }
        >
          <Home size={16} className="text-gray-400 flex-shrink-0" />
          <span>홈</span>
        </NavLink>

        <div className="mt-3 mb-1 px-3">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
            투구 페이즈
          </p>
        </div>

        <nav className="flex flex-col gap-0.5">
          {phases.map((phase) => (
            <PhaseNavItem key={phase.id} phase={phase} onSelect={onSelect} />
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-gray-100">
        <p className="text-[10px] text-gray-400 leading-relaxed">
          Tread Athletics &amp; Driveline Baseball 드릴 기반 바이오메카닉스 레퍼런스
        </p>
      </div>
    </aside>
  );
}

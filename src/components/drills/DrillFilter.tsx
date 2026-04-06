import { Search, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { DrillFilterState } from '../../types';

const sources = [
  { value: 'all', label: '전체' },
  { value: 'tread', label: 'Tread' },
  { value: 'driveline', label: 'Driveline' },
  { value: 'other', label: 'Other' },
] as const;

const difficulties = [
  { value: 'all', label: '전체' },
  { value: 'beginner', label: '초급' },
  { value: 'intermediate', label: '중급' },
  { value: 'advanced', label: '고급' },
] as const;

interface DrillFilterProps {
  filter: DrillFilterState;
  onChange: (filter: DrillFilterState) => void;
  resultCount: number;
}

export function DrillFilter({ filter, onChange, resultCount }: DrillFilterProps) {
  const hasActiveFilter =
    filter.source !== 'all' || filter.difficulty !== 'all' || filter.searchQuery !== '';

  return (
    <div className="space-y-2.5">
      {/* Search */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="드릴 검색..."
          value={filter.searchQuery}
          onChange={(e) => onChange({ ...filter, searchQuery: e.target.value })}
          className="w-full pl-8 pr-8 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent placeholder:text-gray-400"
        />
        {filter.searchQuery && (
          <button
            onClick={() => onChange({ ...filter, searchQuery: '' })}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Filter chips row */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Source filter */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-400 font-medium">소스</span>
          <div className="flex gap-1">
            {sources.map((s) => (
              <button
                key={s.value}
                onClick={() => onChange({ ...filter, source: s.value })}
                className={cn(
                  'px-2.5 py-1 rounded-md text-xs font-medium transition-colors',
                  filter.source === s.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50',
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty filter */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-400 font-medium">난이도</span>
          <div className="flex gap-1">
            {difficulties.map((d) => (
              <button
                key={d.value}
                onClick={() => onChange({ ...filter, difficulty: d.value })}
                className={cn(
                  'px-2.5 py-1 rounded-md text-xs font-medium transition-colors',
                  filter.difficulty === d.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50',
                )}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reset + count */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs text-gray-400">{resultCount}개</span>
          {hasActiveFilter && (
            <button
              onClick={() => onChange({ searchQuery: '', source: 'all', difficulty: 'all' })}
              className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              <X size={12} /> 초기화
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

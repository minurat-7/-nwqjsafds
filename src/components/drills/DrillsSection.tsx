import { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import { DrillCard } from './DrillCard';
import { DrillFilter } from './DrillFilter';
import { DrillModal } from './DrillModal';
import { EmptyState } from '../ui/EmptyState';
import { filterDrills } from '../../data';
import type { DrillFilterState, Drill, PhaseId } from '../../types';

interface DrillsSectionProps {
  phaseId: PhaseId;
  onDrillSelected?: (drill: Drill) => void;
}

export function DrillsSection({ phaseId, onDrillSelected }: DrillsSectionProps) {
  const [filter, setFilter] = useState<DrillFilterState>({
    searchQuery: '',
    source: 'all',
    difficulty: 'all',
  });
  const [selectedDrill, setSelectedDrill] = useState<Drill | null>(null);

  const filtered = filterDrills({
    phaseId,
    source: filter.source,
    difficulty: filter.difficulty,
    query: filter.searchQuery,
  });

  const handleDrillClick = (drill: Drill) => {
    setSelectedDrill(drill);
    onDrillSelected?.(drill);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Dumbbell size={15} className="text-gray-500" />
        <h2 className="text-sm font-semibold text-gray-900">드릴 라이브러리</h2>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4">
        <DrillFilter filter={filter} onChange={setFilter} resultCount={filtered.length} />

        {filtered.length === 0 ? (
          <EmptyState description="필터를 변경하거나 검색어를 조정해보세요." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {filtered.map((drill) => (
              <DrillCard key={drill.id} drill={drill} onClick={handleDrillClick} />
            ))}
          </div>
        )}
      </div>

      <DrillModal drill={selectedDrill} onClose={() => setSelectedDrill(null)} />
    </div>
  );
}

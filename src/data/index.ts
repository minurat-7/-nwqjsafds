export { phases } from './phases';
export { drills } from './drills';

import { phases } from './phases';
import { drills } from './drills';
import type { PhaseId, DrillSource, Difficulty } from '../types';

export function getPhaseById(id: PhaseId) {
  return phases.find((p) => p.id === id);
}

export function getDrillsByPhase(phaseId: PhaseId) {
  return drills.filter((d) => d.targetPhases.includes(phaseId));
}

export function getDrillsByFaultId(faultId: string) {
  return drills.filter((d) => d.targetFaultIds.includes(faultId));
}

export function filterDrills(opts: {
  phaseId?: PhaseId;
  source?: DrillSource | 'all';
  difficulty?: Difficulty | 'all';
  query?: string;
}) {
  let result = [...drills];
  if (opts.phaseId) result = result.filter((d) => d.targetPhases.includes(opts.phaseId!));
  if (opts.source && opts.source !== 'all') result = result.filter((d) => d.source === opts.source);
  if (opts.difficulty && opts.difficulty !== 'all') result = result.filter((d) => d.difficulty === opts.difficulty);
  if (opts.query) {
    const q = opts.query.toLowerCase();
    result = result.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }
  return result;
}

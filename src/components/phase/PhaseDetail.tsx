import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getPhaseById, getDrillsByPhase, drills as allDrills } from '../../data';
import { phases } from '../../data';
import { PhaseHeader } from './PhaseHeader';
import { BiomechanicsPanel } from './BiomechanicsPanel';
import { CommonFaultsList } from './CommonFaultsList';
import { DrillsSection } from '../drills/DrillsSection';
import { DrillModal } from '../drills/DrillModal';
import type { Drill, PhaseId } from '../../types';

export function PhaseDetail() {
  const { phaseId } = useParams<{ phaseId: string }>();
  const [faultDrill, setFaultDrill] = useState<Drill | null>(null);

  const phase = getPhaseById(phaseId as PhaseId);

  if (!phase) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <p className="text-gray-500 text-sm">페이즈를 찾을 수 없습니다.</p>
        <Link to="/" className="text-sm text-blue-600 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const phaseDrillCount = getDrillsByPhase(phase.id).length;
  const prevPhase = phases.find((p) => p.order === phase.order - 1);
  const nextPhase = phases.find((p) => p.order === phase.order + 1);

  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader phase={phase} drillCount={phaseDrillCount} />

      <div className="p-6 space-y-6">
        {/* Biomechanics */}
        <BiomechanicsPanel notes={phase.biomechanicsNotes} />

        {/* Common Faults */}
        <CommonFaultsList
          faults={phase.commonFaults}
          drills={allDrills}
          onDrillClick={(d) => setFaultDrill(d)}
        />

        {/* Drills */}
        <DrillsSection phaseId={phase.id} />

        {/* Prev / Next phase navigation */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
          {prevPhase ? (
            <Link
              to={`/phase/${prevPhase.id}`}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={16} />
              <span>{prevPhase.shortName}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextPhase ? (
            <Link
              to={`/phase/${nextPhase.id}`}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>{nextPhase.shortName}</span>
              <ChevronRight size={16} />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Fault-linked drill modal */}
      <DrillModal drill={faultDrill} onClose={() => setFaultDrill(null)} />
    </div>
  );
}

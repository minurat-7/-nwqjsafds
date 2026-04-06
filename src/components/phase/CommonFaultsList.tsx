import { AlertTriangle, ChevronRight, CheckCircle } from 'lucide-react';
import type { CommonFault, Drill } from '../../types';

interface FaultCardProps {
  fault: CommonFault;
  relatedDrills: Drill[];
  onDrillClick: (drill: Drill) => void;
}

function FaultCard({ fault, relatedDrills, onDrillClick }: FaultCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex items-start gap-2">
        <AlertTriangle size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-gray-900">{fault.title}</p>
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{fault.description}</p>
        </div>
      </div>

      <div className="px-4 py-3 space-y-3">
        {/* Coaching cues */}
        <div>
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
            교정 큐
          </p>
          <ul className="space-y-1">
            {fault.cues.map((cue, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                {cue}
              </li>
            ))}
          </ul>
        </div>

        {/* Related drills */}
        {relatedDrills.length > 0 && (
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
              교정 드릴
            </p>
            <div className="space-y-1">
              {relatedDrills.map((drill) => (
                <button
                  key={drill.id}
                  onClick={() => onDrillClick(drill)}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors text-left group"
                >
                  <span className="flex-1 text-xs text-gray-700 font-medium">{drill.name}</span>
                  <ChevronRight size={13} className="text-gray-400 group-hover:text-gray-600" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface CommonFaultsListProps {
  faults: CommonFault[];
  drills: Drill[];
  onDrillClick: (drill: Drill) => void;
}

export function CommonFaultsList({ faults, drills, onDrillClick }: CommonFaultsListProps) {
  if (faults.length === 0) return null;

  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <AlertTriangle size={15} className="text-amber-500" />
        흔한 폼 오류 &amp; 교정법
      </h2>
      <div className="space-y-3">
        {faults.map((fault) => {
          const relatedDrills = drills.filter((d) => fault.drillIds.includes(d.id));
          return (
            <FaultCard
              key={fault.id}
              fault={fault}
              relatedDrills={relatedDrills}
              onDrillClick={onDrillClick}
            />
          );
        })}
      </div>
    </div>
  );
}

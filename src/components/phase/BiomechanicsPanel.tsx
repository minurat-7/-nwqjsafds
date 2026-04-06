import { Activity } from 'lucide-react';
import { Accordion } from '../ui/Accordion';
import type { BiomechanicsNotes } from '../../types';

interface BiomechanicsPanelProps {
  notes: BiomechanicsNotes;
}

export function BiomechanicsPanel({ notes }: BiomechanicsPanelProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
        <Activity size={15} className="text-gray-500" />
        <span className="text-sm font-semibold text-gray-900">바이오메카닉스</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Summary */}
        <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-100">
          {notes.summary}
        </p>

        {/* Details */}
        <Accordion title="세부 메카닉스 포인트" defaultOpen>
          <ul className="space-y-2">
            {notes.details.map((detail, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-xs flex items-center justify-center font-medium mt-0.5">
                  {i + 1}
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </Accordion>

        {/* Musculature */}
        <Accordion title="관련 근육군">
          <div className="flex flex-wrap gap-1.5">
            {notes.musculatureInvolved.map((m) => (
              <span
                key={m}
                className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs text-gray-700"
              >
                {m}
              </span>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
}

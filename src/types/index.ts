export type DrillSource = 'tread' | 'driveline' | 'other';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type PhaseId =
  | 'windup'
  | 'leg-lift'
  | 'stride'
  | 'hip-shoulder'
  | 'arm-path'
  | 'acceleration'
  | 'deceleration';

export interface KeyMetric {
  label: string;
  value: string;
  unit?: string;
  description: string;
}

export interface CommonFault {
  id: string;
  title: string;
  description: string;
  cues: string[];
  drillIds: string[];
}

export interface BiomechanicsNotes {
  summary: string;
  details: string[];
  musculatureInvolved: string[];
}

export interface PitchingPhase {
  id: PhaseId;
  order: number;
  name: string;
  shortName: string;
  icon: string;
  color: string;         // e.g. 'blue', 'amber', 'green'
  description: string;
  biomechanicsNotes: BiomechanicsNotes;
  keyMetrics: KeyMetric[];
  commonFaults: CommonFault[];
}

export interface Drill {
  id: string;
  name: string;
  source: DrillSource;
  channelName: string;
  youtubeId: string;
  description: string;
  targetPhases: PhaseId[];
  targetFaultIds: string[];
  difficulty: Difficulty;
  equipment: string[];
  tags: string[];
}

export interface DrillFilterState {
  searchQuery: string;
  source: DrillSource | 'all';
  difficulty: Difficulty | 'all';
}

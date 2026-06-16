export interface Step {
  id: string;
  text: string;
  details?: string;
  tips?: string[];
  warnings?: string[];
  subSteps?: Step[];
}

export interface StepGroup {
  id: string;
  title: string;
  description?: string;
  steps: Step[];
}

export interface Phase {
  id: string;
  title: string;
  subtitle?: string;
  targetLevel?: string;
  groups: StepGroup[];
  bosses?: {
    solo: Step[];
    party: Step[];
  };
  gearing?: Step[];
  milestones?: string[];
}

export interface ProgressState {
  steps: Record<string, { completed: boolean; notes: string; timestamp?: number }>;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface InfoSection {
  id: string;
  title: string;
  content?: string;
  tables?: { title?: string; data: TableData }[];
  items?: { label: string; value: string; highlight?: boolean }[];
  tips?: string[];
  warnings?: string[];
  subsections?: InfoSection[];
}

export type CharacterType = 'main' | 'mule' | 'kinesis';

export type Rank = 'bronze' | 'silver' | 'gold' | 'platinum' | 'emerald' | 'diamond' | 'master' | 'challenger';

export interface Task {
  id: string;
  text: string;
  description?: string;
  warning?: string;
  tip?: string;
  subtasks?: Task[];
}

export interface TaskSection {
  id: string;
  title: string;
  description?: string;
  tasks: Task[];
}

export interface BossKill {
  bossName: string;
  difficulty: string;
  killed: boolean;
  week: number;
}

export interface ItemBurningProgress {
  stage: number;
  stars: number;
  crests: number;
  weeklyCrestBoss?: string;
}

export interface HexaProgress {
  totalFrags: number;
  allocations: Record<string, number>;
}

export interface MesoEntry {
  amount: number;
  type: string;
  week: number;
  date: string;
}

export interface GearSlot {
  slot: string;
  equipped: string;
  stars: number;
  potential: string;
}

export interface ArcaneSealProgress {
  count: number;
  tier: string;
  wands: number;
  lastWandPurchase: string;
}

export interface Character {
  id: string;
  name: string;
  type: CharacterType;
  level: number;
  rank: Rank;
  currentWeek: number;
  createdAt: string;
  progress: {
    prePatch: Record<string, boolean>;
    day0: Record<string, boolean>;
    daily: Record<string, boolean>;
    weeklyTasks: Record<string, boolean>;
    weeks: Record<number, Record<string, boolean>>;
    bosses: BossKill[];
    itemBurning: ItemBurningProgress;
    hexa: HexaProgress;
    mesos: {
      current: number;
      history: MesoEntry[];
    };
    gear: Record<string, GearSlot>;
    arcaneSeal: ArcaneSealProgress;
    events: {
      partner: string;
      expDuo: boolean;
      genesisPass: boolean;
      challengerPass: boolean;
    };
  };
}

export interface GameState {
  characters: Character[];
  activeCharacterId: string | null;
}

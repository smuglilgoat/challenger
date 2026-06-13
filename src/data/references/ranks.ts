import { Rank } from '../../types';

export interface RankRequirement {
  rank: Rank;
  points: number;
  level: number;
  bosses: string[];
  notes?: string;
}

export const rankRequirements: RankRequirement[] = [
  {
    rank: 'bronze',
    points: 5000,
    level: 260,
    bosses: ['Normal Lotus', 'Normal Damien'],
    notes: 'Just hit level 260 and clear early bosses'
  },
  {
    rank: 'silver',
    points: 10000,
    level: 260,
    bosses: ['Normal Gloom', 'Normal Darknell'],
    notes: 'Get your Lv 4 special skill ring (Roar or Continuous)'
  },
  {
    rank: 'gold',
    points: 15000,
    level: 264,
    bosses: ['Hard Lotus', 'Hard Damien'],
    notes: 'Includes all bosses below Hard Lotus/Damien'
  },
  {
    rank: 'platinum',
    points: 20000,
    level: 270,
    bosses: ['Hard Lotus', 'Hard Damien', 'AND at least 1 of: Hard Lucid/Will, Chaos Tenebris, Chaos Slime'],
    notes: '300 Sol Erda Fragments + 5 Sol Erda'
  },
  {
    rank: 'emerald',
    points: 30000,
    level: 275,
    bosses: ['All ≤ Hard Lotus/Damien', 'AND 3 of {Hard Lucid/Will, Chaos Tenebris, Chaos Slime}'],
    notes: 'Alternative: Lv 270 + all ≤ Chaos Tenebris except one. Rewards: 20 ultimate legion growth potions, legendary pot scroll, 30 bright cubes'
  },
  {
    rank: 'diamond',
    points: 40000,
    level: 277,
    bosses: ['All ≤ Chaos Tenebris (no Normal Kai)'],
    notes: 'Alternative: Lv 271 + all ≤ Chaos Tenebris AND Normal Kai. Rewards: legendary pot scroll, 60 bright cubes, cozy winter set'
  },
  {
    rank: 'master',
    points: 65000,
    level: 280,
    bosses: ['Normal Kai REQUIRED', 'All ≤ Black Mage (incl. Normal Seren, Easy Kalos; not Easy Adversary)'],
    notes: 'Alternative 1: Lv 277 + all ≤ Easy Adversary (no BM). Alternative 2: Lv 270 + all ≤ Easy Adversary (incl. BM). Rewards: 60 bright cubes'
  },
  {
    rank: 'challenger',
    points: 90000,
    level: 285,
    bosses: ['Hard Kai REQUIRED', 'All ≤ Easy Adversary (incl. BM) + Hard Kai'],
    notes: 'Alternative: Lv 280 + all ≤ Hard Seren (incl. BM) + Hard Kai. You can skip Hard Seren but NEVER Hard Kai!'
  }
];

export const getRankColor = (rank: Rank): string => {
  const colors: Record<Rank, string> = {
    bronze: 'text-amber-700',
    silver: 'text-gray-400',
    gold: 'text-yellow-500',
    platinum: 'text-cyan-400',
    emerald: 'text-green-500',
    diamond: 'text-blue-400',
    master: 'text-purple-500',
    challenger: 'text-red-500'
  };
  return colors[rank];
};

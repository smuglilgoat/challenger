export interface Pass {
  name: string;
  cost: string;
  costType: 'NX' | 'Maple Points';
  recommended: boolean;
  benefits: string[];
  notes?: string;
}

export const passes: Pass[] = [
  {
    name: "Challenger's Pass",
    cost: '19,800',
    costType: 'Maple Points',
    recommended: true,
    benefits: [
      '+200% normal-mob damage',
      '+20% EXP for ~2 months',
      'Huge node/frag/cube/booster rewards'
    ],
    notes: 'STRONGLY RECOMMENDED - makes training and mobbing much easier'
  },
  {
    name: 'Genesis (Jenny) Pass',
    cost: '30,000',
    costType: 'NX',
    recommended: true,
    benefits: [
      '3x Traces of Darkness (lib in ~4 weeks vs ~11)',
      '6-man Genesis missions',
      'Boss buff: +20 Attack, +20 All stat, +10% Boss, +10% IED, +1000 HP/MP, +150 Arcane Force',
      '3% attack Mag Soul on liberation from any BM Commander'
    ],
    notes: 'NX ONLY - cannot use Maple Points! GMS sold 2 per account last time.'
  },
  {
    name: 'Shine Pass / Goddess Pass',
    cost: '~35,000',
    costType: 'Maple Points',
    recommended: true,
    benefits: [
      'Skips you toward ~270 of leveling',
      'Massive EXP vouchers and magpots',
      'Symbol selectors and fragments'
    ],
    notes: 'Shine = Aerolia/CSO only. Goddess Pass S4 expected for everyone else.'
  },
  {
    name: 'Burning Express Pass',
    cost: 'Varies',
    costType: 'Maple Points',
    recommended: false,
    benefits: [
      'Loads of express boosters (juiced, no-EXP-cost)',
      'Efficient leveling boosters'
    ],
    notes: 'Good for efficient leveling but not essential'
  },
  {
    name: 'Challenger EXP Duo',
    cost: '10,000',
    costType: 'NX',
    recommended: false,
    benefits: [
      'Feeds EXP to a main-world character while you grind CW',
      'Up to 1.5M duo points per week (645k mobs)'
    ],
    notes: 'Only worth it if you\'ll grind ~10+ hrs/week. First 200k mobs give 4 points each (most efficient).'
  },
  {
    name: 'Momentum Pass',
    cost: 'Varies',
    costType: 'Maple Points',
    recommended: false,
    benefits: [
      'Additional leveling boost at high levels'
    ],
    notes: 'Requires Lv 280 - week 3+ thing, not Day 0'
  }
];

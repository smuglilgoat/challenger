export interface ItemBurningStage {
  stage: number;
  stars: number;
  crestsNeeded: number;
  bossRequired?: string;
  notes?: string;
}

export const itemBurningStages: ItemBurningStage[] = [
  {
    stage: 1,
    stars: 15,
    crestsNeeded: 0,
    notes: 'Starting stage'
  },
  {
    stage: 2,
    stars: 16,
    crestsNeeded: 0,
    notes: 'Clear Chaos Zakum'
  },
  {
    stage: 3,
    stars: 17,
    crestsNeeded: 0,
    notes: 'Clear Vellum'
  },
  {
    stage: 4,
    stars: 18,
    crestsNeeded: 0,
    bossRequired: 'Easy Lucid',
    notes: 'Major milestone - 18-star gear after Easy Lucid'
  },
  {
    stage: 5,
    stars: 19,
    crestsNeeded: 600,
    bossRequired: 'Easy Adversary',
    notes: 'Legendary weapon (40% boss, 30% IED, 10% attack). Weapon does NOT go beyond 18 stars.'
  },
  {
    stage: 6,
    stars: 20,
    crestsNeeded: 800,
    bossRequired: 'Easy Adversary (again)',
    notes: 'Loy weapon + 20-star gear - required for Normal/Hard Kai'
  },
  {
    stage: 7,
    stars: 21,
    crestsNeeded: 1000,
    bossRequired: 'Hard Seren',
    notes: '21-star armor'
  },
  {
    stage: 8,
    stars: 22,
    crestsNeeded: 1500,
    bossRequired: 'Easy Adversary (final)',
    notes: 'Full 22-star item-burning set!'
  }
];

export const totalCrestsNeeded = 3900;

export interface CrestReward {
  boss: string;
  crests: number;
  notes?: string;
}

export const crestRewards: CrestReward[] = [
  { boss: 'Hard Lucid / Hard Will / Chaos Gloom / Chaos Slime', crests: 100, notes: 'Any of these gives 100' },
  { boss: 'Hard Darknell / Hard Verus Hilla', crests: 200 },
  { boss: 'Normal Seren', crests: 400 },
  { boss: 'Easy Kalos', crests: 600 },
  { boss: 'Easy Adversary', crests: 800 },
  { boss: 'Hard Black Mage', crests: 1000 },
  { boss: 'Hard Seren', crests: 1000 },
  { boss: 'Hard Kai', crests: 1200 },
  { boss: 'Normal Kalos', crests: 1400 },
  { boss: 'Normal Adversary', crests: 1600 }
];

export const crestNotes = [
  'You only receive challenge crest ONCE per week',
  'Amount depends on HARDEST boss cleared that week',
  'Clearing multiple bosses in same tier does NOT stack - you just get the tier value',
  'After weekly reset, you can obtain crests again based on next hardest clear',
  'If you stay at Chaos Tenebris for 21 weeks, it takes 20 weeks to finish item burning',
  'Reach Easy Adversary: gear finishes in ~2 months',
  'Reach Hard Seren: gear can finish in ~4 weeks'
];

export interface ArcaneSealStage {
  stage: number;
  rank: string;
  points: number;
  rates: string;
  stoppingPoint: string;
}

export const arcaneSealStages: ArcaneSealStage[] = [
  {
    stage: 1,
    rank: 'Less than Gold',
    points: 0,
    rates: 'Very high chance for Normal seal. Legendary at 0.007%',
    stoppingPoint: 'Rare +6'
  },
  {
    stage: 2,
    rank: 'Gold',
    points: 15000,
    rates: 'Better chances for Epic+',
    stoppingPoint: 'Epic +6'
  },
  {
    stage: 3,
    rank: 'Emerald',
    points: 30000,
    rates: 'Good chances for Unique',
    stoppingPoint: 'Unique +6'
  },
  {
    stage: 4,
    rank: 'Diamond',
    points: 40000,
    rates: 'Can get Unique or Legendary',
    stoppingPoint: 'Unique/Legendary'
  },
  {
    stage: 5,
    rank: 'Master',
    points: 65000,
    rates: 'Rates DOUBLED from stage 4. Best for Legendary.',
    stoppingPoint: 'Legendary'
  }
];

export const arcaneSealNotes = [
  'Get 3 seal control rods per day (even offline)',
  'HARD CAP: 20 seal rods max - you stop earning at 20!',
  'Buy 30 wands/week (~5m each) from in-UI meso shop',
  'Wands last 7 days - buy them LATE in the week',
  'Goal: hit Legendary ONCE, then dismantle everything else for upgrade mats',
  'Don\'t chase Legendary before Stage 4-5 (rates double from 4→5)',
  'A +7 of one tier = +1 of the next tier',
  'All seals at same upgrade level have identical stats (only differs by class)'
];

export const arcaneSealUpgradePath = [
  'Stage 1: Just get Rare, upgrade to +6',
  'Stage 2: Go for Epic, upgrade to +6',
  'Stage 3: Go for Unique, upgrade to +6',
  'Stage 4: Can try for Legendary, or stick with Unique',
  'Stage 5: Go all-in for Legendary (rates doubled!)'
];

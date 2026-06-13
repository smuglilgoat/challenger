export interface BossTier {
  tier: number;
  name: string;
  bosses: string[];
  requirements: string;
  notes: string;
}

export const bossTiers: BossTier[] = [
  {
    tier: 1,
    name: 'Free Bosses',
    bosses: ['Hilla', 'Pink Bean', 'Zakum', 'Pierre', 'Von Bon', 'Von Leon', 'Magnus', 'Vellum', 'Papulatus', 'Normal Lotus', 'Normal Damien'],
    requirements: 'Item burning + free boss accessories',
    notes: 'Nuked within first couple hours. Can one-shot most of them.'
  },
  {
    tier: 2,
    name: 'Small Step',
    bosses: ['Normal Slime', 'Easy Lucid', 'Easy Will'],
    requirements: 'After 6th job',
    notes: 'Incredibly easy with item burning and free boss accessories. Just hit 6th job.'
  },
  {
    tier: 3,
    name: 'Still Easy',
    bosses: ['Normal Lucid', 'Normal Will', 'Normal Gloom', 'Normal Darknell'],
    requirements: 'Level 260+ with early 6th job',
    notes: 'Need more Arcane Force for later bosses. Still pushovers with freebies.'
  },
  {
    tier: 4,
    name: 'First Hard Bosses',
    bosses: ['Hard Lotus', 'Hard Damien', 'Normal Verus Hilla'],
    requirements: 'Level 266+ recommended',
    notes: 'First step to hard boss territory. Need some fragment masteries unlocked. Should have 10k challenger points for special skill ring.'
  },
  {
    tier: 5,
    name: 'The Gauntlet',
    bosses: ['Chaos Slime', 'Hard Lucid', 'Hard Will', 'Chaos Gloom', 'Hard Verus Hilla', 'Hard Darknell', 'Normal Kai'],
    requirements: 'Level 270+, rentals help a lot',
    notes: 'Massive set of bosses. Rentals make this much easier. Need class knowledge. Defeating all gets you to Diamond tier.'
  },
  {
    tier: 6,
    name: 'Early Grandis',
    bosses: ['Normal Seren', 'Easy Kalos', 'Easy Adversary'],
    requirements: 'Level 275+ recommended',
    notes: 'Far more complex mechanics than previous bosses. Get knowledge up before or while fighting them.'
  },
  {
    tier: 7,
    name: 'Finale',
    bosses: ['Hard Black Mage', 'Hard Seren', 'Hard Kai'],
    requirements: 'Level 280+ strongly recommended',
    notes: 'Hard BM can be done in tier 6 but takes ~1 hour. At tier 7, ~30-35 minutes. Hard Kai requires level 280.'
  }
];

export const bossSacRequirements = [
  { boss: 'Easy Kalos', sac: 250 },
  { boss: 'Normal Kalos', sac: 350 },
  { boss: 'Normal Malefic Star', sac: 450 }
];

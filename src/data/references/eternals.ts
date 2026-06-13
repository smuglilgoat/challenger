export interface EternalBoss {
  boss: string;
  difficulty: string;
  pieces: string;
  notes?: string;
}

export const eternalBosses: EternalBoss[] = [
  {
    boss: 'Hard Kai',
    difficulty: 'Hard mode only',
    pieces: 'Full pieces',
    notes: 'Only source from Kai. Need ~12 kills across season for 2 Eternals.'
  },
  {
    boss: 'Kalos',
    difficulty: 'Normal and above',
    pieces: 'Full pieces',
    notes: 'Party strongly encouraged. Solo Easy = strong enough for Normal party.'
  },
  {
    boss: 'First Adversary',
    difficulty: 'Normal and above',
    pieces: 'Full pieces',
    notes: 'Solo Easy = barely strong enough for Normal. Ideally be stronger.'
  },
  {
    boss: 'Kaling',
    difficulty: 'Easy and above',
    pieces: 'Half pieces (Easy), Full pieces (Normal+)',
    notes: 'Easy gives half pieces. High failure rates - be stronger for comfortable runs.'
  },
  {
    boss: 'Malefic Star',
    difficulty: 'Normal and above',
    pieces: 'Full pieces',
    notes: 'Requires solo Normal Kalos strength. Needs 450 SAC for full damage.'
  }
];

export const eternalSacRequirements = [
  { boss: 'Easy Kalos', sac: 250 },
  { boss: 'Normal Kalos', sac: 350 },
  { boss: 'Normal Malefic Star', sac: 450 }
];

export const eternalNotes = [
  '18-star Eternals beat 22-star Challengers',
  'Can star force to 22 without booming (expensive but possible)',
  'Party bossing strongly encouraged for everything except Kai',
  'Need to solo Hard Kai by week 3 to make TWO full Eternals (otherwise only one)',
  'CW3 is only ~12 weeks - very short window!'
];

export const eternalAcquisition = [
  'Hard Kai: Solo only, ~12 kills needed for 2 Eternals',
  'Normal Kalos: Party with people who can solo Easy',
  'Normal Adversary: Party with people who can solo Easy',
  'Normal Kaling: Party (Easy gives half pieces, Normal gives full)',
  'Normal Malefic Star: Party with people who can solo Normal Kalos'
];

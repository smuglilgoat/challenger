export const titleOrder = [
  {
    order: 1,
    title: 'Eternal Flame',
    when: 'Immediately after 5th job (level 200)',
    use: 'Use until level 270',
    warning: 'DO NOT immediately claim Infinite Flame at level 240!'
  },
  {
    order: 2,
    title: 'Beyond Burning',
    when: 'After reaching level 270 and finishing Beyond Burning event',
    use: 'Same stats as Infinite Flame but +100 SAC (vs 50) - huge for early Grandis',
    duration: '~2 months',
    tip: 'Use this immediately at level 270 - the SAC is crucial!'
  },
  {
    order: 3,
    title: 'Infinite Flame',
    when: 'Claim ONLY after Beyond Burning expires (~2 months later)',
    use: 'By then your SAC makes the 50-SAC difference irrelevant',
    duration: '~4 months of good title',
    warning: 'Do NOT let these two titles overlap!'
  }
];

export const titleStats = {
  eternalFlame: 'Base stats',
  beyondBurning: 'Same as Infinite Flame + 100 SAC + 100 Arcane Force',
  infiniteFlame: 'Same as Beyond Burning but 50 SAC instead of 100 SAC'
};

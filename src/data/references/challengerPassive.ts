export interface ChallengerPassive {
  rank: string;
  stats: string[];
}

export const challengerPassives: ChallengerPassive[] = [
  {
    rank: 'Base (All Ranks)',
    stats: [
      '+30% damage to boss monsters',
      '+30% defense ignore',
      '+30% critical rate',
      '+30% critical damage',
      '+30% buff duration',
      '+100% Stance',
      '+50 all stats',
      '+2500 HP/MP',
      '+10% summon duration',
      '+5% skill cooldown reduction',
      '+2x individual Guild Contribution acquisition rate/limit',
      '+100% final damage in Monster Park Extreme'
    ]
  },
  {
    rank: 'Bronze (5,000 Points)',
    stats: [
      '+50% Damage to Normal Monsters'
    ]
  },
  {
    rank: 'Silver (10,000 Points)',
    stats: [
      '+5 Attack/Magic Attack',
      '+10% Damage to Bosses',
      '+10% IED (additive)',
      '+10 All Stats',
      '+500 HP/MP'
    ]
  },
  {
    rank: 'Gold (15,000 Points)',
    stats: [
      '+5 Attack/Magic Attack',
      '+10% Damage to Bosses',
      '+10% IED (additive)',
      '+10 All Stats',
      '+500 HP/MP'
    ]
  },
  {
    rank: 'Platinum (20,000 Points)',
    stats: [
      '+10 Attack/Magic Attack',
      '+10% Damage to Bosses',
      '+10% IED (additive)',
      '+5% Critical Damage',
      '+20 All Stats',
      '+1000 HP/MP'
    ]
  },
  {
    rank: 'Emerald (30,000 Points)',
    stats: [
      '+10 Attack/Magic Attack',
      '+10% Damage to Bosses',
      '+10% IED (additive)',
      '+5% Critical Damage',
      '+30% Buff Duration',
      '+10 All Stats',
      '+500 HP/MP'
    ]
  },
  {
    rank: 'Diamond (40,000 Points)',
    stats: [
      '+20% Mesos Obtained',
      '+20% Drop Rate'
    ]
  },
  {
    rank: 'Final Passive (Diamond and onward)',
    stats: [
      '+50% EXP',
      '+80 attack/magic attack',
      '+150% damage to normal monsters',
      '+70% damage to boss monsters',
      '+70% defense ignore (SINGLE SOURCE - extremely powerful!)',
      '+30% critical rate',
      '+40% critical damage',
      '+60% buff duration',
      '+100% Stance',
      '+100 all stats',
      '+5000 HP/MP',
      '+10% summon duration',
      '+5% skill cooldown reduction',
      '+2x individual Guild Contribution acquisition rate/limit',
      '+100% final damage in Monster Park Extreme',
      '+20% meso acquisition',
      '+20% item drop rate'
    ]
  }
];

export const iedNote = 'The 70% IED from Diamond+ is ONE SINGLE SOURCE. This is incredibly powerful because IED stacks multiplicatively. One source of 70% is infinitely better than seven sources of 10%. This makes getting high IED in challenge mode not even that bad.';

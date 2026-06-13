import { TaskSection } from '../../types';

export const week1Tasks: TaskSection[] = [
  {
    id: 'week1-goals',
    title: 'Week 1 — Establish (Target Lv 270, ideally 275)',
    description: 'Your first week of progression. Focus on bossing, ranking up, and setting up meso/drop gear.',
    tasks: [
      {
        id: 'solo-ct-below',
        text: 'Solo Chaos Tenebris and below',
        description: 'Clear all bosses up to and including Chaos Tenebris'
      },
      {
        id: 'try-normal-seren',
        text: 'Try Normal Seren solo',
        description: 'Clearing it Week 1 fast-tracks item burning. Most people can\'t yet.',
        tip: 'If you can\'t solo it, party Hard Seren / Easy Kalos instead'
      },
      {
        id: 'party-hard-seren',
        text: 'Party Hard Seren / Easy Kalos (if can\'t solo Normal Seren)',
        description: 'Alternative if Normal Seren solo is too hard'
      },
      {
        id: 'rank-silver',
        text: 'Rank up to Silver: Clear Normal Lucid',
        description: 'Claim frags + OZ ring, upgrade Hexa'
      },
      {
        id: 'rank-gold',
        text: 'Rank up to Gold: Clear Hard Lotus/Damien + Hard Will',
        description: 'Claim frags, upgrade Hexa'
      },
      {
        id: 'rank-platinum',
        text: 'Rank up to Platinum: Clear Chaos Gloom / Hard Lucid / Chaos Slime',
        description: 'Continue upgrading Hexa with frags'
      },
      {
        id: 'rent-gear-at-270',
        text: 'At Lv 270, rent gear (everything except OZ ring)',
        description: 'Save ~2 bil to clear Chaos Tenebris (you need it for rental purchase)',
        tip: 'Rentals last 2 days - rent near end of week for maximum value'
      },
      {
        id: 'roll-meso-drop-gear',
        text: 'Roll 5-line meso, 4-line drop across 9 accessories',
        description: 'Build meso/drop farming gear first, then go for hybrid/double-drop lines',
        tip: 'Always keep ~1.4 bil banked for next week\'s rentals!'
      },
      {
        id: 'hexa-janus-10',
        text: 'Get Janus to Lv 10 first',
        description: 'So grinding isn\'t miserable, then follow your class Discord\'s Hexa order',
        tip: 'Janus 10 makes training much more efficient'
      },
      {
        id: 'unlock-ascent',
        text: 'Unlock Ascent: M1 → M2 → Ascent Hecate → Lv 10 Jonas',
        description: 'Jenna\'s recommended order for Ascent skills',
        tip: 'Lv 10 Jonas speeds up trading significantly'
      }
    ]
  },
  {
    id: 'week1-hexa-budget',
    title: 'Week 1 Hexa Frag Budget (~2,300+ frags)',
    description: 'Where your fragments come from this week',
    tasks: [
      {
        id: 'cw-missions-600',
        text: 'CW missions: ~600 frags',
        description: 'From Challenger World mission rewards'
      },
      {
        id: 'challenger-shop-530',
        text: 'Challenger Shop: ~530 frags',
        description: 'Purchase from Challenger World shop'
      },
      {
        id: 'kai-30',
        text: 'Kai: ~30 frags',
        description: 'From killing Normal Kai'
      },
      {
        id: 'winter-survival-100',
        text: 'Winter Survival: ~100 frags',
        description: 'If the event is available'
      },
      {
        id: 'beyond-burning-100',
        text: 'Beyond Burning: ~100 frags',
        description: 'From Beyond Burning event rewards'
      },
      {
        id: 'shine-pass-300',
        text: 'Shine/Goddess Pass: ~300 frags',
        description: 'From pass rewards'
      },
      {
        id: 'high-mountain-40-95',
        text: 'High Mountain/Angler: ~40-95 frags',
        description: 'From weekly epic dungeon'
      },
      {
        id: 'order-request-90-180',
        text: 'Day 0/Day 1 Erda request: ~90-180 frags',
        description: 'From Sol Erda order request'
      },
      {
        id: 'operation-dive',
        text: 'Operation Dive: unknown amount',
        description: 'Additional frags from Operation Dive event'
      }
    ]
  },
  {
    id: 'week1-meso-budget',
    title: 'Week 1 Meso Budget',
    description: 'Expected income and spending for week 1',
    tasks: [
      {
        id: 'income-daily-bosses',
        text: 'Income: ~111m/day from daily bosses',
        description: 'Daily boss clears'
      },
      {
        id: 'income-ursus',
        text: 'Income: ~120m/day from Ursus',
        description: 'Daily Ursus runs'
      },
      {
        id: 'income-ct-below',
        text: 'Income: ~5.2m from Chaos Tenebris and below',
        description: 'Weekly boss clears (could be more if you solo Normal Seren)'
      },
      {
        id: 'spend-rentals',
        text: 'Spend: ~1.9 bil on rentals',
        description: 'If you rent everything'
      },
      {
        id: 'spend-meso-shop',
        text: 'Spend: ~1.5 bil on meso shop',
        description: 'Mecha Berry, Express Boosters, etc.'
      },
      {
        id: 'spend-monster-tickets',
        text: 'Spend: ~500m on monster park tickets',
        description: 'Weekly Monster Park tickets'
      },
      {
        id: 'total-spend',
        text: 'Total spending: ~3.8 bil in week 1',
        description: 'Combined spending on rentals, shops, and tickets'
      }
    ]
  },
  {
    id: 'week1-damage-tips',
    title: 'Week 1 Damage Tips',
    description: 'If you need more damage to progress',
    tasks: [
      {
        id: 'tier-up-arcane-seal',
        text: 'Tier up the Arcane Seal',
        description: 'Higher tier seals give more stats'
      },
      {
        id: 'legendary-emblem-secondary',
        text: 'Get emblem/secondary to Legendary with two useful lines',
        description: 'Attack% / boss% lines using solid cubes from Challenger shop',
        tip: 'Two useful lines = attack% or boss% - use solid cubes to roll'
      }
    ]
  }
];

import type { InfoSection } from './types';

export const passesData: InfoSection[] = [
  {
    id: 'passes-worth-buying',
    title: 'Passes Worth Buying',
    tables: [
      {
        data: {
          headers: ['Pass', 'Cost', 'Key Benefits'],
          rows: [
            [
              'Challenger\'s Pass',
              '19,800 Maple Pts',
              '+200% normal-mob damage, +20% EXP for ~2 months, node/frag/cube/booster rewards',
            ],
            [
              'Genesis (Gene) Pass',
              '30,000 NX only',
              '3x Traces of Darkness, 6-man Genesis missions, boss buff (+20 ATK, +20 all stat, +10% boss, +10% IED, +1,000 HP, +150 AF), 3% attack Magnificent Soul on lib',
            ],
            [
              'Shine Pass / Goddess Pass',
              '~35k Maple Pts',
              'Skips toward ~270',
            ],
            [
              'Burning Express Pass',
              '30,000 NX',
              'Express boosters',
            ],
            [
              'Momentum Pass',
              '50,000 NX',
              'Requires Lv 280',
            ],
            [
              'Challenger EXP Duo',
              '10,000 NX/week',
              'Feeds EXP to main-world char',
            ],
          ],
        },
      },
    ],
  },
  {
    id: 'challenger-exp-duo',
    title: 'Challenger EXP Duo',
    content: '10,000 NX/week. Feeds EXP points to your main-world character based on mob kills.',
    tables: [
      {
        data: {
          headers: ['Mob Kills', 'Points per Kill', 'Cumulative Points'],
          rows: [
            ['First 200k', '4', '800,000'],
            ['Next 80k (200k–280k)', '3', '1,040,000'],
            ['Next 95k (280k–375k)', '2', '1,230,000'],
            ['Rest (375k–645k)', '1', '1,500,000'],
          ],
        },
      },
    ],
    items: [
      { label: 'Weekly mob cap', value: '645k mobs for 1.5M points', highlight: true },
      { label: 'Sweet spot', value: '200k mobs (~10 hrs) — best points-per-hour', highlight: true },
    ],
  },
  {
    id: 'challenger-partner',
    title: 'Challenger Partner',
    tables: [
      {
        title: 'Duo Missions',
        data: {
          headers: ['Boss', 'Reward'],
          rows: [
            ['Hard Will', '100 frags'],
            ['Hard Verus Hilla', '100 frags'],
            ['Easy Adversary', 'Partner Ring'],
            ['Hard Seren', 'Partneroid + Lidium Heart'],
            ['Normal Kalos', 'Soul Partner Medal'],
          ],
        },
      },
    ],
    warnings: [
      'You\'re locked in by contract and can\'t change partner.',
    ],
  },
];

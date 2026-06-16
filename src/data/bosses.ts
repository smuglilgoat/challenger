import type { InfoSection } from './types';

export const bossesData: InfoSection[] = [
  {
    id: 'boss-tiers',
    title: 'Boss Tiers & Damage Gates',
    content: 'Progression order for Challenger World Season 3 bosses.',
    tables: [
      {
        data: {
          headers: ['Tier', 'Name', 'Bosses', 'Notes'],
          rows: [
            [
              '1',
              'Free bosses',
              'Hilla, Pink Bean, Zakum, Pierre, Von Bon, Bloody Queen, Von Leon, Magnus, Vellum, Papulatus, Normal Lotus, Normal Damien',
              'Nuked with item burning + free boss-accessory set.',
            ],
            [
              '2',
              'Small step',
              'Normal Slime, Easy Lucid, Easy Will',
              'Trivial after 6th job.',
            ],
            [
              '3',
              'Still easy',
              'Normal Lucid, Normal Will, Normal Gloom, Normal Darknell',
              'Need a bit more Arcane Force.',
            ],
            [
              '4',
              'First hard bosses',
              'Hard Lotus, Hard Damien, Normal Verus Hilla',
              'Lv 266+ recommended.',
            ],
            [
              '5',
              'The gauntlet',
              'Chaos Slime, Hard Lucid, Hard Will, Chaos Gloom, Hard Verus Hilla, Hard Darknell, Normal Kai',
              'Lv 270+, rentals help. Clearing all = Diamond.',
            ],
            [
              '6',
              'Early Grandis',
              'Normal Seren, Easy Kalos, Easy Adversary',
              'Lv 275+.',
            ],
            [
              '7',
              'Finale',
              'Hard Black Mage, Hard Seren, Hard Kai',
              'Lv 280+ strongly recommended.',
            ],
          ],
        },
      },
    ],
  },
  {
    id: 'sac-gates',
    title: 'Sacred Power (SAC) Gates',
    tables: [
      {
        data: {
          headers: ['Boss', 'SAC Required'],
          rows: [
            ['Easy Kalos', '250'],
            ['Normal Kalos', '350'],
            ['Normal Malefic Star', '450'],
          ],
        },
      },
    ],
  },
  {
    id: 'kai-season-boss',
    title: 'Kai Season Boss',
    content:
      'Exists only in Challenger World. 1 clear per week per Maple ID. Does not count toward weekly boss limit. Does not drop Intense Power Crystal.',
    tables: [
      {
        title: 'Difficulty',
        data: {
          headers: ['Mode', 'Level', 'HP', 'Time Limit', 'Deaths Allowed'],
          rows: [
            ['Normal', '270', '126 trillion', '20 min', '5'],
            ['Hard', '280', '483 trillion', '20 min', '5'],
          ],
        },
      },
    ],
    items: [
      { label: 'Entry NPC', value: 'Annette' },
      {
        label: 'Locations',
        value: 'Henesys, Nameless Town, Cernium Square, City of Researchers',
      },
    ],
    subsections: [
      {
        id: 'kai-mechanics',
        title: 'Kai Mechanics',
        items: [
          {
            label: 'Chrono Gauge',
            value:
              'Fills as you fight. Drops when Kai hits you.',
          },
          {
            label: 'Chrono Step',
            value:
              'Press NPC Chat / Harvest key to dash. Invulnerable for 0.5s. 1 charge every 5s, up to 3 charges.',
          },
          {
            label: 'Time Distortion',
            value:
              '~1 min in, Kai speeds up. Press Tab for Chrono Break to slow time. A successful Chrono-Step parry during Time Distortion instantly refunds cooldown.',
          },
          {
            label: '10,000-point Groggy',
            value:
              'During Time Distortion a score climbs as you dodge. Reach 10,000 and Kai goes groggy — ALL cooldowns drop by 40 seconds. Score freezes while dead.',
            highlight: true,
          },
          {
            label: '50% HP Power-up',
            value: 'At 50% HP Kai powers up and skills get enhanced.',
          },
        ],
      },
      {
        id: 'kai-rewards',
        title: 'Kai Rewards',
        tables: [
          {
            data: {
              headers: ['Reward', 'Mode', 'Details'],
              rows: [
                ['Gold Meso Pouch', 'Both', '+10m mesos'],
                [
                  'Unstable Time Fragment',
                  'Hard only (tradeable)',
                  '10 fragments → 1 Eternal Hat / Top / Bottom / Shoulder',
                ],
                [
                  "Time's Eternal Armor Box",
                  'Hard only',
                  '1 Eternal Hat / Top / Bottom / Shoulder',
                ],
                [
                  "Kai's Eternal Armor Box",
                  'Both',
                  '1 Eternal Shoes / Gloves / Cape',
                ],
                [
                  "Kai's Pitch-Black Accessory Box",
                  'Both',
                  'Pitched accessory',
                ],
                [
                  "Kai's Basic Sol Erda Fragment Box",
                  'Both',
                  'Random fragments',
                ],
                [
                  "Kai's Advanced Sol Erda Fragment Box",
                  'Hard only',
                  'Random fragments (bigger)',
                ],
              ],
            },
          },
        ],
        tips: [
          'Kai is THE source of Eternal armor. Hard Kai is the only way to farm Time Fragments + Advanced frags. Kai gives no Challenge Crests.',
        ],
      },
    ],
  },
];

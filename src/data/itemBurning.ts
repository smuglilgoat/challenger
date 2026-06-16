import type { InfoSection } from './types';

export const itemBurningData: InfoSection[] = [
  {
    id: 'item-burning-plus',
    title: 'Item Burning PLUS — Free 22★ Gear Set',
    content: '8-piece Challenger\'s Equipment: Hat, Top, Bottom, Gloves, Shoes, Cape, Shoulder, Weapon.',
    tables: [
      {
        title: 'Stages',
        data: {
          headers: ['Stage', 'Level', 'Boss', 'Crests', 'Star Force', 'Notes'],
          rows: [
            ['1', '200', 'Chaos Zakum', '—', '—', 'No crests required'],
            ['2', '210', 'Chaos Vellum', '—', '17★', '+ additional potential'],
            ['3', '225', 'Normal Lotus', '—', '18★', '+ potential → Unique'],
            ['4', '250', 'Easy Lucid', '—', '—', 'Additional pot → Epic/Unique'],
            ['5', '265', 'Hard Verus Hilla', '600', '19★', '+ Legendary weapon'],
            ['6', '270', 'Normal Seren', '800', '20★', ''],
            ['7', '275', 'Easy Kalos', '1,000', '21★', ''],
            ['8', '280', 'Easy Adversary', '1,500', '22★', ''],
          ],
        },
      },
    ],
    items: [
      { label: 'Total crests (Stages 5→8)', value: '3,900', highlight: true },
    ],
  },
  {
    id: 'crest-system',
    title: 'Crest System',
    content: 'Crests come once per week from your single hardest qualifying clear. They don\'t stack — only the difference is paid when you clear a harder boss.',
    tables: [
      {
        title: 'Crest Rewards by Boss',
        data: {
          headers: ['Boss', 'Crests'],
          rows: [
            ['Hard Lucid / Will / Chaos Gloom / Chaos Slime', '100'],
            ['Hard Darknell / Hard Verus Hilla', '200'],
            ['Normal Seren', '300'],
            ['Easy Kalos', '400'],
            ['Easy Adversary', '500'],
            ['Hard Seren', '1,000'],
            ['Easy Kaling', '1,300'],
            ['Normal Kalos', '1,400'],
            ['Normal Adversary and all higher', '1,500'],
            ['Black Mage / Kai', '0 (give no crests)'],
          ],
        },
      },
    ],
  },
  {
    id: 'optimal-crest-plan',
    title: 'Optimal Crest Plan',
    tables: [
      {
        data: {
          headers: ['Week', 'Boss', 'Crests Earned', 'Running Total', 'Stage Unlocked'],
          rows: [
            ['1', 'Solo Normal Seren', '300', '300', '—'],
            ['2', 'Solo Easy Adversary', '500', '800', 'Stage 5 (600) — 200 banked'],
            ['3', 'Solo Easy Adversary', '500', '700', 'Almost at Stage 6 (800)'],
            ['4', 'Solo Hard Seren', '1,000', '1,700', 'Stage 6 (800) done — banking toward Stage 7'],
            ['5', 'Hard Seren', '1,000', '2,700', 'Stage 7 (1,000) done'],
            ['6', 'Hard Seren', '1,000', '3,700', 'Banking toward Stage 8'],
            ['7', 'Hard Seren', '1,000', '4,700', 'Stage 8 (1,500) done'],
            ['8', 'Hard Seren', '1,000', '5,700', 'All stages complete'],
          ],
        },
      },
    ],
  },
  {
    id: 'winter-survival',
    title: 'Winter Survival Missions',
    subsections: [
      {
        id: 'winter-step-up',
        title: 'Step-Up Missions (9 Stages)',
        tables: [
          {
            data: {
              headers: ['Stage', 'Reward'],
              rows: [
                ['1', 'Ring Selector'],
                ['2', '30-day Spirit Pet'],
                ['3', 'Cubes'],
                ['4', 'Transparent Equipment Coupons'],
                ['5', 'Unique Emblem/Secondary Box (solo Chaos Vellum)'],
                ['6', 'Huge Symbol Vouchers'],
                ['7', 'Additional Cubes'],
                ['8', 'Legendary Scroll'],
                ['9', 'Final Reward Bundle'],
              ],
            },
          },
        ],
      },
      {
        id: 'winter-weekly',
        title: 'Weekly Missions',
        content: 'Complete weekly Winter Survival missions for additional cubes, symbol vouchers, and progression rewards.',
      },
    ],
  },
];

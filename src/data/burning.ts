import type { InfoSection } from './types';

export const burningData: InfoSection[] = [
  {
    id: 'burning-types',
    title: 'Three Kinds of Burning Characters',
    tables: [
      {
        data: {
          headers: ['Type', 'Bonus', 'Level Range', 'Perks', 'Limit'],
          rows: [
            [
              'Tera Burning',
              '+2 levels per level-up',
              '→ 200',
              'Starter gift box & Eternal Flame Title',
              'Up to 3 per Challenger World',
            ],
            [
              'Hyper Burning MAX',
              '+4 bonus levels per level-up (the "1+4")',
              '10 → 260',
              'Your main character',
              '1 per Maple ID',
            ],
            [
              'Burning Beyond',
              '+1 bonus level per level-up',
              '260 → 270',
              'Continuation after Hyper Burning MAX',
              '1 per Maple ID',
            ],
          ],
        },
      },
    ],
    tips: [
      'Your main is a Hyper Burning MAX character that becomes a Burning Beyond character at 260. Your mules are Tera Burning characters.',
    ],
  },
];

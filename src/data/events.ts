import type { InfoSection } from './types';

export const eventsData: InfoSection[] = [
  {
    id: 'challenger-shop',
    title: 'Challenger Shop',
    subsections: [
      {
        id: 'general-coins',
        title: 'General Coins',
        items: [
          { label: '3x EXP Coupon', value: '100c, 7/wk' },
          { label: 'Selective VIP Buff', value: '30c' },
          { label: 'Sol Erda Fragment', value: '40c, limit 500' },
          { label: 'Sol Erda', value: '2000c, limit 5' },
          { label: 'Strange Cube', value: '5c' },
          { label: 'Meister Cube', value: '100c, limit 100' },
          { label: 'Strange Additional Cube', value: '20c' },
          { label: '100% Epic Pot Scroll', value: '150c, limit 30' },
          { label: '100% Additional Pot Scroll', value: '150c, limit 30' },
          { label: '17★ Scroll', value: '3000c, limit 3' },
          { label: '1000 Spell Traces', value: '100c' },
        ],
      },
      {
        id: 'advanced-coins',
        title: 'Special (Advanced) Coins',
        items: [
          { label: 'Abyss Rebirth Flame', value: '1c, limit 150' },
          { label: '10 Frags', value: '1c, limit 10 (= 100 frags)' },
          { label: 'Sol Erda', value: '3c, limit 20' },
          { label: 'Black Cube', value: '1c, limit 20' },
          { label: 'White Additional Cube', value: '2c, limit 20' },
        ],
      },
    ],
    tips: [
      'Shop yields ~600 frags/week (500 via regular coins + 100 via advanced). Buy 3x from the boss coin shop too.',
    ],
  },
  {
    id: 'hunting-mission',
    title: 'Hunting Mission',
    content: '1,000 mobs in your level range → 300 coins, 1x/day, 5x/week (solo or no party).',
    tips: ['Hunting Mission Pass (2,000 Maple Pts) can backfill a missed day.'],
  },
  {
    id: 'trace-restore',
    title: 'Trace Restore / Pitched',
    content: 'Run weekly (Practice OK — points carry to your main world).',
    items: [
      { label: 'Star Spec boxes', value: 'Cap 12/day' },
      { label: 'Pitched Whisper Crystals', value: 'Save 390 for a Genesis Badge before spending', highlight: true },
    ],
    warnings: [
      "Don't run Trace Restore early — it transfers only after Challenger World ends.",
    ],
  },
];

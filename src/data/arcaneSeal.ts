import type { InfoSection } from './types';

export const arcaneSealData: InfoSection[] = [
  {
    id: 'arcane-seal-system',
    title: 'Arcane Seal System',
    content: 'Break seals to obtain Seal\'s Cores (Normal → Legendary). Equip a core for class-based stats and enhance it up to Stage 12.',
    items: [
      { label: 'Seal Control Rods', value: '3/day (even offline)', highlight: true },
      { label: 'Hard cap', value: '20 rods', highlight: true },
      { label: 'Wands per week', value: '30 (~5m each) from in-UI meso shop', highlight: false },
      { label: 'Wand duration', value: '7 days — buy late in the week', highlight: false },
    ],
  },
  {
    id: 'seal-stage-gating',
    title: 'Seal Stage Gating',
    tables: [
      {
        data: {
          headers: ['Stage', 'Size', 'Rank Required'],
          rows: [
            ['1', 'Extra Small', 'Below Gold'],
            ['2', 'Small', 'Gold+'],
            ['3', 'Medium', 'Emerald+'],
            ['4', 'Large', 'Diamond+'],
            ['5', 'Extra Large', 'Master+'],
          ],
        },
      },
    ],
  },
  {
    id: 'core-rarity-odds',
    title: 'Core Rarity Odds',
    tables: [
      {
        data: {
          headers: ['Stage', 'Normal', 'Rare', 'Epic', 'Unique', 'Legendary'],
          rows: [
            ['1', '67.49%', '30.45%', '2.03%', '0.023%', '0.007%'],
            ['2', '52.60%', '31.40%', '15.70%', '0.25%', '0.05%'],
            ['3', '49.95%', '29.95%', '14.95%', '5.05%', '0.10%'],
            ['4', '0%', '29.95%', '62.88%', '6.65%', '0.52%'],
            ['5', '0%', '0%', '91.85%', '7.10%', '1.05%'],
          ],
        },
      },
    ],
    tips: [
      'Don\'t chase Legendary before Stage 4→5 (rate doubles, 0.52%→1.05%). Once you hit Legendary, dismantle everything else for Seal Energy and pump that one core.',
    ],
    warnings: [
      'Enhancing gets brutal at the top (11→12 is 0.7%), so this is a long-season project.',
    ],
  },
];

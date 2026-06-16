import type { InfoSection } from './types';

export const gearData: InfoSection[] = [
  {
    id: 'meso-drop-gear',
    title: 'Meso / Drop Farming Gear',
    content:
      'Build toward 100% meso + 80% drop (one meso-or-drop line per equip across 9 accessories), then roll hybrids/double-drop.',
    items: [
      { label: 'Silver Blossom Ring', value: 'Quest reward' },
      { label: 'Treasure Hunter John Ring', value: '~5 min NLC quest' },
      { label: 'Event Ring (x2)', value: 'Event rewards' },
      { label: 'Zakum Face', value: 'Boss drop' },
      { label: 'Aquatic Letter / Zakum Eye', value: 'Boss drop / quest' },
      { label: 'Dea Sidus / Horntail / Hilla Earrings', value: 'Boss drops' },
      { label: 'Mechinator Pendant', value: 'Mariarium' },
      { label: 'Greed Pendant', value: '+20% equip drop', highlight: true },
      { label: 'Condensed Power Crystal', value: 'Pocket slot' },
    ],
    subsections: [
      {
        id: 'meso-drop-order',
        title: 'Rolling Order',
        items: [
          { label: 'Step 1', value: '5-line meso on 5 accessories' },
          { label: 'Step 2', value: '4-line drop on 4 accessories' },
          { label: 'Step 3', value: 'Hybrids / double-drop lines' },
          { label: 'Goal', value: '100% meso + 200% drop', highlight: true },
        ],
      },
    ],
    tips: ['Pop the vac pet only once this gear is ready.'],
  },
  {
    id: 'damage-gear',
    title: 'Damage Gear, Armor & Eternals',
    content:
      'You barely touch damage accessories early — rentals + boss-accessory box cover most slots.',
    subsections: [
      {
        id: 'slots-to-fill',
        title: 'Slots to Fill',
        content: '3 rings, pocket, 2nd pendant, secondary, emblem, medal, heart, badge',
      },
      {
        id: 'rentals',
        title: "Rentals (Arthur's)",
        content:
          "Rent everything once/week near week's end (last ~2 days). All accessories incl. totems ≈ 1.6 bil. Available until Nov 10, 2026.",
        warnings: ['Always keep ~1.4 bil banked for next week\'s rentals.'],
      },
      {
        id: 'weapon',
        title: 'Weapon',
        content: 'Stick with item-burning weapon until you liberate.',
      },
      {
        id: 'secondary',
        title: 'Secondary',
        content:
          'Frozen one; aim for 2-line Boss%/Attack%. Upcoming Astra secondary (July patch) makes choice barely matter.',
      },
      {
        id: 'emblem',
        title: 'Emblem',
        items: [
          { label: 'Low rank', value: '1 IED line is fine' },
          { label: 'Mid rank', value: '2-line Attack% + IED (never 2-line IED)', highlight: true },
          { label: 'Platinum+', value: '2-line Attack%' },
        ],
      },
      {
        id: 'armor',
        title: 'Armor',
        content: 'Item burning carries you; replace one piece at a time with Ignitia keys.',
      },
      {
        id: 'heart',
        title: 'Heart',
        items: [
          { label: 'Bronze', value: 'Lidium (free)' },
          { label: 'Week 6', value: 'Fairy (Night of Phantasms check-in)' },
          { label: 'After Hard Kai', value: 'Plasma' },
        ],
      },
      {
        id: 'medal',
        title: 'Medal',
        content: 'Vellum or Monster Park medal early.',
      },
      {
        id: 'android',
        title: 'Android',
        content: 'Free Challengers Insigniaroid at Bronze.',
      },
    ],
  },
  {
    id: 'post-rental-goals',
    title: 'Post-Rental Accessory Goals',
    items: [
      { label: 'OZ / Restraint Ring', value: 'Silver rank' },
      { label: 'Continuous Ring', value: '10k pts' },
      { label: 'Superior Golux', value: 'Ring / Belt / Earring set' },
      { label: 'Slime Ring / Meister / Endless Terror', value: 'High-tier accessories' },
      { label: 'Daybreak Pendant + Slime Ring', value: '2-set Dawn bonus', highlight: true },
      { label: 'Twilight Mark / Sweetwater Face', value: 'Face accessory' },
      { label: 'Black Bean Mark Eye', value: 'Eye accessory' },
      { label: 'Holy Pink Beauty / Curse Spellbook', value: 'Pocket slot' },
    ],
  },
  {
    id: 'title-order',
    title: 'Title Order',
    items: [
      {
        label: '1. Eternal Flame',
        value:
          'From first Arcane Symbol after 5th job (60-day title from hyperburn creation reward). Use until 270. Do NOT auto-claim/use Infinite Flame early.',
        highlight: true,
      },
      {
        label: '2. Burning Beyond',
        value:
          'After Lv 270 + finishing Burning Beyond track. Same stats as Infinite Flame but +100 SAC (vs 50) + 100 Arcane Force. Use immediately at 270. Lasts ~2 months.',
      },
      {
        label: '3. Infinite Flame',
        value:
          'Claim only after Burning Beyond expires (~2 months). By then your own SAC makes the 50-SAC gap irrelevant.',
      },
    ],
    warnings: ["Don't overlap titles — used back-to-back they cover ~6 months."],
  },
];

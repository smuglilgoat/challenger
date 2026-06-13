import { TaskSection } from '../../types';

export const week7Tasks: TaskSection[] = [
  {
    id: 'week7-bossing',
    title: 'Week 7 — Bossing: Full Burning Set',
    description: 'If you\'ve been clearing Hard Seren since week 5-6, you finish the full 22-star item-burning set.',
    tasks: [
      {
        id: 'solo-easy-kalos',
        text: 'Solo Easy Kalos',
        description: 'Weekly clear. Should be routine by now.'
      },
      {
        id: 'solo-easy-adversary',
        text: 'Solo Easy Adversary',
        description: 'Weekly clear for crests.'
      },
      {
        id: 'attempt-hard-seren-kai',
        text: 'Keep attempting Hard Seren / Hard Kai solo',
        description: 'Continue pushing for these bosses. You should be strong enough by now.'
      },
      {
        id: 'weekly-normal-seren',
        text: 'Weekly Normal Seren clear (400 crests)',
        description: 'Continue accumulating crests.'
      },
      {
        id: 'finish-full-burning-set',
        text: 'Finish the final Easy Adversary item burn → full 22-star item-burning set!',
        description: 'If you\'ve been clearing Hard Seren since week 5-6, you complete the full set!',
        tip: 'Full 22-star set is the culmination of 7 weeks of boss progression!'
      }
    ]
  },
  {
    id: 'week7-item-burning',
    title: 'Week 7 — Complete Item Burning',
    description: 'The final stage of item burning.',
    tasks: [
      {
        id: 'stage-8-complete',
        text: 'Complete Stage 8 item burning (1,500 crests → full 22★ set)',
        description: 'The full 22-star item-burning set! This is a massive power spike and the end of item burning progression.'
      },
      {
        id: 'armor-replacement-plan',
        text: 'Plan armor replacement: build Eternal hat/top/bottom + Arcane shoulder/shoe/glove/cape',
        description: '18★ Eternals already beat 22★ Challengers. Use Ignitia keys to swap one piece at a time.'
      }
    ]
  },
  {
    id: 'week7-kinesis',
    title: 'Week 7 — Kinesis Launch (if applicable)',
    description: 'Kinesis launches around this time. Dump all saved resources.',
    tasks: [
      {
        id: 'dump-resources',
        text: 'Dump ALL saved resources onto Kinesis: frags, gear, mecha berries, express boosters, arcane boxes',
        description: 'His week 1 ≈ everyone\'s week 7. He should be able to solo Chaos Tenebris his first week.'
      },
      {
        id: 'kinesis-day0',
        text: 'If Kinesis has his own Goddess Pass, follow the full Day 0 sequence on him',
        description: 'Same box sequence as §3C of the guide. Use all saved tradeable vouchers/magpots.'
      },
      {
        id: 'kinesis-passes',
        text: 'Activate saved passes on Kinesis: Challenger Pass, Genesis Pass, Beyond Burning',
        description: 'These were saved from your mule since Day 0.'
      }
    ]
  },
  {
    id: 'week7-gear',
    title: 'Week 7 — Gear & Long-term Goals',
    description: 'Transition from item burning to Eternal/pitched gear.',
    tasks: [
      {
        id: 'eternal-progression',
        text: 'Continue partying for Eternal pieces (Normal Kalos/Adversary/Kaling/Malefic Star)',
        description: 'Build Eternal armor to replace item burning gear piece by piece.'
      },
      {
        id: 'trace-restore',
        text: 'Run Trace Restore missions weekly (practice mode OK)',
        description: 'Points carry to your main world. Don\'t skip these.'
      },
      {
        id: 'star-spec-boxes',
        text: 'Cap 12 Star Spec boxes/day',
        description: 'These transfer to your main world after Challenger World ends.'
      },
      {
        id: 'pitched-whisper',
        text: 'Loot Pitched Whisper Crystals — save 390 for Genesis Badge',
        description: 'Don\'t spend crystals on anything else until you have 390 for the badge.'
      }
    ]
  }
];

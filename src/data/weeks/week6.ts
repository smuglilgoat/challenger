import { TaskSection } from '../../types';

export const week6Tasks: TaskSection[] = [
  {
    id: 'week6-bossing',
    title: 'Week 6 — Bossing Progression',
    description: 'Continue pushing Hard Seren/Kai while maintaining weekly clears.',
    tasks: [
      {
        id: 'solo-easy-kalos',
        text: 'Solo Easy Kalos',
        description: 'Weekly clear. Should be comfortable by now.'
      },
      {
        id: 'solo-easy-adversary',
        text: 'Solo Easy Adversary',
        description: 'Weekly clear for crests and item burning.'
      },
      {
        id: 'attempt-hard-seren-kai',
        text: 'Keep attempting Hard Seren / Hard Kai',
        description: 'Continue pushing for these difficult bosses. You should be getting closer each week.'
      },
      {
        id: 'weekly-normal-seren',
        text: 'Weekly Normal Seren clear (400 crests)',
        description: 'Continue accumulating crests.'
      }
    ]
  },
  {
    id: 'week6-item-burning',
    title: 'Week 6 — Item Burning',
    description: 'Finish Easy Kalos burn and push toward full set.',
    tasks: [
      {
        id: 'finish-easy-kalos-burn',
        text: 'Finish the Easy Kalos item burn',
        description: 'Complete Easy Kalos item burning stage (600 crests) if not done in weeks 4-5.'
      },
      {
        id: 'crest-stage8',
        text: 'Accumulate crests toward Stage 8 (1,500 needed for 22★)',
        description: 'If clearing Hard Seren weekly, you should be close to completing Stage 8.'
      }
    ]
  },
  {
    id: 'week6-fairy-heart',
    title: 'Week 6 — Fairy Heart Unlock',
    description: 'Major heart upgrade becomes available this week.',
    tasks: [
      {
        id: 'claim-fairy-heart',
        text: 'Claim Fairy Heart from Week-6 Knight of Fantasms check-in',
        description: 'Lv 130 heart, upgradeable to 20★. Major upgrade from Lidium Heart.',
        tip: 'This is a significant power spike for your heart slot!'
      },
      {
        id: 'save-spare-fairy-heart',
        text: 'Save the spare Fairy Heart from Shine Pass login reward for mule/Kinesis',
        description: 'The Shine Pass login reward also gives a Fairy Heart. Save it for your mule or Kinesis.',
        tip: 'Save the spare Fairy Heart for your Kinesis or mule!'
      },
      {
        id: 'plasma-heart-eligible',
        text: 'After getting Fairy Heart, you\'re eligible to upgrade to Plasma Heart after Hard Kai',
        description: 'Once you defeat Hard Kai, you can upgrade Fairy Heart → Plasma Heart (Lv 130, 20★ possible).'
      }
    ]
  },
  {
    id: 'week6-gear',
    title: 'Week 6 — Gear Updates',
    description: 'Continue gear optimization.',
    tasks: [
      {
        id: 'continue-rentals',
        text: 'Continue renting gear weekly (~1.6 bil)',
        description: 'Rentals available until Nov 10, 2026.'
      },
      {
        id: 'eternal-pieces',
        text: 'Continue partying for Eternal pieces (Normal Kalos/Adversary/Kaling/Malefic Star)',
        description: 'Build Eternal armor. 18★ Eternals beat 22★ Challengers.'
      },
      {
        id: 'pitched-items',
        text: 'Start working on pitched items if you have Pitched Whisper Crystals',
        description: 'Save 390 crystals for Genesis Badge before spending on anything else.'
      }
    ]
  },
  {
    id: 'week6-kinesis-prep',
    title: 'Week 6 — Kinesis Preparation (if applicable)',
    description: 'Kinesis launches around week 6-7. Prepare resources.',
    tasks: [
      {
        id: 'hoard-resources',
        text: 'Ensure all saved resources are ready for Kinesis: frags, gear, mecha, boosters, arcane boxes',
        description: 'Dump everything onto Kinesis when he launches. His week 1 ≈ everyone\'s week 7.'
      },
      {
        id: 'save-passes',
        text: 'Verify saved passes are ready: Challenger Pass, Genesis Pass (if saved), Beyond Burning',
        description: 'These should have been saved from your mule since Day 0.'
      }
    ]
  }
];

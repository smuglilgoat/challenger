import { TaskSection } from '../../types';

export const week4Tasks: TaskSection[] = [
  {
    id: 'week4-bossing',
    title: 'Week 4 — Bossing: Hard Seren + Armor',
    description: 'Push for Hard Seren solo and major item burning milestone.',
    tasks: [
      {
        id: 'solo-normal-seren',
        text: 'Solo Normal Seren (400 crests)',
        description: 'Continue weekly Normal Seren clears for crest accumulation.'
      },
      {
        id: 'try-easy-kalos-solo',
        text: 'Try Easy Kalos solo (250 SAC needed)',
        description: 'Attempt to solo Easy Kalos. If you can solo Easy, you\'re strong enough for Normal Kalos parties.'
      },
      {
        id: 'party-kalos-adversary',
        text: 'Otherwise party Easy/Normal Kalos and Easy/Normal Adversary',
        description: 'Party based on your strength level. Solo Easy = strong enough for Normal party.'
      },
      {
        id: 'liberate-if-not',
        text: 'Liberate if you haven\'t already',
        description: 'Complete Genesis weapon liberation. With Genesis Pass, should be done by now.'
      },
      {
        id: 'solo-hard-seren',
        text: 'Solo Hard Seren → 1,000 crests → item burning Stage 7 → 21-star armor',
        description: 'Major item burning milestone! Hard Seren gives 1,000 crests — exactly enough for Stage 7.',
        tip: 'Hard Seren gives 1,000 crests — the single biggest crest reward!'
      }
    ]
  },
  {
    id: 'week4-item-burning',
    title: 'Week 4 — Item Burning Stage 7',
    description: '21-star armor is a massive power spike.',
    tasks: [
      {
        id: 'stage-7-complete',
        text: 'Complete Stage 7 item burning (1,000 crests → 21★ armor)',
        description: '21-star armor is a significant power spike. Only Stage 8 (22★) remains.'
      },
      {
        id: 'finish-easy-kalos-burn',
        text: 'Finish Easy Kalos item burn if you cleared E Kalos in weeks 3-4',
        description: 'Complete the Easy Kalos item burning stage (600 crests).'
      },
      {
        id: 'crest-forward',
        text: 'Plan ahead: need 1,500 crests for Stage 8 (final stage)',
        description: 'Hard Seren (1,000/week) means ~2 more weeks if you keep clearing it. Or Hard Kai (1,200) + Normal Seren (400) = 1,600 in one week.'
      }
    ]
  },
  {
    id: 'week4-gear',
    title: 'Week 4 — Gear Updates',
    description: 'Post-liberation gear optimization.',
    tasks: [
      {
        id: 'lib-weapon-active',
        text: 'Use liberated Genesis weapon as primary',
        description: 'Well-flamed half-lib Genesis weapon beats item burning weapon.'
      },
      {
        id: 'secondary-upgrade',
        text: 'Work on secondary: aim for 2-line Boss%/Attack% combo',
        description: 'With Astra secondary coming in July, the choice barely matters since you can transfer later.'
      },
      {
        id: 'emblem-upgrade',
        text: 'Emblem: move to 2-line Attack% (Diamond passive gives 70% IED as single source)',
        description: 'You don\'t need much IED from gear thanks to the Diamond passive.'
      },
      {
        id: 'continue-rentals',
        text: 'Continue renting gear weekly (~1.6 bil)',
        description: 'Rentals cover most accessory slots. Available until Nov 10, 2026.'
      }
    ]
  },
  {
    id: 'week4-leveling',
    title: 'Week 4 — Leveling (Target ~280-285)',
    description: 'Continue pushing level with Mecha Berry + Momentum Pass.',
    tasks: [
      {
        id: 'mecha-momentum',
        text: 'Use Mecha Berry tickets + Momentum Pass on Nightmare Paradise',
        description: '~7% EXP per Mecha Berry at 280. Nightmare Paradise is the best map at 280+.'
      },
      {
        id: 'push-285',
        text: 'Push toward 285 for Hard Kai max damage bonus',
        description: '285 is a good early ceiling for max damage on Hard Kai.'
      }
    ]
  }
];

import { TaskSection } from '../types';

export const prePatchTasks: TaskSection[] = [
  {
    id: 'pre-patch',
    title: 'Pre-Patch Preparation',
    description: 'Complete these tasks the week BEFORE Challenger World 3 launches',
    tasks: [
      {
        id: 'save-order-request',
        text: 'SAVE your Sol Erda / Order Request this week',
        description: 'Do NOT complete it! It\'s once per account. If you finish it now, you can\'t claim it on Day 0 when you hit 260.',
        warning: 'This is account-bound, not world-bound. You can claim it on any character once per reset.'
      },
      {
        id: 'save-mvp-perks',
        text: 'Save your MVP weekly perks',
        description: 'Forex coupons and other MVP rewards can be claimed on Day 0 if the game comes up in time before weekly reset.'
      },
      {
        id: 'preload-nx',
        text: 'Preload NX / Maple Points (~300k NX / ~$300)',
        description: 'This covers all the recommended passes: Challenger\'s Pass (19,800 MP), Genesis Pass (30,000 NX), Shine/Goddess Pass (35k MP), and Burning Express.',
        tip: 'Genesis Pass is NX ONLY - cannot use Maple Points!'
      },
      {
        id: 'pick-ign',
        text: 'Pick your IGN and prepare the name',
        description: 'If you want a specific name held by an existing character, delete that character 24 hours before launch (must be in ghost form with 24-hr cooldown expired).',
        subtasks: [
          {
            id: 'delete-char-24h',
            text: 'Delete character holding desired name 24 hours before launch',
            description: 'Character must be in ghost form and cooldown must have expired'
          },
          {
            id: 'ready-delete-again',
            text: 'Be ready to delete the placeholder again at launch',
            description: 'You\'ll create a placeholder, then delete it to free the name for your CW3 character'
          }
        ]
      },
      {
        id: 'pre-download',
        text: 'Pre-download the client on BOTH Steam and Nexon Launcher',
        description: 'Race them at launch and kill whichever is slower. This is your best shot at logging in immediately.',
        warning: 'The download itself eats into your Day 0 window - every minute counts!'
      }
    ]
  },
  {
    id: 'passes-to-buy',
    title: 'Passes to Purchase (Day 0)',
    description: 'Buy these passes when the game comes up. All optional but strongly recommended for optimal progression.',
    tasks: [
      {
        id: 'challenger-pass',
        text: 'Challenger\'s Pass (19,800 Maple Points)',
        description: '+200% normal-mob damage, +20% EXP for ~2 months, plus huge node/frag/cube/booster rewards. STRONGLY RECOMMENDED.'
      },
      {
        id: 'genesis-pass',
        text: 'Genesis (Jenny) Pass (30,000 NX ONLY)',
        description: '3x Traces of Darkness (lib in ~4 weeks vs ~11), 6-man Genesis missions, boss buff (+150 AF), 3% attack Mag Soul on lib. GMS sold 2 per account last time.',
        warning: 'NX ONLY - cannot use Maple Points!'
      },
      {
        id: 'shine-pass',
        text: 'Shine Pass / Goddess Pass (~35k Maple Points)',
        description: 'Skips you toward ~270 of leveling. Shine = Aerolia/CSO only; Goddess Pass S4 expected for everyone else.',
        tip: 'If playing Aerolia, buy the Shine Pass. If playing another class, wait for Goddess Pass.'
      },
      {
        id: 'burning-express',
        text: 'Burning Express Pass',
        description: 'Loads of express boosters (juiced, no-EXP-cost boosters). Good for efficient leveling.'
      },
      {
        id: 'exp-duo',
        text: 'Challenger EXP Duo (10,000 NX/week) - OPTIONAL',
        description: 'Feeds EXP to a main-world character while you grind CW. Only worth it if you\'ll grind ~10+ hrs/week.',
        tip: 'Skip this unless you plan to train 10+ hours per week on Challenger World.'
      }
    ]
  }
];

import { TaskSection } from '../../types';

export const week2Tasks: TaskSection[] = [
  {
    id: 'week2-bossing',
    title: 'Week 2 — Bossing Progression',
    description: 'Push your boss clears further. Target: solo Normal Seren, party Easy Kalos/Adversary.',
    tasks: [
      {
        id: 'solo-normal-seren',
        text: 'Solo Normal Seren',
        description: 'Should be achievable by week 2 with rentals + week 1 progression. Gives 400 crests for item burning.',
        tip: 'Clearing N Seren weekly is critical for item burning crest accumulation'
      },
      {
        id: 'party-easy-kalos',
        text: 'Party Easy Kalos / Easy Adversary',
        description: 'Start partying higher bosses for item burning progression. If you can solo either, do that instead.'
      },
      {
        id: 'duo-trio-bm',
        text: 'Duo or trio Black Mage before June 30',
        description: 'The monthly reset — don\'t take a bigger party than 3 if you want Genesis lib as fast as possible. You need to solo BM by week 3.',
        warning: 'Can\'t be in a party more than 3 people if you want fast liberation!'
      },
      {
        id: 'kill-normal-kai-again',
        text: 'Kill Normal Kai again (chance at pitched box)',
        description: 'Second clear of the week for potential pitched drop. Also gives ~30 frags and challenger points.'
      },
      {
        id: 'clear-easy-adversary',
        text: 'Clear Easy Adversary (unlocks item burning Stage 5)',
        description: '800 crests from this clear. Stage 5 = 19★ + Legendary weapon (40% boss, 30% IED, 10% attack). Weapon does NOT go beyond 18 stars.',
        tip: 'This is a major item burning milestone!'
      }
    ]
  },
  {
    id: 'week2-item-burning',
    title: 'Week 2 — Item Burning Progression',
    description: 'Crest planning and item burning advancement',
    tasks: [
      {
        id: 'crest-check',
        text: 'Check crest total: should have ~1,200 (400 from N Seren + 800 from E Adversary)',
        description: 'If you cleared N Seren week 1, you have 400+800 = 1,200 crests. Enough for Stage 5 (600) with 600 left over.'
      },
      {
        id: 'finish-vhila-burn',
        text: 'Finish Verus Hilla item-burn if you cleared Normal Seren in Week 1',
        description: 'Vhilla gives 200 crests. Continue item burning progression.',
        tip: 'Clearing N Seren week 1 means you should be at Vhilla by now'
      },
      {
        id: 'stage-5-upgrade',
        text: 'Complete Stage 5 item burning (600 crests → 19★ + Legendary weapon)',
        description: 'Legendary weapon has 40% boss, 30% IED, 10% attack. The weapon does NOT go beyond 18 stars — only armor upgrades at 19★.'
      }
    ]
  },
  {
    id: 'week2-leveling',
    title: 'Week 2 — Leveling (Target ~280)',
    description: 'Push toward level 280 for maximum final damage on key bosses.',
    tasks: [
      {
        id: 'level-280-target',
        text: 'Level for max final damage: Black Mage wants Lv 280',
        description: 'Hard Kai\'s max damage bonus is at Lv 285 — 285 is a good early ceiling.',
        tip: '280 for Black Mage max damage, 285 for Hard Kai max damage'
      },
      {
        id: 'use-express-boosters',
        text: 'Use express boosters on highest available map',
        description: 'Boosters are tuned for 270-280 range. Always use on highest level map you can access.'
      },
      {
        id: 'continue-daily-xp',
        text: 'Continue daily EXP content: symbol dailies, Monster Park, Monster Park Extreme',
        description: 'Don\'t skip daily EXP sources — they add up significantly over the week'
      }
    ]
  },
  {
    id: 'week2-gear',
    title: 'Week 2 — Gear & Items',
    description: 'Continue building meso/drop gear and upgrading damage items.',
    tasks: [
      {
        id: 'continue-meso-drop',
        text: 'Continue rolling meso/drop gear toward 100% meso + 80% drop',
        description: 'Start converting pure meso lines into hybrid/double-drop lines once base targets are met.'
      },
      {
        id: 'keep-1-4-bil',
        text: 'Keep ~1.4 bil banked for next week\'s rentals',
        description: 'Always maintain rental budget. Rentals are your biggest damage source.',
        warning: 'Don\'t spend your rental money on cubing!'
      },
      {
        id: 'arcane-seal-progress',
        text: 'Continue Arcane Seal progression — settle at Epic +6 (Stage 2 at Gold rank)',
        description: 'Don\'t chase Legendary yet. Save wands for Stage 4-5.'
      },
      {
        id: 'emblem-secondary',
        text: 'Work on emblem/secondary if you need more damage',
        description: 'Get to Legendary with two useful lines (attack%/boss%) using solid cubes from Challenger shop.'
      }
    ]
  },
  {
    id: 'week2-hexa',
    title: 'Week 2 — Hexa Fragment Budget',
    description: 'Continue accumulating fragments for hexa upgrades.',
    tasks: [
      {
        id: 'weekly-frags',
        text: 'Collect weekly frags: CW missions, Challenger Shop, Kai, Beyond Burning, High Mountain/Angler',
        description: 'Continue following your class Discord\'s hexa order after Janus 10.'
      },
      {
        id: 'continue-hexa-order',
        text: 'Follow class Discord hexa order for remaining frags',
        description: 'Janus 10 should be done by now. Focus on damage hexa nodes.'
      }
    ]
  },
  {
    id: 'week2-meso-budget',
    title: 'Week 2 — Meso Budget',
    description: 'Expected income and spending for week 2',
    tasks: [
      {
        id: 'income-sources',
        text: 'Income: daily bosses (~111m/day) + Ursus (~120m/day) + boss clears + wapping + mules',
        description: 'Income should be increasing as you clear higher bosses.'
      },
      {
        id: 'spend-rentals',
        text: 'Spend: ~1.9 bil on rentals (rent near end of week)',
        description: 'Rentals last 2 days — time them for your boss day.'
      },
      {
        id: 'spend-shops',
        text: 'Spend: ~1.5 bil on meso shop (Arcane Seal, Express Boosters, Mecha Berry)',
        description: 'Weekly shop buyout before boss reset.'
      },
      {
        id: 'spend-monster',
        text: 'Spend: ~500m on monster park tickets',
        description: 'Weekly Monster Park tickets for EXP.'
      }
    ]
  },
  {
    id: 'week2-weekly-deadlines',
    title: 'Week 2 — Weekly Deadlines',
    description: 'Don\'t miss these reset deadlines',
    tasks: [
      {
        id: 'before-tuesday',
        text: 'Before Tuesday (event reset): Claim all Challenger Pass mission XP + 10k mob research',
        description: 'Event reset is Tuesday in Western hemisphere.'
      },
      {
        id: 'before-wednesday',
        text: 'Before Wednesday (boss reset): Angler, Monster Extreme, weekly symbols, 14 crystals, Covert',
        description: 'Boss reset is Wednesday. Buy out shops, use expiring wands, buy 3x from boss/Challenger shops.'
      },
      {
        id: 'claim-partner-xp',
        text: 'Claim Challenger Partner XP',
        description: 'Weekly partner event rewards.'
      }
    ]
  }
];

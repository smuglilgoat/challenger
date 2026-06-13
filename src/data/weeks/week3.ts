import { TaskSection } from '../../types';

export const week3Tasks: TaskSection[] = [
  {
    id: 'week3-bossing',
    title: 'Week 3 — Bossing: Liberate + The Kai Gamble',
    description: 'Major liberation week. The 2-Eternal deadline requires soloing Hard Kai by week 3.',
    tasks: [
      {
        id: 'solo-bm-liberate',
        text: 'Solo Black Mage and LIBERATE',
        description: 'Solo BM on July 2nd (reset day) and liberate your Genesis weapon. With Genesis Pass, liberation takes ~4 weeks instead of ~11.',
        tip: 'After liberation, you get a 3% attack Magnificent Soul from any Black Mage commander of your choice.'
      },
      {
        id: 'solo-normal-seren',
        text: 'Solo Normal Seren (400 crests)',
        description: 'Continue clearing Normal Seren weekly for crest accumulation.'
      },
      {
        id: 'clear-easy-adversary-again',
        text: 'Clear Easy Adversary again (unlocks item burning Stage 6)',
        description: 'Stage 6 gives Loy weapon + 20-star gear — required for Normal/Hard Kai. Needs 800 crests.',
        warning: 'This is critical for item burning progression!'
      },
      {
        id: 'try-hard-kai',
        text: 'Try to solo Hard Kai (the 2-Eternal deadline)',
        description: 'You must solo Hard Kai by Week 3 to make TWO full Eternals before season ends (12 weeks). Otherwise you only get one.',
        warning: 'This is very hard this early — most people won\'t, and that\'s okay!'
      }
    ]
  },
  {
    id: 'week3-leveling',
    title: 'Week 3 — Leveling (Target ~280+)',
    description: 'Major power spike at level 280 — Momentum Pass and Nightmare Paradise unlock.',
    tasks: [
      {
        id: 'start-mecha-momentum',
        text: 'Now that you\'re 280, start using Mecca Berry tickets + Momentum Pass',
        description: 'Mecha Berry gives ~7% EXP per ticket at 280. Momentum Pass requires Lv 280.',
        tip: 'Momentum Pass is finally usable — huge leveling boost!'
      },
      {
        id: 'nightmare-paradise',
        text: 'Run Nightmare Paradise instead of Angler',
        description: 'Nightmare Paradise is much better EXP than Angler at 280+. Requires Lv 280.'
      },
      {
        id: 'level-285-ceiling',
        text: 'Push toward 285 for Hard Kai max damage bonus',
        description: '280 for Black Mage max damage, 285 for Hard Kai max damage. 285 is a good early ceiling.'
      }
    ]
  },
  {
    id: 'week3-item-burning',
    title: 'Week 3 — Item Burning & Crest Planning',
    description: 'Track your crest accumulation toward the full 22-star set.',
    tasks: [
      {
        id: 'crest-total-check',
        text: 'Check crest total: should have ~2,000+ (400+800+800 from weeks 1-3)',
        description: 'Stage 5 (600) should be done. Stage 6 (800) should be completable. Working toward Stage 7 (1,000).'
      },
      {
        id: 'stage-6-complete',
        text: 'Complete Stage 6 item burning (800 crests → 20★ + Loy weapon)',
        description: '20-star gear is required for Normal/Hard Kai. Loy weapon is a significant upgrade.'
      },
      {
        id: 'crest-plan-forward',
        text: 'Plan ahead: need 1,000 crests next week for Stage 7 (Hard Seren clear)',
        description: 'Hard Seren gives 1,000 crests — exactly enough for Stage 7.'
      }
    ]
  },
  {
    id: 'week3-rank',
    title: 'Week 3 — Rank Progression',
    description: 'Push for Master rank to unlock max Arcane Seal gate.',
    tasks: [
      {
        id: 'rank-master',
        text: 'Rank up to Master: Lv 280 + solo BM/N Seren/E Kalos',
        description: 'Or Lv 283 + BM + N Seren. Master = max Arcane Seal gate (Stage 5), so you can open wands whenever for Legendary.',
        tip: 'Master rank unlocks the highest Arcane Seal tier — rates DOUBLED!'
      },
      {
        id: 'arcane-seal-legendary',
        text: 'Now at Master: go for Legendary Arcane Seal (rates doubled at Stage 5)',
        description: 'Stop saving wands. Open them whenever. Once you hit Legendary, dismantle everything else for upgrade mats.',
        tip: 'A +7 of one tier = +1 of the next tier. All seals at same upgrade have identical stats.'
      }
    ]
  },
  {
    id: 'week3-eternal-math',
    title: 'Week 3 — The 2-Eternal Deadline Math',
    description: 'Understanding the Kai kill budget for Eternal pieces.',
    tasks: [
      {
        id: 'kai-kill-budget',
        text: 'Across the season: ~12 Kai kills needed (Normal Kai ×2 + Hard Kai ×10) for 2 Eternal pieces',
        description: 'CW3 is only 12 weeks. If you don\'t solo Hard Kai by week 3, you can only make 1 Eternal.',
        warning: 'This is the tightest deadline in the entire season!'
      },
      {
        id: 'eternal-party-bosses',
        text: 'Start partying Normal Kalos / Normal Adversary for Eternal pieces',
        description: 'Party bossing is strongly encouraged for everything except Kai. Solo Easy = strong enough for Normal party.'
      }
    ]
  },
  {
    id: 'week3-gear',
    title: 'Week 3 — Gear Updates',
    description: 'Post-liberation gear changes.',
    tasks: [
      {
        id: 'switch-to-lib-weapon',
        text: 'Switch to liberated Genesis weapon (well-flamed, half-lib beats item burning weapon)',
        description: 'Your liberated weapon should be better than the item burning weapon if properly flamed.'
      },
      {
        id: 'continue-rentals',
        text: 'Continue renting gear weekly (~1.6 bil for all accessories)',
        description: 'Rentals available until Nov 10, 2026. Rent near end of week for max value.'
      },
      {
        id: 'continue-meso-drop',
        text: 'Continue meso/drop gear progression → hybrids/double-drop',
        description: 'Keep ~1.4 bil banked for rentals at all times.'
      }
    ]
  }
];

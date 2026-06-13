import { TaskSection } from '../../types';

export const weeks8to12Tasks: TaskSection[] = [
  {
    id: 'weeks8-12-bossing',
    title: 'Weeks 8-12 — Bossing: Maximize',
    description: 'Every week: solo the hardest boss you can, party anything higher.',
    tasks: [
      {
        id: 'solo-hardest-boss',
        text: 'Every week: solo the hardest boss you can',
        description: 'Continue pushing your boss progression. Hard Seren and Hard Kai should be clearable by now.'
      },
      {
        id: 'party-higher-bosses',
        text: 'Party anything higher than what you can solo',
        description: 'Party Normal Kalos, Normal Adversary, Normal Kaling, Normal Malefic Star for Eternal pieces.'
      },
      {
        id: 'weekly-clears',
        text: 'Maintain weekly clears: Normal Seren, Easy Kalos, Easy Adversary, Hard Seren, Hard Kai',
        description: 'Keep clearing these weekly for crests, frags, and challenger points.'
      }
    ]
  },
  {
    id: 'weeks8-12-eternals',
    title: 'Weeks 8-12 — Eternal Acquisition',
    description: 'Party bossing schedule for building Eternal armor pieces.',
    tasks: [
      {
        id: 'party-normal-kalos',
        text: 'Party Normal Kalos (350 SAC needed)',
        description: 'Solo Easy = strong enough for Normal party. Full Eternal pieces.',
        tip: 'Make sure everyone in the party can at least solo Easy for smooth clears.'
      },
      {
        id: 'party-normal-adversary',
        text: 'Party Normal Adversary',
        description: 'Solo Easy = barely strong enough for Normal. Ideally be stronger. Full Eternal pieces.'
      },
      {
        id: 'party-normal-kaling',
        text: 'Party Normal Kaling (Easy gives half pieces, Normal gives full)',
        description: 'High failure rates — be stronger for comfortable runs. Ideally solo Normal Kalos strength.'
      },
      {
        id: 'party-malefic-star',
        text: 'Party Normal Malefic Star (450 SAC needed)',
        description: 'Requires solo Normal Kalos strength. 450 SAC for full damage bonus.',
        warning: 'Solo Normal Kalos at 350 SAC does NOT mean you\'re strong enough for Malefic Star at 450 SAC!'
      },
      {
        id: 'kai-coins-12-kills',
        text: 'Across the season: ~12 Kai kills (Normal Kai ×2 + Hard Kai ×10) for 2 Eternal pieces',
        description: 'Hard Kai gives more coins than Normal Kai. Track your kill count.',
        tip: 'Hard Kai is the only solo source of Eternal pieces from Kai.'
      }
    ]
  },
  {
    id: 'weeks8-12-gear',
    title: 'Weeks 8-12 — Gear: Endgame Progression',
    description: 'Build toward full Eternal set and pitched items.',
    tasks: [
      {
        id: 'eternal-armor-build',
        text: 'Build Eternal hat/top/bottom + Arcane shoulder/shoe/glove/cape to ~20-21★',
        description: '18★ Eternals already beat 22★ Challengers. Can star force to 22★ without booming (expensive past 18★).'
      },
      {
        id: 'ignitia-swap',
        text: 'Use Ignitia keys to swap pieces without losing set effect',
        description: '2-set Ignitia = stats of set 7+8 on Challenger gear. Can\'t use on Challenger/Eternal/Sengoku.'
      },
      {
        id: 'pitched-9-set',
        text: 'Work toward 9-set pitched (realistically reachable with booming-free 22★)',
        description: 'The 10th piece is refreshing Black Hearts or a Total Control drop from Extreme Lotus.'
      },
      {
        id: 'continue-meso-drop',
        text: 'Keep pushing meso/drop gear → hybrids/double-drop',
        description: 'Continue improving your farming setup.'
      }
    ]
  },
  {
    id: 'weeks8-12-long-term',
    title: 'Weeks 8-12 — Long-term Systems',
    description: 'Systems that carry over after Challenger World ends.',
    tasks: [
      {
        id: 'trace-restore-missions',
        text: 'Run Trace Restore missions weekly (practice mode OK)',
        description: 'Points carry to your main world after Challenger World ends. Don\'t skip these!',
        tip: 'These transfer to your main world — huge long-term value!'
      },
      {
        id: 'star-spec-boxes',
        text: 'Cap 12 Star Spec boxes/day',
        description: 'These also transfer to your main world. Farm on both CW and main if you want.'
      },
      {
        id: 'pitched-whisper-crystals',
        text: 'Loot Pitched Whisper Crystals — save 390 for Genesis Badge before spending',
        description: 'Some people say you don\'t need the badge and will get it eventually, but "eventually" is uncertain. Save 390 to be safe.',
        warning: 'Never make a Mitra\'s Rage — it\'s awful.'
      },
      {
        id: 'hexa-seal-upgrades',
        text: 'Continue Hexa/seal/secondary/emblem upgrades',
        description: 'Keep upgrading all your systems. Arcane Seal should be Legendary by now at Master rank.'
      },
      {
        id: 'arcane-seal-max',
        text: 'Arcane Seal: at Master rank, open wands freely for Legendary',
        description: 'Rates doubled at Stage 5. Hit Legendary once, then dismantle everything for upgrade mats.'
      }
    ]
  },
  {
    id: 'weeks8-12-mules',
    title: 'Weeks 8-12 — Mule Management',
    description: 'Optimize your mule characters for maximum income.',
    tasks: [
      {
        id: 'mule-dailies',
        text: 'Continue daily bosses on mules for meso income',
        description: '3 Hydros + other mules generate significant weekly income.'
      },
      {
        id: 'funnel-frags',
        text: 'Funnel weekly frags from mules to main once they have enough',
        description: 'Boss mule: stop at ~500-1,000 frags. Legion champ: stop at ~2-3k frags.'
      },
      {
        id: 'crystal-management',
        text: 'Manage crystals across all characters: sell highest-value first (180/week cap)',
        description: 'Don\'t brain-dead sell everything across multiple characters — you\'ll hit the cap.'
      }
    ]
  }
];

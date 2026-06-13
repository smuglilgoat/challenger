import { TaskSection } from '../../types';

export const week5Tasks: TaskSection[] = [
  {
    id: 'week5-bossing',
    title: 'Week 5 — Bossing: Start Hard Kai',
    description: 'Begin attempting Hard Kai solo. This is realistically when most people get strong enough.',
    tasks: [
      {
        id: 'solo-easy-kalos',
        text: 'Solo Easy Kalos',
        description: 'Should be soloable by week 5 with 21★ armor and liberated weapon.'
      },
      {
        id: 'solo-easy-adversary',
        text: 'Solo Easy Adversary',
        description: 'Should be soloable by week 5. Continue clearing for crests.'
      },
      {
        id: 'attempt-hard-seren-kai',
        text: 'Begin attempting Hard Seren / Hard Kai solo',
        description: 'This is realistically when most people get strong enough for Hard Kai. Keep attempting weekly.',
        tip: 'Most people start being strong enough around week 5. Don\'t give up if you can\'t clear yet!'
      },
      {
        id: 'weekly-normal-seren',
        text: 'Weekly Normal Seren clear (400 crests)',
        description: 'Continue accumulating crests for item burning Stage 8.'
      }
    ]
  },
  {
    id: 'week5-rank',
    title: 'Week 5 — Rank: Push for Challenger',
    description: 'Challenger rank requires Hard Kai — it is mandatory.',
    tasks: [
      {
        id: 'rank-challenger-path1',
        text: 'Path 1: Lv 280 + BM/Hard Seren/E Kalos/E Adversary/Hard Kai → Challenger',
        description: 'The "skip Hard Seren" path — requires higher level but lets you skip Hard Seren boss clear.'
      },
      {
        id: 'rank-challenger-path2',
        text: 'Path 2: Lv 285 + BM/N Seren/E Kalos/E Adversary/Hard Kai → Challenger',
        description: 'The "include Hard Seren" path — lower level requirement but need N Seren instead of H Seren.'
      },
      {
        id: 'hard-kai-mandatory',
        text: 'Hard Kai is MANDATORY for Challenger rank — you cannot skip it!',
        description: 'You can skip Hard Seren but NEVER Hard Kai. It\'s the defining boss of this season.',
        warning: 'Hard Kai is the one boss you absolutely must clear for Challenger rank!'
      }
    ]
  },
  {
    id: 'week5-item-burning',
    title: 'Week 5 — Item Burning Progression',
    description: 'Working toward the final 22-star set.',
    tasks: [
      {
        id: 'crest-accumulation',
        text: 'Accumulate crests toward Stage 8 (1,500 needed)',
        description: 'Hard Seren (1,000/week) + Normal Seren (400/week) = 1,400/week. Almost enough for Stage 8 in one week.'
      },
      {
        id: 'hard-kai-crests',
        text: 'If you clear Hard Kai: 1,200 crests (enough for Stage 8 with Normal Seren)',
        description: 'Hard Kai (1,200) + Normal Seren (400) = 1,600 — more than enough for Stage 8 (1,500).'
      }
    ]
  },
  {
    id: 'week5-gear',
    title: 'Week 5 — Gear & Items',
    description: 'Continue optimizing gear.',
    tasks: [
      {
        id: 'continue-meso-drop',
        text: 'Continue meso/drop gear → hybrids/double-drop',
        description: 'Keep pushing toward full hybrid/double-drop setup.'
      },
      {
        id: 'eternal-party',
        text: 'Party Normal Kalos / Normal Adversary for Eternal pieces',
        description: 'Start building Eternal armor pieces. 18★ Eternals beat 22★ Challengers.'
      },
      {
        id: 'ignitia-keys',
        text: 'Use Ignitia keys to swap armor pieces without losing set effect',
        description: '2-set Ignitia = stats of set 7+8 on Challenger gear. Can\'t use on Challenger/Eternal/Sengoku.'
      }
    ]
  }
];

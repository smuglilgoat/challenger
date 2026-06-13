import { TaskSection } from '../types';

export const dailyTasks: TaskSection[] = [
  {
    id: 'daily-routine',
    title: 'Daily Routine (Every Day, All Season)',
    description: 'Burn this into muscle memory. Complete these tasks every single day.',
    tasks: [
      {
        id: 'event-checkins',
        text: 'Event check-ins',
        description: 'Check in to all active events first thing'
      },
      {
        id: 'event-buff-allocation',
        text: 'Put event buffs into Monster Park XP',
        description: 'Sacred Power and Arcane Force are the next best options after Monster Park XP',
        tip: 'Monster Park XP > Sacred Power > Arcane Force'
      },
      {
        id: 'daily-bosses',
        text: 'Daily bosses',
        description: 'Clear all daily boss content for mesos and crystals'
      },
      {
        id: 'symbol-dailies',
        text: 'Symbol dailies',
        description: 'Daily symbol quests for EXP and fragments'
      },
      {
        id: 'ursus',
        text: 'Ursus',
        description: 'Daily Ursus for ~120m mesos per day'
      },
      {
        id: 'monster-park',
        text: 'Monster Park (7 runs)',
        description: 'Daily Monster Park runs. You get 14 total per day - use extra 7 on alt!'
      },
      {
        id: '5k-mob-research',
        text: '5k-mob research mission',
        description: 'Kill 5,000 monsters for the research mission'
      },
      {
        id: 'cw-checkin',
        text: 'Challenger World check-in (1k mobs)',
        description: 'Requires 5k mobs completed first'
      },
      {
        id: 'burning-express-checkin',
        text: 'Burning Express check-in (1k mobs)',
        description: 'Requires 5k mobs completed first'
      },
      {
        id: 'make-alt-lv200',
        text: 'Make another Lv 200 alt via Tera Blink',
        description: 'Use your extra Monster Park runs (14/day = two sets of 7) to slowly level free mules',
        tip: 'Every character created on Challenge World is a terror burning character'
      },
      {
        id: 'prog-item-burning',
        text: 'Prog item burning / Winter Survival mission',
        description: 'At least to Easy Lucid practice mode'
      },
      {
        id: 'follow-xp-plan',
        text: 'Follow the XP plan toward 270 → 275 → 280',
        description: 'Use express boosters on highest available map'
      },
      {
        id: 'manage-crystals',
        text: 'Manage crystals: sell highest-value first',
        description: 'You can only sell 180 crystals/week account-wide. If you boss on multiple characters, sell the highest-value crystals first.',
        warning: 'Don\'t brain-dead sell everything - you\'ll hit the 180/week cap!'
      }
    ]
  }
];

export const weeklyTasks: TaskSection[] = [
  {
    id: 'weekly-before-event-reset',
    title: 'Before EVENT Reset (Tuesday, Western Hemisphere)',
    description: 'Complete these before Tuesday reset',
    tasks: [
      {
        id: 'claim-pass-xp',
        text: 'Claim all Challenger Pass mission XP',
        description: 'Don\'t let pass XP go to waste'
      },
      {
        id: '10k-mob-research',
        text: 'Complete 10k-mob research mission',
        description: 'The "dog" research mission - 10,000 mob kills'
      }
    ]
  },
  {
    id: 'weekly-before-boss-reset',
    title: 'Before BOSS Reset (Wednesday, Western Hemisphere)',
    description: 'Complete these before Wednesday reset',
    tasks: [
      {
        id: 'angler-high-mountain',
        text: 'Angler / High Mountain',
        description: 'Weekly epic dungeon content'
      },
      {
        id: 'monster-park-extreme',
        text: 'Monster Park Extreme',
        description: 'Weekly Monster Park Extreme for EXP'
      },
      {
        id: 'weekly-symbols',
        text: 'Weekly symbols',
        description: 'Weekly symbol quests'
      },
      {
        id: '14-weekly-crystals',
        text: '14 weekly crystals',
        description: 'Sell your weekly crystals (remember the 180/week cap)'
      },
      {
        id: 'guild-covert',
        text: 'Guild Covert',
        description: 'Weekly guild content if your guild requires it'
      },
      {
        id: 'buy-out-shops',
        text: 'Buy out: Arcane Seal / Express Boosters / Mecha Berry (~1.5 bil)',
        description: 'Weekly shop purchases',
        tip: 'Mecha Berry tickets are expensive but worth it for efficient leveling'
      },
      {
        id: 'use-expiring-wands',
        text: 'Use expiring Arcane Seal wands',
        description: 'Don\'t let wands expire unused'
      },
      {
        id: 'buy-boss-shop-3x',
        text: 'Buy 3x from boss coin shop',
        description: 'Purchase available items from boss coin shop'
      },
      {
        id: 'buy-challenger-shop-3x',
        text: 'Buy 3x from Challenger shop',
        description: 'Purchase available items from Challenger World shop'
      },
      {
        id: 'claim-partner-xp',
        text: 'Claim Challenger Partner XP',
        description: 'Weekly partner event rewards'
      }
    ]
  }
];

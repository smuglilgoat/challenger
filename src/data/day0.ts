import { TaskSection } from '../types';

export const day0Tasks: TaskSection[] = [
  {
    id: 'day0-login',
    title: 'A. Login & Character Creation',
    description: 'Get into the game and create your character correctly',
    tasks: [
      {
        id: 'win-download-race',
        text: 'Win the download race and log in immediately',
        description: 'Start both Steam and Nexon Launcher downloads, kill whichever is slower'
      },
      {
        id: 'pick-correct-world',
        text: 'Pick Challenger Heroic world (NOT Interactive)',
        description: 'There will be TWO heroic worlds. Make sure you pick Challenger Heroic for this season.',
        warning: 'People brick themselves here every season by picking Interactive when they want Heroic!'
      },
      {
        id: 'create-character',
        text: 'Create character and select MIDDLE option on popup',
        description: 'On the creation popup, select the MIDDLE option. The wrong one costs you the name or requires a relog.',
        warning: 'Do NOT click the other options - you\'ll lose the name or have to relog!'
      },
      {
        id: 'designate-beyond-burning',
        text: 'Designate as Hyper / Beyond Burning character',
        description: 'Before hitting 260, type "beyond burning" exactly in the designation box.',
        tip: 'This must be done BEFORE you reach level 260'
      },
      {
        id: 'skip-tutorials',
        text: 'Skip tutorial cut-scenes and get to Level 30',
        description: 'The old 6th-job-skip bug is fixed. You can safely skip everything and go straight to level 30.'
      }
    ]
  },
  {
    id: 'day0-power-200',
    title: 'B. Power to 200 & Foundation',
    description: 'Get to level 200 and set up the foundation',
    tasks: [
      {
        id: 'accept-cw-event',
        text: 'Accept Challenger World event and claim creation reward',
        description: 'Click the button on the top-right of the Challenger World UI'
      },
      {
        id: 'equip-maple-pearl',
        text: 'Equip Maple Pearl set',
        description: 'This is the starter gear set'
      },
      {
        id: 'tera-blink-200',
        text: 'Use Tera Blink to reach Level 200 (~10 minutes)',
        description: 'Go through dialogue and menu-gaming. Level skills as you go to minmax.',
        tip: 'Takes about 10 minutes of dialogue/menu navigation'
      },
      {
        id: 'get-5th-job',
        text: 'Get 5th job',
        description: 'Very fast now - it blinks you around to all the NPCs'
      },
      {
        id: 'claim-hyperburn',
        text: 'Claim Hyperburn rewards (but DO NOT use Eternal Flame title/ring yet)',
        description: 'Save the Eternal Flame title and ring for later. Title order matters!',
        warning: 'Do NOT use the Eternal Flame title yet - you\'ll use it later in the correct order'
      },
      {
        id: 'buy-shine-pass',
        text: 'Buy Shine/Goddess Pass premium (~35k Maple Points)',
        description: 'Redeem the box for the EXP title + Pennant of the Spirit'
      },
      {
        id: 'equip-exp-title',
        text: 'Equip EXP title from Shine Pass',
        description: 'This gives bonus EXP while leveling'
      },
      {
        id: 'equip-pennant',
        text: 'Equip Pennant of the Spirit from Shine Pass',
        description: 'Copy the pennant straight away'
      },
      {
        id: 'exp-hyper-stats',
        text: 'Put EXP into hyper stats',
        description: 'Allocate hyper stat points to EXP gain'
      },
      {
        id: 'redeem-node-stones',
        text: 'Redeem 20 node stones and max Holy Symbol',
        description: 'This helps with Strawberry Farm EXP'
      },
      {
        id: 'start-professions',
        text: 'Start Professions + Auto Harvest immediately',
        description: 'It counts down ~2.5k hits even offline. The sooner it\'s running, the sooner you get juice/laps.',
        tip: 'Start this ASAP so it runs for the full 4 hours every day'
      },
      {
        id: 'redeem-challenger-pass',
        text: 'Redeem Challenger\'s Pass for mob-damage bonus',
        description: 'Gives +200% normal monster damage which helps with future content'
      },
      {
        id: 'open-arcane-seal',
        text: 'Open one Arcane/Mystic Seal and equip whatever you get',
        description: 'Just get whatever - rare is fine, it\'s free damage'
      }
    ]
  },
  {
    id: 'day0-leveling',
    title: 'C. Leveling Box Sequence (200 → 260)',
    description: 'Use Shine/Goddess Pass + Summer Countdown reward boxes. Use UNTRADEABLE vouchers first to save tradeable ones for mules.',
    tasks: [
      {
        id: 'strawberry-215',
        text: 'Use 2 Strawberry tickets from Lv 200 box → ~215',
        description: 'The Lv 200 box also gives magpots you\'ll use later. Use both strawberry farm tickets.',
        tip: 'Lv 200 box contains: 2 strawberry tickets + 3 magpots'
      },
      {
        id: 'power-of-time-1k',
        text: 'Use 1,000 vouchers from Power of Time (top-left)',
        description: 'This is the first EXP voucher source'
      },
      {
        id: 'lv210-box-1k',
        text: 'Use 1,000 vouchers from Lv 210 box → 220',
        description: 'Top box at level 210'
      },
      {
        id: 'lv220-box-1k',
        text: 'Use 1,000 vouchers from Lv 220 box → 225',
        description: 'Top box at level 220'
      },
      {
        id: 'lv225-box-5k',
        text: 'Use 5,000 vouchers from Lv 225 box → 235',
        description: 'Bottom box at level 225'
      },
      {
        id: 'lv230-box-2k',
        text: 'Use 2,000 vouchers from Lv 230 box',
        description: 'Top box at level 230'
      },
      {
        id: 'power-of-fate-5k',
        text: 'Use 5,000 vouchers from Power of Fate (top-middle) → 240',
        description: 'Combined with the 2,000 from Lv 230 box'
      },
      {
        id: 'lv240-box-3k',
        text: 'Use 3,000 vouchers from Lv 240 box',
        description: 'Top box at level 240'
      },
      {
        id: 'lv240-box-10k',
        text: 'Use 10,000 vouchers from bottom Lv 240 box → 250',
        description: 'Bottom box at level 240 - this is the big one'
      },
      {
        id: 'claim-lv250-5k',
        text: 'CLAIM but DO NOT USE the 5,000 from Lv 250 box',
        description: 'Claim it now but save it for after using magpots',
        warning: 'Do NOT use these vouchers yet!'
      },
      {
        id: 'use-magpot-1',
        text: 'Use 1 magpot (of 3 from Lv 200 box)',
        description: 'First magnificent legion growth potion'
      },
      {
        id: 'use-magpot-2',
        text: 'Use 1 magpot from Summer Countdown → 255',
        description: 'Second magpot from the summer event'
      },
      {
        id: 'use-remaining-vouchers',
        text: 'Use remaining 5,000 vouchers → 260',
        description: 'Now use the Lv 250 box vouchers you claimed earlier',
        tip: 'Use UNTRADEABLE vouchers first to save tradeable ones for mules!'
      }
    ]
  },
  {
    id: 'day0-genie',
    title: 'D. Genie Weapon & Pass',
    description: 'Get your Genesis weapon started',
    tasks: [
      {
        id: 'get-genie-weapon',
        text: 'Grab the Genie weapon',
        description: 'This is your Genesis/liberation weapon'
      },
      {
        id: 'redeem-genie-pass',
        text: 'Redeem Genie/Genesis Pass and proc it now',
        description: 'Makes killing C10-tier bosses easier. Remember: 30k NX, not Maple Points!',
        warning: 'Genesis Pass is 30,000 NX ONLY - cannot use Maple Points!'
      }
    ]
  },
  {
    id: 'day0-setup',
    title: 'E. Character Setup',
    description: 'Set up your character systems',
    tasks: [
      {
        id: 'start-jenny-quest',
        text: 'Start Jenny (liberation) quest and SKIP Cernium story',
        description: 'Don\'t rush 6th job yet unless you want easier item-burning bosses'
      },
      {
        id: 'fuse-arcane-symbols',
        text: 'Fuse all Arcane symbols',
        description: 'Combine symbols from all sources'
      },
      {
        id: 'fuse-cernium-symbol',
        text: 'Fuse the Cernium symbol',
        description: 'From the hyperburn rewards'
      },
      {
        id: 'trait-boost-charm',
        text: 'Use trait boost potion on Charm',
        description: 'Charm gives final damage'
      },
      {
        id: 'equip-boss-accessories',
        text: 'Equip Boss Accessory box',
        description: 'From hyperburn - gives ~9-piece set, pre-cubed'
      },
      {
        id: 'equip-abyss-hunter',
        text: 'Equip Abyss Hunter ring',
        description: 'Free ring from the event'
      },
      {
        id: 'claim-event-ring',
        text: 'Claim one Event Ring and equip it',
        description: 'All event rings are identical - just pick any one'
      },
      {
        id: 'select-dom-pendant',
        text: 'In pendant selector, pick DOM over Abso',
        description: 'Dominator pendant is better than Absolute',
        warning: 'Make sure to pick Dominator, not Absolute!'
      },
      {
        id: 'equip-hyperburn-outfit',
        text: 'Put on Hyperburn outfit',
        description: 'From the hyperburn rewards'
      },
      {
        id: 'unlock-all-symbols',
        text: 'Unlock all symbols - visit every town',
        description: 'Between hyperburn (~Lv 7) and pass (~Lv 10), fusing gets you ~Lv 11-13. Dailies/weeklies push to ~Lv 15 by week 1.'
      },
      {
        id: 'start-all-events',
        text: 'Start ALL events: Challenger Partner, Arcane Seal, Beyond Burning, Item Burning, Knight of Fantasms, Burning Express, Auto Harvest',
        description: 'Activate all the passes you bought as well'
      }
    ]
  },
  {
    id: 'day0-claim-rewards',
    title: 'F. Claim & Distribute Event Rewards',
    description: 'Claim Summer Countdown + Shine/Goddess Pass rewards',
    tasks: [
      {
        id: 'claim-summer-countdown',
        text: 'Claim rest of Summer Countdown rewards',
        description: 'Use immediately as they expire fast'
      },
      {
        id: 'use-honor',
        text: 'Use Honor on your character (inner ability rolls)',
        description: 'Roll for your first good line'
      },
      {
        id: 'use-exp-nodes',
        text: 'Use 20 EXP nodes to max V Matrix',
        description: 'From the pass rewards'
      },
      {
        id: 'distribute-symbols',
        text: 'Use Symbol selectors to distribute evenly for max Arcane Force',
        description: 'Get max arcane force by distributing evenly amongst all symbols'
      },
      {
        id: 'use-90-frags',
        text: 'Use 90 frags on your character',
        description: 'Sol Erda fragments for hexa upgrades'
      },
      {
        id: 'save-boosters',
        text: 'Save 10 boosters for training',
        description: 'Use these on your highest available map'
      },
      {
        id: 'save-unique-scroll',
        text: 'Save the unique scroll',
        description: 'Use later on secondary or other gear'
      },
      {
        id: 'save-10-3x-cubes',
        text: 'Hold 10 cubes (3x) for now',
        description: 'Save for later cubing'
      },
      {
        id: 'claim-missing-event-ring',
        text: 'Claim the event ring you don\'t have yet',
        description: 'All three event rings are identical - claim the one you\'re missing'
      },
      {
        id: 'use-legendary-ring-scroll',
        text: 'Use Legendary ring scroll on an event ring',
        description: 'Makes the ring legendary tier'
      },
      {
        id: 'save-event-cubes',
        text: 'Save 100 event cubes for now',
        description: 'Use later to tier up event rings'
      },
      {
        id: 'save-black-flames',
        text: 'Save 50 black flames for now',
        description: 'Use later for flames'
      },
      {
        id: 'save-bright-cubes',
        text: 'Save 20 bright cubes for now',
        description: 'Use later for tiering up gear'
      }
    ]
  },
  {
    id: 'day0-skill-setup',
    title: 'G. Skills & V Matrix Setup',
    description: 'Set up your combat abilities',
    tasks: [
      {
        id: 'setup-keybinds',
        text: 'Set up skill keybinds',
        description: 'Configure your combat rotation'
      },
      {
        id: 'setup-hyper-skills',
        text: 'Set up hyper skills',
        description: 'Allocate hyper skill points'
      },
      {
        id: 'setup-hyper-stats',
        text: 'Set up hyper stats',
        description: 'Allocate hyper stat points'
      },
      {
        id: 'setup-pets',
        text: 'Set up pets (save vac pet for later if minmaxing)',
        description: 'Min-max is to save vac pet until you have meso/drop gear',
        tip: 'No point looting before you have farming gear!'
      },
      {
        id: 'max-common-nodes',
        text: 'Max common nodes in V Matrix',
        description: 'Open all the EXP nodes and level up skills'
      },
      {
        id: 'max-skill-nodes',
        text: 'Max skill nodes (trios)',
        description: 'Your main damage skills'
      },
      {
        id: 'max-holy-symbol',
        text: 'Max Holy Symbol',
        description: 'Already done earlier but verify'
      },
      {
        id: 'max-goddess',
        text: 'Max Goddess blessing',
        description: 'Important support skill'
      },
      {
        id: 'max-common-skills',
        text: 'Max common skills: Weapon Aura, Mana Overload',
        description: 'These scale with level'
      },
      {
        id: 'leave-utility-lv1',
        text: 'Leave utility skills at level 1: Speed Infusion, Combat Orders, Advanced Blessing, Sharp Eyes, Rope Lift',
        description: 'These don\'t improve with levels - no point leveling them',
        tip: 'Save your node points for damage skills!'
      }
    ]
  },
  {
    id: 'day0-item-burning',
    title: 'H. Item Burning + Money Run',
    description: 'Progress item burning and farm mesos',
    tasks: [
      {
        id: 'equip-item-burning',
        text: 'Put on item burning gear',
        description: 'This is your temporary high-star gear'
      },
      {
        id: 'prog-to-normal-lotus',
        text: 'Prog item burning through Normal Lotus & Damien',
        description: 'Clear these bosses to progress item burning stages'
      },
      {
        id: 'do-daily-weekly-bosses',
        text: 'Do all daily/weekly bosses',
        description: 'Clear everything you can'
      },
      {
        id: 'sell-crystals-day0',
        text: 'DAY 0 ONLY: Sell all your crystals now',
        description: 'You\'ll get a fresh batch at reset, so double-dipping is free',
        warning: 'If there\'s NO Day 0, don\'t sell - you\'ll get better crystals later in the week!'
      },
      {
        id: 'prog-to-easy-lucid',
        text: 'Push item burning to clear Easy Lucid (awards 18-star gear)',
        description: 'Path: Chaos Zakum → Vellum → Lotus → Lucid. Can do in practice mode (full buffs).',
        tip: 'Burning Boss Accessory box (~9-piece set) + free Dominator make Easy Lucid easy'
      },
      {
        id: 'money-run',
        text: 'Money run: clear everything you can (~30-45 min, expect ~1.7 bil)',
        description: 'This is the longest part. The Ascent makes most content super easy.',
        tip: 'Spend the money immediately on Day 0 gap items!'
      },
      {
        id: 'buy-mecha-berry',
        text: 'Buy 2 Mecha Berry tickets from Meso Shop → Special tab',
        description: 'These reset on WEEKLY reset, not event reset. Buy now, buy again at reset.',
        warning: 'Weekly reset, not event reset!'
      },
      {
        id: 'buy-express-boosters',
        text: 'Buy Express boosters: 10 for 300m, 2 for 1 bil',
        description: 'Save ~1 bil of mecha berries for Lv 280 power spike. They scale to 290s and last until ~September.',
        tip: 'Boosters are juiced (no EXP cost) - very efficient!'
      },
      {
        id: 'buy-seal-wands',
        text: 'Buy Seal (ceiling) wands: ~150m for 30',
        description: 'For the Arcane Seal system'
      }
    ]
  },
  {
    id: 'day0-training',
    title: 'I. Training & Dailies',
    description: 'Complete daily content and training',
    tasks: [
      {
        id: 'auto-clear-epic-dungeon',
        text: 'Auto-clear Epic Dungeon / High Mountain',
        description: 'Saves ~30-60 min on low spec. Gives ~40 frags + ~0.5 sol erda.',
        tip: 'High Mountain on lowspec takes a long time - auto-clear saves time!'
      },
      {
        id: 'monster-park',
        text: 'Monster Park (nerfed, ~5 min solo, juiced by Challenger Pass)',
        description: '+200% mob damage from Challenger Pass makes this much easier'
      },
      {
        id: 'monster-park-extreme',
        text: 'Monster Park Extreme',
        description: 'Weekly content - gives good EXP'
      },
      {
        id: 'use-express-boosters',
        text: 'Use 10 express boosters while getting 5k-kill weekly (~17 min)',
        description: 'Boosters last ~100s each, ~36% EXP. Best map is highest you can access (~Lv 269 mobs).',
        tip: 'Map layout changed - looks like Night Road maps in big boy areas'
      },
      {
        id: 'hotel-arcus-daily',
        text: 'Do Hotel Arcus daily',
        description: 'Daily content for EXP'
      },
      {
        id: 'monster-park-7-runs',
        text: '7 Monster Park runs for final bump',
        description: 'They reworked Ara so it\'s quicker. Gets you to ~98% of level.',
        tip: 'You get 14 monster park runs per day - use the extra 7 on an alt!'
      }
    ]
  },
  {
    id: 'day0-cubing',
    title: 'J. Cubing & Scrolls',
    description: 'Set up your event rings and drop rate',
    tasks: [
      {
        id: 'claim-ring-selectors',
        text: 'Claim event ring selectors (~4): Summer Countdown, Lv 210 box, internal/4th unique coupon',
        description: 'Pick DIFFERENT rings each time to collect all three + the Challenger-exclusive ring',
        warning: 'Make sure to pick different rings - you\'ll get another coupon!'
      },
      {
        id: 'claim-challenger-ring',
        text: 'Claim Challenger-exclusive ring (heroic-only)',
        description: 'This ring is only available on Challenger Heroic world'
      },
      {
        id: 'use-legendary-scrolls',
        text: 'Use Legendary scrolls (3): Summer Countdown, Lv 260 Shine box, Winter Survival',
        description: 'Ideally use on a RING (not emblem). The Shine box scroll can be used on anything.',
        tip: 'Ring is best because you can then use solid cubes for item drop!'
      },
      {
        id: 'cube-for-drop',
        text: 'Use solid cubes to roll ring for item drop',
        description: 'Day 0, use as few cubes as possible. Once you hit item-drop line, run with it.',
        tip: 'Item drop is only really useful for Princess No on Day 0'
      }
    ]
  },
  {
    id: 'day0-checklist',
    title: 'K. Day 0 Recurring Checklist',
    description: 'Don\'t miss any of these daily/weekly tasks on Day 0',
    tasks: [
      {
        id: 'event-checkins',
        text: 'Event check-ins',
        description: 'Check in to all active events'
      },
      {
        id: 'event-buff-monster-park',
        text: 'Set event buffs to Monster Park XP',
        description: 'From Knight of Fantasms event. Sacred Power and Arcane Force are next best.'
      },
      {
        id: 'daily-bosses',
        text: 'Daily bosses',
        description: 'Clear all daily boss content'
      },
      {
        id: 'weekly-bosses',
        text: 'Weekly bosses',
        description: 'Clear all weekly boss content'
      },
      {
        id: 'ursus',
        text: 'Ursus',
        description: 'Daily Ursus for mesos (~120m/day)'
      },
      {
        id: 'symbol-dailies',
        text: 'Symbol dailies',
        description: 'Daily symbol quests for EXP'
      },
      {
        id: 'weekly-symbol-quest',
        text: 'Weekly symbol quest',
        description: 'Weekly symbol quest for fragments'
      },
      {
        id: '5k-mobs',
        text: '5k mobs (required for check-ins below)',
        description: 'Kill 5,000 monsters - required for other check-ins'
      },
      {
        id: 'cw-checkin',
        text: 'Challenger World check-in (1k mobs)',
        description: 'Requires 5k mobs first'
      },
      {
        id: 'burning-express-checkin',
        text: 'Burning Express check-in (1k mobs)',
        description: 'Requires 5k mobs first'
      },
      {
        id: 'claim-partner-xp',
        text: 'Claim Challenger Partner XP',
        description: 'From the partner event'
      },
      {
        id: 'guild-covert',
        text: 'Guild Covert (if your guild requires it)',
        description: 'Weekly guild content'
      },
      {
        id: '20-map-procs',
        text: '20 map procs (the "dog" research mission)',
        description: 'The research mission - just go train and proc maps'
      },
      {
        id: 'buy-out-shops',
        text: 'Buy out shops: Arcane Seal, Express Booster, Mecha Berry, 3x from boss shop / Challenger shop',
        description: 'Spend all your mesos on these weekly purchases'
      },
      {
        id: 'challenger-pass-missions',
        text: 'Complete Challenger Pass missions',
        description: 'Claim all available mission rewards'
      }
    ]
  }
];

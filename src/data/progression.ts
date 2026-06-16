import type { Phase } from './types';

export const progressionData: Phase[] = [
  {
    id: 'day0',
    title: 'Day 0',
    subtitle: 'Launch Day — The Full Sequence',
    targetLevel: '270',
    groups: [
      {
        id: 'day0-a',
        title: 'A. Get In & Make the Character',
        steps: [
          {
            id: 'day0-a-1',
            text: 'Win the download race — log in the instant the game is up',
            details: 'Be ready before the maintenance window ends. Have the launcher open and refreshing.',
          },
          {
            id: 'day0-a-2',
            text: 'Pick the correct world: Challenger Heroic',
            warnings: ['There will be TWO heroic worlds — pick Challenger Heroic, NOT Interactive. People brick their season here every year.'],
          },
          {
            id: 'day0-a-3',
            text: 'Create the character — select the MIDDLE option on the creation popup',
            details: 'The wrong option costs you the name or forces a relog.',
          },
          {
            id: 'day0-a-4',
            text: 'Designate as Hyper Burning MAX character before hitting 260',
            details: 'In GMS you confirm by typing the prompt exactly — type "beyond burning" in the box, nothing else.',
            warnings: ['Must be done before level 260.'],
          },
          {
            id: 'day0-a-5',
            text: 'Skip every tutorial cutscene and get to Lv 30',
          },
        ],
      },
      {
        id: 'day0-b',
        title: 'B. Power to 200 & Set the Foundation',
        steps: [
          {
            id: 'day0-b-6',
            text: 'Accept the Challenger World event and claim the creation reward',
            details: 'Top-right of the Challenger World UI.',
          },
          {
            id: 'day0-b-7',
            text: 'Equip the Maple Pearl set. Use Tera Blink to 200',
            details: '~10 min of menu-gaming; level skills as you go.',
          },
          {
            id: 'day0-b-8',
            text: 'Get 5th job',
            details: 'Very fast now — it blinks you to all the NPCs.',
          },
          {
            id: 'day0-b-9',
            text: 'Claim Hyperburn rewards — do NOT use the Flame titles yet',
            warnings: ['Title order matters! Save them. You CAN claim the Infinite Flame coupon from the hyperburn UI, just don\'t USE it from inventory.'],
          },
          {
            id: 'day0-b-10',
            text: 'Buy the Shine/Goddess Pass premium (~35k Maple Pts)',
            details: 'Redeem the box for the EXP title + Pendant of the Spirit; equip and copy the Pendant immediately. Put EXP into hyper stats and equip the EXP Title from Shine Pass.',
          },
          {
            id: 'day0-b-11',
            text: 'Redeem 20 node stones → max Holy Symbol',
            details: 'Boosts Strawberry Farm EXP.',
          },
          {
            id: 'day0-b-12',
            text: 'Start Professions + Auto Harvest immediately',
            tips: ['Counts down ~2.5k hits even offline, so the sooner it runs, the sooner you get juice.'],
          },
          {
            id: 'day0-b-13',
            text: 'Redeem the Challenger\'s Pass',
            details: '+200% normal-mob damage — great for Monster Park Extreme and training.',
          },
          {
            id: 'day0-b-14',
            text: 'Open one Arcane Seal — just one; whatever you get, slap it on',
            details: 'Free damage.',
          },
        ],
      },
      {
        id: 'day0-c',
        title: 'C. The Leveling-Box Sequence (→ 266, then → 270)',
        description: 'Use the Shine/Goddess Pass + Summer Countdown reward boxes. Use the untradeable vouchers first so you can bank tradeable strawberry/EXP/magpots for a future mule or Kinesis.',
        steps: [
          {
            id: 'day0-c-straw',
            text: 'Strawberry first: 2 strawberry tickets (Lv 200 box) → ~215',
            details: 'The Lv 200 box also gives 3 magpots — save them.',
          },
          {
            id: 'day0-c-215-250',
            text: '~13.7k EXP vouchers, 215 → 250',
            subSteps: [
              { id: 'day0-c-v1', text: 'Free Power of Time → 1k EXP Vouchers' },
              { id: 'day0-c-v2', text: 'Free Lv 210 Box → 1k EXP Vouchers' },
              { id: 'day0-c-v3', text: 'Paid Lv 225 Box → 5k EXP Vouchers' },
              { id: 'day0-c-v4', text: 'Free Lv 230 Box → 2k EXP Vouchers' },
              { id: 'day0-c-v5', text: 'Free Power of Fate → 5k EXP Vouchers' },
            ],
          },
          {
            id: 'day0-c-250-260',
            text: '250 → 260: Use 3 magpots (Paid Lv 200 box) + 1 magpot from Summer Countdown → 260',
          },
          {
            id: 'day0-c-260-266',
            text: '260 → 266 (after setup)',
            subSteps: [
              { id: 'day0-c-v6', text: 'Free Lv 220 Box → 1k EXP Vouchers' },
              { id: 'day0-c-v7', text: 'Free Lv 240 Box → 3k EXP Vouchers' },
              { id: 'day0-c-v8', text: 'Paid Lv 240 Box → 10k EXP Vouchers' },
              { id: 'day0-c-v9', text: 'Free Lv 250 Box → 5k EXP Vouchers' },
              { id: 'day0-c-v10', text: 'Paid Lv 260 Box → 10k Advanced EXP Vouchers' },
            ],
          },
        ],
      },
      {
        id: 'day0-d',
        title: 'D. Gene Weapon + Genesis (Gene) Pass',
        steps: [
          {
            id: 'day0-d-15',
            text: 'Grab the Gene weapon, redeem the Genesis Pass, and PROC it now',
            details: '30k NX, not Maple Points. Its boss buff (+20 ATK, +20 all stat, +10% boss, +10% IED, +1,000 HP, +150 AF) applies on Black Mage commanders and above only — not Slime or early Grandis.',
          },
        ],
      },
      {
        id: 'day0-e',
        title: 'E. Character Setup',
        steps: [
          {
            id: 'day0-e-16',
            text: 'Start the Gene (liberation) quest. Skip the Cernium story.',
            details: 'Don\'t rush 6th job yet unless you want easier item-burning bosses.',
          },
          {
            id: 'day0-e-17',
            text: 'Unlock Ascent (if you unlocked 6th job)',
            details: 'Have an easier time with early bosses.',
          },
          {
            id: 'day0-e-18',
            text: 'Unlock all symbols — visit every town',
            details: 'Dailies/weeklies push symbols to ~Lv 15 by week 1. Fuse all Arcane symbols (visit every town to unlock them first). Between hyperburn (~Lv 7) and the pass (~Lv 10), fusing lands you ~Lv 11-13.',
          },
          {
            id: 'day0-e-19',
            text: 'Fuse the Cernium symbol',
          },
          {
            id: 'day0-e-20',
            text: 'Use the trait boost potion on Charm',
            details: 'Charm → final damage via the Insight profession.',
          },
          {
            id: 'day0-e-21',
            text: 'Equip the Burning Boss Accessory box, Abyss Hunters ring (Lv 230), and all Event Rings',
            details: 'In the pendant selector pick DOM (Dominator) over Abso from both selectors. Put on the Hyperburn outfit (Lv 230 reward).',
          },
          {
            id: 'day0-e-22',
            text: 'Start every event',
            details: 'Challenger Partner, Arcane Seal, Burning Beyond, Item Burning PLUS, Night of Phantasms, Auto Harvest.',
          },
          {
            id: 'day0-e-23',
            text: 'Activate every pass',
            details: 'Activate Challenger Pass, Shine Pass, Genesis Pass, Burning Express.',
          },
        ],
      },
      {
        id: 'day0-f',
        title: 'F. Claim & Distribute Event Rewards',
        steps: [
          {
            id: 'day0-f-24',
            text: 'Claim the rest of Summer Countdown + Shine/Goddess Pass',
            subSteps: [
              { id: 'day0-f-honor', text: 'Honor (80) → inner-ability rolls' },
              { id: 'day0-f-nodes', text: '20 EXP nodes → max V Matrix (100 EXP nodes = 300 regular nodes)' },
              { id: 'day0-f-symbols', text: 'Symbol selectors → distribute evenly for max Arcane Force' },
              { id: 'day0-f-frags', text: '90 frags → use on your character' },
              { id: 'day0-f-boosters', text: '10 boosters → save for training' },
              { id: 'day0-f-scroll', text: 'Unique scroll → save for secondary/other gear' },
              { id: 'day0-f-ring', text: 'Event ring → claim the one(s) you don\'t have (all identical)' },
              { id: 'day0-f-legscroll', text: 'Legendary ring scroll → use on an event ring' },
              { id: 'day0-f-cubes', text: '100 event cubes, 50 black flames, 20 bright cubes → save for now' },
            ],
          },
          {
            id: 'day0-f-25',
            text: 'Set skill keybinds, hyper skills, hyper stats, pets',
            tips: ['For the vac pet, save it until you have meso/drop gear.'],
          },
          {
            id: 'day0-f-26',
            text: 'V Matrix: max common nodes, skill nodes (trios), Holy Symbol, Goddess',
            details: 'Leave Speed Infusion, Combat Orders, Advanced Blessing, Sharp Eyes, Rope Lift at level 1 (they don\'t scale).',
          },
        ],
      },
      {
        id: 'day0-g',
        title: 'G. Day-0 Cubing & Scrolls',
        steps: [
          {
            id: 'day0-g-27',
            text: 'Event ring selectors (~4): pick a different ring each time',
            details: 'From Summer Countdown, Paid Lv 210 box selector, and Lv 210 Hyper Burn Ring Selector Coupon. Collect all three event rings + the Challenger-exclusive Hyper Burn Eternal Flame ring (heroic-only).',
          },
          {
            id: 'day0-g-28',
            text: 'Legendary scrolls (3): Summer Countdown, Lv 260 Shine box (save for later), Winter Survival',
            details: 'Use solid cubes to roll the ring for item drop.',
          },
          {
            id: 'day0-g-29',
            text: 'Cube Rings for Drop/Meso Line',
            tips: ['Once you hit an item-drop line, run with it. Item drop is only really useful for Princess No on Day 0.'],
          },
          {
            id: 'day0-g-30',
            text: 'Winter Survival event: knock out the early stages on Day 0',
            details: 'Step-Up missions hand out a ring selector, a 30-day spirit pet, cubes, transparent-equipment coupons, a Unique Emblem/Secondary box (solo Chaos Vellum), and huge symbol vouchers.',
          },
        ],
      },
      {
        id: 'day0-h',
        title: 'H. Item Burning + The Day-0 Money Run',
        steps: [
          {
            id: 'day0-h-31',
            text: 'Put on item-burning gear. Prog Item Burning PLUS through Stage 4 (Easy Lucid)',
            details: 'Then do all daily/weekly bosses.',
          },
          {
            id: 'day0-h-32',
            text: 'Day-0 only: sell all your crystals now',
            warnings: ['You\'ll get a fresh batch at reset — free double-dip. If there is no Day 0, DON\'T sell. You can only sell 180 crystals/week account-wide.'],
          },
          {
            id: 'day0-h-33',
            text: 'Push item burning to clear Easy Lucid (Stage 4)',
            details: 'Path: Chaos Zakum → Vellum → Normal Damien → Easy Lucid. All doable in Practice Mode (full buffs). The 6 pre-cubed boss accessories + the free Dominator make Easy Lucid an easy clear.',
          },
          {
            id: 'day0-h-34',
            text: 'Money run (~30-45 min): clear everything you can. Expect ~1.7 bil',
            details: 'Spend immediately on the Day-0 gap items from the Meso Shop → Special tab.',
            subSteps: [
              { id: 'day0-h-mecha', text: '2 Mecha Berry tickets (reset on weekly reset, not event reset — buy now, buy again at reset)' },
              { id: 'day0-h-express', text: 'Express boosters — 10 for 300m, 2 for 1 bil. Save ~1 bil of Mecha Berries for the Lv 280 power spike' },
              { id: 'day0-h-wands', text: 'Seal wands — ~150m for 30, for the Arcane Seal' },
              { id: 'day0-h-budget', text: 'Lower-spend option: at 1.45 bil get 4 Mecha Berry + 5 Express boosters; skip Easy Lucid/Normal Slime' },
            ],
          },
          {
            id: 'day0-h-35',
            text: 'Auto-clear Epic Dungeon / High Mountain',
            details: 'Saves ~30-60 min on low spec; ~40 frags + ~0.5 Sol Erda + ~13% EXP.',
          },
          {
            id: 'day0-h-36',
            text: 'Monster Park (put Event Buffs into Monster Park EXP) + Monster Park Extreme (~14% EXP)',
          },
          {
            id: 'day0-h-37',
            text: 'Burn the 10 express boosters while getting the 5k-kill weekly',
            details: '~17 min; boosters last ~100s each, ~36% total EXP. Use the highest map you can access (~Lv 269 mobs); place your summon/mobbing skill for max efficiency. Do the Hotel Arcus daily, then 7 Monster Park runs.',
          },
          {
            id: 'day0-h-38',
            text: 'End Day 0 around 270 with all dailies done',
          },
        ],
      },
      {
        id: 'day0-i',
        title: 'I. Day-0 Frag / Sol Erda Haul (Reference)',
        steps: [
          { id: 'day0-i-erda', text: 'Claim your Sol Erda order/request the moment you can (you saved it pre-patch)' },
          { id: 'day0-i-life', text: '3 Sol Erda + 50 frags from Power of Life (right side)' },
          { id: 'day0-i-260', text: '200 frags from the Lv 260 gift' },
          { id: 'day0-i-shop', text: '~100 frags for 4k coins in the Challenger Shop' },
          { id: 'day0-i-summer', text: '~90 frags from the Summer gift' },
          { id: 'day0-i-bronze', text: 'Hit 5k points on Day 0 → +100 frags + 3 Sol Erda (Bronze rank reward)' },
          { id: 'day0-i-mountain', text: '~40 frags from High Mountain auto-clear' },
          { id: 'day0-i-total', text: 'Total Day 0 estimate: ~500+ frags immediately available' },
        ],
      },
      {
        id: 'day0-j',
        title: 'J. Day-0 Recurring Checklist',
        steps: [
          { id: 'day0-j-1', text: 'Event check-ins → set event buffs to Monster Park XP (Sacred Power next, then Arcane Force)' },
          { id: 'day0-j-2', text: 'Daily bosses + weekly bosses' },
          { id: 'day0-j-3', text: 'Ursus (~120m/day)' },
          { id: 'day0-j-4', text: 'Monster Park (7 runs)' },
          { id: 'day0-j-5', text: 'Symbol dailies' },
          { id: 'day0-j-6', text: 'Monster Park Extreme' },
          { id: 'day0-j-7', text: 'Weekly symbol quest' },
          { id: 'day0-j-8', text: '5k mobs' },
          { id: 'day0-j-9', text: 'Challenger World check-in (1k mobs)' },
          { id: 'day0-j-10', text: 'Burning Express check-in (1k mobs)' },
          { id: 'day0-j-11', text: 'Claim Challenger Partner XP' },
          { id: 'day0-j-12', text: 'High Mountain' },
          { id: 'day0-j-13', text: 'Guild Covert' },
          { id: 'day0-j-14', text: '20 map procs (the "dog" research mission)' },
          { id: 'day0-j-15', text: 'Buy out the shops (Arcane Seal wands, Express boosters, Mecha Berry, 3x from boss/Challenger shops)' },
          { id: 'day0-j-16', text: 'Complete Challenger Pass missions' },
        ],
      },
    ],
  },
  {
    id: 'day1',
    title: 'Day 1',
    subtitle: 'The Morning After',
    targetLevel: '275',
    groups: [
      {
        id: 'day1-main',
        title: 'Day 1 Tasks',
        steps: [
          { id: 'day1-1', text: 'Finish anything Day 0 ran out of time for', details: 'Rest of the boss list, rest of the leveling boxes, the rest of Winter Survival\'s early stages.' },
          { id: 'day1-2', text: 'Continue the XP plan toward 275', details: 'Keep using Mecha Berries / Express boosters on the highest map.' },
          { id: 'day1-3', text: 'Re-buy the weekly-reset shop items if a reset has now passed', details: 'Mecha Berry, Express, seal wands.' },
        ],
      },
      {
        id: 'day1-daily',
        title: 'The Daily Routine (Every Day, All Season)',
        steps: [
          { id: 'daily-1', text: 'Event check-ins → put event buffs into Monster Park XP (Sacred Power & Arcane Force next best)' },
          { id: 'daily-2', text: 'Daily bosses + symbol dailies + Ursus (~120m/day) + Monster Park (7 runs)' },
          { id: 'daily-3', text: '5k-mob research, then Challenger World check-in (1k) + Burning Express check-in (1k)' },
          { id: 'daily-4', text: 'Make another Lv 200 Tera mule via Tera Blink to spend extra Monster Park runs (14/day = two sets of 7)' },
          { id: 'daily-5', text: 'Prog Item Burning / Winter Survival (at least to Easy Lucid practice)' },
          { id: 'daily-6', text: 'Follow the XP plan toward 270 → 275 → 280' },
          { id: 'daily-7', text: 'Manage crystals: sell only 180/week account-wide, highest-value first' },
          { id: 'daily-8', text: 'Arcane Seal: never sit above 20 seals (3/day even offline). Buy wands the day before shop reset.' },
        ],
      },
      {
        id: 'day1-weekly',
        title: 'Weekly Housekeeping (Two Deadlines)',
        steps: [
          {
            id: 'weekly-tue',
            text: 'Before EVENT reset (Tue, GMS): claim all Challenger Pass mission XP + the 10k-mob research mission',
            warnings: ['Event reset is Tuesday in GMS (Western hemisphere).'],
          },
          {
            id: 'weekly-wed',
            text: 'Before BOSS reset (Wed, GMS): Angler/High Mountain, Monster Park Extreme, weekly symbols, 14 weekly crystals, Guild Covert',
            details: 'Buy out Arcane Seal / Express boosters / Mecha Berry (~1.5 bil); use expiring seal wands; buy 3x from boss/Challenger shops; claim Challenger Partner XP.',
            warnings: ['Boss reset is Wednesday in GMS (Western hemisphere).'],
          },
        ],
      },
    ],
  },
  {
    id: 'week1',
    title: 'Week 1',
    subtitle: 'Establish',
    targetLevel: '270-275',
    groups: [
      {
        id: 'w1-setup',
        title: 'Character Setup This Week',
        steps: [
          { id: 'w1-inner', text: 'Inner ability: 10 Miracle Circulators (Lv 225 hyperburn) + Honor → first good line' },
          { id: 'w1-emblem', text: 'Emblem: Winter Survival Stage 4 box (Unique Emblem) if you cleared Chaos Vellum' },
          { id: 'w1-secondary', text: 'Secondary: unique scroll on the Frozen secondary; aim for attack%/boss%' },
          { id: 'w1-rings', text: 'Event rings: claim all; use Legendary scroll on one; 150 Meister Cubes to push all toward Legendary → aim for 4-line meso' },
          { id: 'w1-hexa', text: 'Hexa: Janus to Lv 10 first (grinding isn\'t miserable), then class Discord\'s Hexa order' },
          { id: 'w1-prof', text: 'Professions: profession-max potion (Shine Pass) → max Insight (final damage)' },
          { id: 'w1-seal', text: 'Arcane Seal: open for a rare and settle; don\'t chase tiers yet' },
          { id: 'w1-symbols', text: 'Symbols: combine Lv 5 Cernium (hyperburn 260) with Lv 5/10 from pass; save SAC symbols for Arcus/Odium; distribute Arcane Force selectors evenly' },
        ],
      },
    ],
    bosses: {
      solo: [
        { id: 'w1-boss-s1', text: 'Clear Easy Lucid in Practice Mode → Silver (10k): claim frags + Lv 4 Special Skill Ring, upgrade Hexa' },
        { id: 'w1-boss-s2', text: 'Clear Hard Lotus/Damien + Hard Will → Gold (15k)' },
        { id: 'w1-boss-s3', text: 'Clear CTene / Hard Lucid / Chaos Slime → Platinum (20k): claim 300 frags + 5 Sol Erda' },
        { id: 'w1-boss-s4', text: 'At Lv 271, clear Normal Kai → Diamond (40k): claim Legendary pot scroll + cubes + Cozy Winter Set' },
        { id: 'w1-boss-s5', text: 'Try Normal Seren solo — clearing it week 1 fast-tracks item burning (300 crests + Stage 6 boss)' },
      ],
      party: [
        { id: 'w1-boss-p1', text: 'If you can\'t solo Normal Seren, party Hard Seren / Easy Kalos' },
      ],
    },
    gearing: [
      { id: 'w1-gear-1', text: 'At Lv 270, rent gear (everything except free Silver ring). Save ~2 bil for Chaos Tenebris clear + rental' },
      { id: 'w1-gear-2', text: 'All accessories incl. totems ≈ 1.6 bil. Rentals last 2 days — rent near week\'s end. Available until Nov 10, 2026' },
      { id: 'w1-gear-3', text: 'Roll 5-line meso, 4-line drop across 9 accessories first; then hybrids/double-drop' },
      { id: 'w1-gear-4', text: 'Always keep ~1.4 bil banked for next week\'s rentals' },
      { id: 'w1-gear-5', text: 'Tier up Arcane Seal to Unique +6' },
    ],
    milestones: [
      'Prepare 3 Tera-Burning mules: blink to 200, gear with node stones + event cubes → ~4.2 bil/week boss income',
      'Save a character slot for the Kinesis hyperburn in July',
      'Hexa frags this week (~2,300+): CW missions ~600, Challenger Shop ~530, Kai ~30, Winter Survival ~100, Burning Beyond ~100, Shine Pass ~300, High Mountain/Angler 40-95, Day 0/1 Erda request 90-180',
    ],
  },
  {
    id: 'week2',
    title: 'Week 2',
    subtitle: 'Push to 280',
    targetLevel: '~280',
    groups: [],
    bosses: {
      solo: [
        { id: 'w2-boss-s1', text: 'Solo Normal Seren (300 crests + the Stage 6 boss)' },
        { id: 'w2-boss-s2', text: 'Kill Normal Kai again (chance at a pitched box)' },
      ],
      party: [
        { id: 'w2-boss-p1', text: 'Party Easy Kalos / Easy Adversary if you can\'t solo them' },
        { id: 'w2-boss-p2', text: 'Duo or trio Black Mage before the monthly reset (don\'t take a bigger party)' },
      ],
    },
    gearing: [
      { id: 'w2-gear-1', text: 'Solo Easy Adversary → 500 crests (with week-1\'s 300 that\'s 800 banked → Stage 5 done)' },
      { id: 'w2-gear-2', text: 'Level for max final damage: Black Mage wants Lv 280; Hard Kai\'s max damage bonus is at Lv 285' },
    ],
    milestones: [
      'Clear Duo/Trio Black Mage before June 30',
    ],
  },
  {
    id: 'week3',
    title: 'Week 3',
    subtitle: 'Liberate + The Kai Gamble (The Big Week)',
    targetLevel: '~280+',
    groups: [
      {
        id: 'w3-main',
        title: 'Key Actions',
        steps: [
          { id: 'w3-1', text: 'Solo Black Mage and LIBERATE', details: 'With Genesis Pass, lib is ~4 weeks instead of ~11; after lib you get a 3% attack Magnificent Soul from any BM commander.' },
          { id: 'w3-2', text: 'Solo Normal Seren again' },
          { id: 'w3-3', text: 'Solo Easy Adversary → 500 crests, working toward Stage 6 (Normal Seren boss, 800 crests)' },
          { id: 'w3-4', text: 'Now that you\'re 280: start Mecha Berry + Burning Pass + Mechaberry Farm + Nightmare Paradise', details: 'Mecha Berry ≈ 7% EXP/ticket at 280.' },
        ],
      },
    ],
    bosses: {
      solo: [
        { id: 'w3-boss-s1', text: 'Solo Black Mage and LIBERATE' },
        { id: 'w3-boss-s2', text: 'Solo Normal Seren' },
        { id: 'w3-boss-s3', text: 'Solo Easy Adversary → 500 crests' },
      ],
      party: [
        { id: 'w3-boss-p1', text: 'Party Easy Kalos / Easy Adversary if you can\'t solo them' },
      ],
    },
    gearing: [
      { id: 'w3-gear-1', text: 'Rank: Lv 280 + BM/N Seren/E Kalos → Master' },
      { id: 'w3-gear-2', text: 'OR: Lv 283 + BM/N Seren → Master' },
      { id: 'w3-gear-3', text: 'Master = max Arcane Seal gate (Stage 5) → open seals for Legendary' },
    ],
    milestones: [
      'The 2-Eternal deadline: you must solo Hard Kai by Week 3 to make two full Eternals before the season ends',
      '~12 Kai kills across the season (Normal Kai x2 + Hard Kai x10) banks enough for 2 Eternal pieces',
    ],
  },
  {
    id: 'week4',
    title: 'Week 4',
    subtitle: 'Hard Seren + Armor',
    targetLevel: '~280-285',
    groups: [],
    bosses: {
      solo: [
        { id: 'w4-boss-s1', text: 'Solo Normal Seren weekly' },
        { id: 'w4-boss-s2', text: 'Try Easy Kalos/Easy Adversary solo' },
        { id: 'w4-boss-s3', text: 'Solo Hard Seren → 1,000 crests → push Stage 6/7. Major milestone.' },
      ],
      party: [
        { id: 'w4-boss-p1', text: 'If not solo, Party Easy Kalos/Easy Adversary or Normal Kalos/Normal Adversary depending on your hands' },
      ],
    },
    gearing: [
      { id: 'w4-gear-1', text: 'Liberate if you haven\'t' },
      { id: 'w4-gear-2', text: 'Your liberated Genesis weapon (well-flamed, half-lib) already beats the item-burning weapon — switch to it' },
    ],
    milestones: [],
  },
  {
    id: 'week5',
    title: 'Week 5',
    subtitle: 'Start Hard Kai (Push Beyond 285)',
    targetLevel: '285+',
    groups: [],
    bosses: {
      solo: [
        { id: 'w5-boss-s1', text: 'Solo Easy Kalos + Easy Adversary' },
        { id: 'w5-boss-s2', text: 'Begin attempting Hard Seren / Hard Kai solo' },
      ],
      party: [],
    },
    gearing: [
      { id: 'w5-gear-1', text: 'Rank: Lv 280 + BM/Hard Seren/E Kalos/E Adversary/Hard Kai → Challenger (90k)' },
      { id: 'w5-gear-2', text: 'You can skip Hard Seren but NEVER Hard Kai' },
      { id: 'w5-gear-3', text: 'Crests: Hard Seren 1,000/week → Stage 7 (1,000) → Stage 8 (1,500)' },
    ],
    milestones: [],
  },
  {
    id: 'week6',
    title: 'Week 6',
    subtitle: 'Fairy Heart + Continued Pushing',
    targetLevel: '285+',
    groups: [
      {
        id: 'w6-main',
        title: 'Key Unlocks',
        steps: [
          { id: 'w6-1', text: 'Week-6 Night of Phantasms check-in gives the Fairy Heart', details: 'Lv 130, upgradeable to 20★. Also one from the Shine Pass login reward — save the spare for a mule/Kinesis. Use the free Lidium Heart from Bronze rank until now.' },
          { id: 'w6-2', text: 'After Fairy Heart, you\'re eligible to upgrade to Plasma Heart once you defeat Hard Kai' },
        ],
      },
    ],
    bosses: {
      solo: [
        { id: 'w6-boss-s1', text: 'Keep attempting Hard Seren / Hard Kai' },
        { id: 'w6-boss-s2', text: 'Weekly Normal Seren' },
      ],
      party: [],
    },
    gearing: [],
    milestones: [],
  },
  {
    id: 'week7',
    title: 'Week 7',
    subtitle: 'Full Burning Set',
    targetLevel: '285+',
    groups: [
      {
        id: 'w7-main',
        title: 'Key Milestones',
        steps: [
          { id: 'w7-1', text: 'Solo Easy Adversary to finish Stage 8 → full 22★ item-burning set', details: 'The culmination of 7 weeks of boss progression.' },
          { id: 'w7-2', text: 'Kinesis prep: Kinesis launches ~July 22 (week 6-7)', details: 'If you\'ve hoarded resources on a mule, dump everything onto Kinesis now — his week 1 ≈ everyone\'s week 7.' },
        ],
      },
    ],
    bosses: { solo: [], party: [] },
    gearing: [
      { id: 'w7-gear-1', text: 'Full 22★ item-burning set complete' },
    ],
    milestones: [],
  },
  {
    id: 'week8-12',
    title: 'Weeks 8-12',
    subtitle: 'Maximize',
    targetLevel: '285-290+',
    groups: [
      {
        id: 'w812-main',
        title: 'Every Week',
        steps: [
          { id: 'w812-1', text: 'Solo the hardest boss you can, party anything higher' },
        ],
      },
      {
        id: 'w812-eternals',
        title: 'Eternals (Party Schedule)',
        steps: [
          { id: 'w812-e1', text: 'Hard Kai (Solo only) — Full pieces — Only Kai source' },
          { id: 'w812-e2', text: 'Kalos Normal+ (party) — Full pieces — SAC 350 — Solo Easy = strong enough for Normal party' },
          { id: 'w812-e3', text: 'Adversary Normal+ (party) — Full pieces — Solo Easy ≈ barely enough for Normal' },
          { id: 'w812-e4', text: 'Kaling Easy+ (party) — Half (Easy)/Full (Normal+) — High failure rates' },
          { id: 'w812-e5', text: 'Malefic Star Normal+ (party) — Full pieces — SAC 450 — Need solo-Normal-Kalos strength' },
        ],
      },
      {
        id: 'w812-goals',
        title: 'Long-Term Goals',
        steps: [
          { id: 'w812-g1', text: 'Build Eternal hat/top/bottom + Arcane shoulder/shoe/glove/cape to ~20-21★', details: '18★ Eternals already beat 22★ Challengers, and you can star to 22★ without booming (just expensive past 18★).' },
          { id: 'w812-g2', text: 'Work on pitched items — with boom-free 22★, 9-set is realistically reachable', details: 'The 10th piece is refreshing Black Hearts or a Total Control drop.' },
          { id: 'w812-g3', text: 'Trace Restore missions weekly (Practice OK — points carry to your main world)', details: 'Cap 12 Star Spec boxes/day. Loot Pitched Whisper Crystals and save 390 for a Genesis Badge before spending.' },
        ],
      },
    ],
    bosses: { solo: [], party: [] },
    gearing: [],
    milestones: [],
  },
];

import type { InfoSection } from './types';

export const ranksData: InfoSection[] = [{
  id: 'ranks',
  title: 'Rank System',
  content: 'Challenger World Season 3 rank progression, rewards, and requirements.',
  subsections: [
    {
      id: 'leveling-points',
      title: 'Points & Coins from Leveling',
      tables: [
        {
          data: {
            headers: ['Level Range', 'Points', 'Coins'],
            rows: [
              ['260', '3,000', '3,000'],
              ['261–269', '300 each', '300 each'],
              ['270–274', '700 each', '600 each'],
              ['275–279', '1,000 each', '900 each'],
              ['280–284', '1,500 each', '1,200 each'],
              ['285–289', '2,000 each', '1,500 each'],
              ['290', '5,000', '2,500'],
            ],
          },
        },
      ],
    },
    {
      id: 'boss-points',
      title: 'Points from Soloing Bosses',
      tables: [
        {
          title: 'Early Bosses',
          data: {
            headers: ['Boss', 'Difficulty', 'Points'],
            rows: [
              ['Cygnus', 'Normal', '100'],
              ['Zakum', 'Normal / Chaos', '100'],
              ['Hilla', 'Normal / Hard', '100'],
              ['Pink Bean', 'Normal / Chaos', '100'],
              ['Pierre', 'Normal / Chaos', '100'],
              ['Von Bon', 'Normal / Chaos', '100'],
              ['Bloody Queen', 'Normal / Chaos', '100'],
              ['Magnus', 'Hard', '200'],
              ['Vellum', 'Chaos', '200'],
              ['Papulatus', 'Chaos', '300'],
            ],
          },
        },
        {
          title: 'Mid Bosses',
          data: {
            headers: ['Boss', 'Difficulty', 'Points'],
            rows: [
              ['Lotus', 'Normal', '400'],
              ['Lotus', 'Hard', '1,500'],
              ['Damien', 'Normal', '400'],
              ['Damien', 'Hard', '1,500'],
              ['Slime', 'Normal', '500'],
              ['Slime', 'Chaos', '2,500'],
              ['Lucid', 'Easy', '500'],
              ['Lucid', 'Normal', '1,000'],
              ['Lucid', 'Hard', '2,000'],
              ['Will', 'Easy', '500'],
              ['Will', 'Normal', '1,000'],
              ['Will', 'Hard', '2,500'],
              ['Gloom', 'Normal', '1,000'],
              ['Gloom', 'Chaos', '2,500'],
              ['Verus Hilla', 'Normal', '2,000'],
              ['Verus Hilla', 'Hard', '3,000'],
              ['Darknell', 'Normal', '1,000'],
              ['Darknell', 'Hard', '3,000'],
            ],
          },
        },
        {
          title: 'Endgame Bosses',
          data: {
            headers: ['Boss', 'Difficulty', 'Points'],
            rows: [
              ['Black Mage', 'Hard', '6,000'],
              ['Seren', 'Normal', '6,000'],
              ['Seren', 'Hard', '7,000'],
              ['Kalos', 'Easy', '7,000'],
              ['Kalos', 'Normal', '9,000'],
              ['Adversary', 'Easy', '7,000'],
              ['Adversary', 'Normal', '9,000'],
              ['Kaling', 'Easy', '9,000'],
              ['Kai', 'Normal', '5,000'],
              ['Kai', 'Hard', '8,000'],
            ],
          },
        },
      ],
    },
    {
      id: 'rank-requirements',
      title: 'Rank Requirements',
      tables: [
        {
          data: {
            headers: ['Rank', 'Points', 'Level', 'Boss Requirements'],
            rows: [
              ['Bronze', '5,000', '260', 'Solo up to Normal Lotus & Damien'],
              ['Silver', '10,000', '260', 'Solo up to Normal Gloom & Darknell'],
              ['Gold', '15,000', '264', 'Solo up to Hard Lotus & Damien'],
              ['Platinum', '20,000', '270', 'Solo all ≤ Hard Lotus/Damien AND ≥1 of Hard Lucid/Will, Chaos Tenebris, Chaos Slime'],
              ['Emerald', '30,000', '275', 'Additional boss requirements'],
              ['Diamond', '40,000', '277', 'Additional boss requirements'],
              ['Master', '65,000', '280', 'Normal Kai (mandatory) + additional requirements'],
              ['Challenger', '90,000', '285', 'Hard Kai (mandatory) + additional requirements'],
            ],
          },
        },
      ],
    },
    {
      id: 'rank-rewards',
      title: 'Rank Rewards',
      tables: [
        {
          data: {
            headers: ['Rank', 'Rewards'],
            rows: [
              ['Bronze', 'Bronze Medal + Challenger Medal-roid Coupon + Lidium Heart + 100 Sol Erda Frags + 3 Sol Erda'],
              ['Silver', 'Silver Medal + Selective Lv 4 Special Skill Ring (Restraint/Continuous/Weapon Puff) + 100 frags + 3 Sol Erda'],
              ['Gold', 'Gold Medal + 100 frags + 3 Sol Erda'],
              ['Platinum', 'Platinum Medal + 300 Sol Erda Frags + 5 Sol Erda'],
              ['Emerald', 'Emerald Medal + 20 Ultimate Union Growth Potions + Legendary Potential Scroll (Lv 200) + 30 Black (Bright) Cubes. Receivable on any world.'],
              ['Diamond', 'Diamond Medal + Legendary Potential Scroll + Additional Unique Potential Scroll + 30 White Additional (Bright) Cubes + Cozy Winter Set. Receivable on any world.'],
              ['Master', 'Master Medal + 30 Black Cubes + 30 White Additional Cubes. Max Arcane Seal gate (Stage 5).'],
              ['Challenger', 'Challenger Medal (displays server clear rank #) + Challenger Furniture. Rank 1 gets "1st Challenger Medal". Hard Kai mandatory.'],
            ],
          },
        },
      ],
    },
    {
      id: 'passive-skill',
      title: 'Challenger Passive Skill',
      content: 'The [Challengers Beginner] skill grows automatically as your tier rises. This replaces Legion/Link skills (disabled in Challenger World). Cumulative effects shown below.',
      tables: [
        {
          data: {
            headers: ['Rank', 'Attack', 'Boss%', 'IED%', 'All Stat', 'HP/MP', 'Extra'],
            rows: [
              ['Beginner (Lv 260)', '+50', '+30%', '+30%', '+50', '+2,500', '1.5× EXP, +100% mob dmg, +30% crit rate/dmg, +30% buff dur, +100% stance, +10% summon, +5% CDR'],
              ['Bronze', '+50', '+30%', '+30%', '+50', '+2,500', 'mob dmg → +150%'],
              ['Silver', '+55', '+40%', '+40%', '+60', '+3,000', ''],
              ['Gold', '+60', '+50%', '+50%', '+70', '+3,500', ''],
              ['Platinum', '+70', '+60%', '+60%', '+90', '+4,500', 'crit dmg → +35%'],
              ['Emerald', '+80', '+70%', '+70%', '+100', '+5,000', 'crit dmg → +40%, buff dur → +60%'],
              ['Diamond+', '+80', '+70%', '+70%', '+100', '+5,000', '+20% meso, +20% drop rate'],
            ],
          },
        },
      ],
    },
  ],
  tips: [
    'You cannot reach Master without soloing Normal Kai, and you cannot reach Challenger without soloing Hard Kai.',
  ],
}];

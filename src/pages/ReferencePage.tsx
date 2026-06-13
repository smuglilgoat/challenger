import { useState } from 'react';
import { motion } from 'framer-motion';
import { rankRequirements, getRankColor } from '../data/references/ranks';
import { bossTiers } from '../data/references/bosses';
import { itemBurningStages, crestRewards, totalCrestsNeeded } from '../data/references/itemBurning';
import { arcaneSealStages, arcaneSealNotes } from '../data/references/arcaneSeal';
import { challengerPassives, iedNote } from '../data/references/challengerPassive';
import { titleOrder } from '../data/references/titles';
import { passes } from '../data/references/passes';
import { eternalBosses, eternalNotes } from '../data/references/eternals';
import { mesoDropGearBuild, mesoDropTargets, mesoDropProgression } from '../data/references/gear';

type Tab = 'ranks' | 'bosses' | 'itemBurning' | 'arcaneSeal' | 'passives' | 'titles' | 'passes' | 'eternals' | 'gear';

export default function ReferencePage() {
  const [activeTab, setActiveTab] = useState<Tab>('ranks');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'ranks', label: 'Ranks' },
    { id: 'bosses', label: 'Bosses' },
    { id: 'itemBurning', label: 'Item Burning' },
    { id: 'arcaneSeal', label: 'Arcane Seal' },
    { id: 'passives', label: 'Passives' },
    { id: 'titles', label: 'Titles' },
    { id: 'passes', label: 'Passes' },
    { id: 'eternals', label: 'Eternals' },
    { id: 'gear', label: 'Gear' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold text-white mb-1">
          Reference Guide
        </h1>
        <p className="text-sm text-gray-400">
          Complete reference tables and lookup information
        </p>
      </motion.div>

      <div className="mb-6 flex flex-wrap gap-1.5">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
              activeTab === tab.id
                ? 'bg-maple-orange text-white'
                : 'bg-maple-charcoal text-gray-400 hover:bg-gray-700 hover:text-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-maple-charcoal rounded-xl border border-gray-700/60 p-6"
      >
        {activeTab === 'ranks' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Rank Requirements</h2>
            <div className="space-y-3">
              {rankRequirements.map((req, index) => (
                <div key={index} className="border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-lg font-bold ${getRankColor(req.rank)}`}>
                      {req.rank.charAt(0).toUpperCase() + req.rank.slice(1)}
                    </h3>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Points</div>
                      <div className="text-lg font-bold text-maple-orange">{req.points.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">
                    <span className="font-semibold text-gray-400">Level:</span> {req.level}+
                  </div>
                  <div className="text-xs text-gray-300 mb-1">
                    <span className="font-semibold text-gray-400">Bosses:</span> {req.bosses.join(', ')}
                  </div>
                  {req.notes && (
                    <div className="text-xs text-blue-300 mt-2 bg-blue-900/20 rounded px-2 py-1.5">
                      {req.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'bosses' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Boss Tier List</h2>
            <div className="space-y-3">
              {bossTiers.map((tier, index) => (
                <div key={index} className="border border-gray-700/50 rounded-lg p-4">
                  <h3 className="text-base font-bold text-maple-orange mb-2">
                    Tier {tier.tier}: {tier.name}
                  </h3>
                  <div className="text-xs text-gray-300 mb-1">
                    <span className="font-semibold text-gray-400">Bosses:</span> {tier.bosses.join(', ')}
                  </div>
                  <div className="text-xs text-gray-300 mb-1">
                    <span className="font-semibold text-gray-400">Requirements:</span> {tier.requirements}
                  </div>
                  <div className="text-xs text-blue-300">
                    {tier.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'itemBurning' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Item Burning System</h2>
            <div className="mb-6">
              <h3 className="text-base font-semibold text-maple-orange mb-3">Stages</h3>
              <div className="space-y-2">
                {itemBurningStages.map((stage, index) => (
                  <div key={index} className="border border-gray-700/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-white">Stage {stage.stage}</span>
                      <span className="text-sm text-yellow-400 font-bold">{stage.stars}★</span>
                    </div>
                    {stage.crestsNeeded > 0 && (
                      <div className="text-xs text-gray-400">
                        Crests needed: {stage.crestsNeeded}
                      </div>
                    )}
                    {stage.bossRequired && (
                      <div className="text-xs text-blue-300">
                        Boss: {stage.bossRequired}
                      </div>
                    )}
                    {stage.notes && (
                      <div className="text-xs text-gray-300 mt-1">
                        {stage.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-maple-navy rounded-lg">
                <div className="text-xs text-gray-400">Total Crests Needed</div>
                <div className="text-2xl font-bold text-maple-orange">{totalCrestsNeeded.toLocaleString()}</div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-maple-orange mb-3">Crest Rewards by Boss</h3>
              <div className="space-y-1.5">
                {crestRewards.map((reward, index) => (
                  <div key={index} className="flex items-center justify-between border border-gray-700/50 rounded-lg p-3">
                    <span className="text-xs text-gray-300">{reward.boss}</span>
                    <span className="text-sm text-purple-400 font-bold">{reward.crests}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'arcaneSeal' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Arcane Seal System</h2>
            <div className="space-y-3 mb-6">
              {arcaneSealStages.map((stage, index) => (
                <div key={index} className="border border-gray-700/50 rounded-lg p-4">
                  <h3 className="text-base font-bold text-maple-orange mb-2">
                    Stage {stage.stage} — {stage.rank}
                  </h3>
                  <div className="text-xs text-gray-300 mb-1">
                    <span className="font-semibold text-gray-400">Points:</span> {stage.points.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-300 mb-1">
                    <span className="font-semibold text-gray-400">Rates:</span> {stage.rates}
                  </div>
                  <div className="text-xs text-blue-300">
                    <span className="font-semibold">Stopping Point:</span> {stage.stoppingPoint}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-maple-navy rounded-lg p-4">
              <h3 className="text-base font-semibold text-white mb-3">Important Notes</h3>
              <ul className="space-y-1.5">
                {arcaneSealNotes.map((note, index) => (
                  <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-maple-orange mt-0.5">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'passives' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Challenger Passive Stats</h2>
            <div className="space-y-3 mb-6">
              {challengerPassives.map((passive, index) => (
                <div key={index} className="border border-gray-700/50 rounded-lg p-4">
                  <h3 className="text-base font-bold text-maple-orange mb-2">
                    {passive.rank}
                  </h3>
                  <ul className="space-y-0.5">
                    {passive.stats.map((stat, i) => (
                      <li key={i} className="text-xs text-gray-300">
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-yellow-900/20 border border-yellow-700/40 rounded-lg p-4">
              <h3 className="text-base font-semibold text-yellow-300 mb-2">Important IED Note</h3>
              <p className="text-xs text-gray-300">
                {iedNote}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'titles' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Title Rotation Order</h2>
            <div className="space-y-3">
              {titleOrder.map((title, index) => (
                <div key={index} className="border border-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-7 h-7 bg-maple-orange rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {title.order}
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {title.title}
                    </h3>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">
                    <span className="font-semibold text-gray-400">When:</span> {title.when}
                  </div>
                  <div className="text-xs text-gray-300 mb-1">
                    <span className="font-semibold text-gray-400">Use:</span> {title.use}
                  </div>
                  {title.duration && (
                    <div className="text-xs text-gray-300 mb-1">
                      <span className="font-semibold text-gray-400">Duration:</span> {title.duration}
                    </div>
                  )}
                  {title.warning && (
                    <div className="text-xs text-yellow-300 mt-2 bg-yellow-900/20 rounded px-2 py-1.5">
                      ⚠ {title.warning}
                    </div>
                  )}
                  {title.tip && (
                    <div className="text-xs text-blue-300 mt-2 bg-blue-900/20 rounded px-2 py-1.5">
                      💡 {title.tip}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'passes' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Passes & Costs</h2>
            <div className="space-y-3">
              {passes.map((pass, index) => (
                <div key={index} className={`border rounded-lg p-4 ${pass.recommended ? 'border-maple-orange/40' : 'border-gray-700/50'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      {pass.name}
                      {pass.recommended && (
                        <span className="text-[10px] bg-maple-orange text-white px-1.5 py-0.5 rounded font-semibold">
                          REC
                        </span>
                      )}
                    </h3>
                    <div className="text-right">
                      <div className="text-base font-bold text-maple-orange">
                        {pass.cost}
                      </div>
                      <div className="text-[10px] text-gray-500">
                        {pass.costType}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-0.5 mb-3">
                    {pass.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  {pass.notes && (
                    <div className="text-xs text-blue-300 bg-blue-900/20 rounded px-2 py-1.5">
                      {pass.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'eternals' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Eternal Acquisition</h2>
            <div className="space-y-3 mb-6">
              {eternalBosses.map((boss, index) => (
                <div key={index} className="border border-gray-700/50 rounded-lg p-4">
                  <h3 className="text-base font-bold text-maple-orange mb-2">
                    {boss.boss}
                  </h3>
                  <div className="text-xs text-gray-300 mb-1">
                    <span className="font-semibold text-gray-400">Difficulty:</span> {boss.difficulty}
                  </div>
                  <div className="text-xs text-gray-300 mb-1">
                    <span className="font-semibold text-gray-400">Pieces:</span> {boss.pieces}
                  </div>
                  {boss.notes && (
                    <div className="text-xs text-blue-300 mt-2">
                      {boss.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-maple-navy rounded-lg p-4">
              <h3 className="text-base font-semibold text-white mb-3">Important Notes</h3>
              <ul className="space-y-1.5">
                {eternalNotes.map((note, index) => (
                  <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-maple-orange mt-0.5">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'gear' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Meso/Drop Gear Build</h2>
            <div className="mb-6">
              <h3 className="text-base font-semibold text-maple-orange mb-3">Gear Slots</h3>
              <div className="space-y-1.5">
                {mesoDropGearBuild.map((item, index) => (
                  <div key={index} className="border border-gray-700/50 rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white">{item.slot}</div>
                      <div className="text-xs text-gray-500">{item.notes}</div>
                    </div>
                    <div className="text-xs text-gray-300">{item.item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-base font-semibold text-maple-orange mb-3">Targets</h3>
              <div className="bg-maple-navy rounded-lg p-4">
                <div className="text-xs text-gray-300 mb-1.5">
                  <span className="font-semibold text-gray-400">Meso:</span> {mesoDropTargets.meso}
                </div>
                <div className="text-xs text-gray-300 mb-1.5">
                  <span className="font-semibold text-gray-400">Drop:</span> {mesoDropTargets.drop}
                </div>
                <div className="text-xs text-gray-300">
                  <span className="font-semibold text-gray-400">Strategy:</span> {mesoDropTargets.strategy}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-maple-orange mb-3">Progression Order</h3>
              <ol className="space-y-1.5">
                {mesoDropProgression.map((step, index) => (
                  <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-maple-orange font-bold">{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

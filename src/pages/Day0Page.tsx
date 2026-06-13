import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { day0Tasks } from '../data/day0';
import ChecklistSection from '../components/ChecklistSection';

export default function Day0Page() {
  const { getActiveCharacter } = useGame();
  const character = getActiveCharacter();

  if (!character) {
    return (
      <div className="text-center text-gray-400 py-12">
        Please select or create a character to view Day 0 checklist.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold text-white mb-1">
          Day 0 Checklist
        </h1>
        <p className="text-sm text-gray-400">
          The intense first few hours after the game comes up but before weekly reset
        </p>
        <div className="mt-3 p-3 bg-yellow-900/20 border border-yellow-700/40 rounded-lg">
          <p className="text-xs text-yellow-300">
            ⚠ Plan for ~3 hours of game uptime before reset (minus download time). Have this checklist on a second screen, game full-screen, minimal distractions.
          </p>
        </div>
      </motion.div>

      {day0Tasks.map(section => (
        <ChecklistSection
          key={section.id}
          section={section}
          sectionKey="day0"
        />
      ))}
    </div>
  );
}

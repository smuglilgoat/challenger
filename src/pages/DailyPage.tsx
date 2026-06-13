import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { dailyTasks, weeklyTasks } from '../data/daily';
import ChecklistSection from '../components/ChecklistSection';

export default function DailyPage() {
  const { getActiveCharacter } = useGame();
  const character = getActiveCharacter();

  if (!character) {
    return (
      <div className="text-center text-gray-400 py-12">
        Please select or create a character to view daily routine.
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
          Daily & Weekly Routine
        </h1>
        <p className="text-sm text-gray-400">
          Your daily and weekly tasks throughout Challenger World Season 3
        </p>
      </motion.div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Daily Tasks</h2>
        {dailyTasks.map(section => (
          <ChecklistSection
            key={section.id}
            section={section}
            sectionKey="daily"
          />
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white mb-3">Weekly Tasks</h2>
        {weeklyTasks.map(section => (
          <ChecklistSection
            key={section.id}
            section={section}
            sectionKey="weeklyTasks"
          />
        ))}
      </div>
    </div>
  );
}

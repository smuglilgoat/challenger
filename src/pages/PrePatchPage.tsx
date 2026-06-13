import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { prePatchTasks } from '../data/prepatch';
import ChecklistSection from '../components/ChecklistSection';

export default function PrePatchPage() {
  const { getActiveCharacter } = useGame();
  const character = getActiveCharacter();

  if (!character) {
    return (
      <div className="text-center text-gray-400 py-12">
        Please select or create a character to view pre-patch preparation.
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
          Pre-Patch Preparation
        </h1>
        <p className="text-sm text-gray-400">
          Complete these tasks the week BEFORE Challenger World 3 launches
        </p>
      </motion.div>

      {prePatchTasks.map(section => (
        <ChecklistSection
          key={section.id}
          section={section}
          sectionKey="prePatch"
        />
      ))}
    </div>
  );
}

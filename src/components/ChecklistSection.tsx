import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TaskSection } from '../types';
import { useGame } from '../context/GameContext';
import ChecklistItem from './ChecklistItem';

interface ChecklistSectionProps {
  section: TaskSection;
  sectionKey: string;
  week?: number;
}

export default function ChecklistSection({ section, sectionKey, week }: ChecklistSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const { getActiveCharacter, toggleTask } = useGame();
  const character = getActiveCharacter();

  if (!character) return null;

  const getTaskStatus = (taskId: string): boolean => {
    if (week !== undefined) {
      return character.progress.weeks[week]?.[taskId] || false;
    }
    return (character.progress as any)[sectionKey]?.[taskId] || false;
  };

  const handleToggle = (taskId: string) => {
    toggleTask(character.id, sectionKey, taskId, week);
  };

  const completedCount = section.tasks.filter(t => getTaskStatus(t.id)).length;
  const totalCount = section.tasks.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  const isComplete = completedCount === totalCount && totalCount > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl border overflow-hidden mb-4 transition-colors duration-300 ${
        isComplete
          ? 'bg-green-950/30 border-green-700/40'
          : 'bg-maple-charcoal border-gray-700/60'
      }`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-5 py-4 flex items-center justify-between hover:bg-white/[0.03] transition-colors"
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            {isComplete && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-green-400 text-sm"
              >
                ✓
              </motion.span>
            )}
            <h2 className="text-base font-semibold text-white">
              {section.title}
            </h2>
          </div>
          {section.description && (
            <p className="text-sm text-gray-400 mt-1">
              {section.description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-4 ml-4">
          <div className="text-right">
            <div className={`text-sm font-bold ${isComplete ? 'text-green-400' : 'text-maple-orange'}`}>
              {completedCount}/{totalCount}
            </div>
            <div className="w-28 h-1.5 bg-gray-700/80 rounded-full overflow-hidden mt-1">
              <motion.div
                className={`h-full rounded-full ${isComplete ? 'bg-green-400' : 'bg-maple-orange'}`}
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
          <motion.span
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-500 text-sm"
          >
            ▶
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 pt-1 border-t border-gray-700/40">
              <div className="space-y-2">
                {section.tasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.2 }}
                  >
                    <ChecklistItem
                      task={task}
                      checked={getTaskStatus(task.id)}
                      onToggle={() => handleToggle(task.id)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

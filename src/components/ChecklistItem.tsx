import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Task } from '../types';

interface ChecklistItemProps {
  task: Task;
  checked: boolean;
  onToggle: () => void;
  depth?: number;
}

export default function ChecklistItem({ task, checked, onToggle, depth = 0 }: ChecklistItemProps) {
  const [showDetails, setShowDetails] = useState(false);
  const hasDetails = !!(task.description || task.warning || task.tip || (task.subtasks && task.subtasks.length > 0));

  return (
    <div className={depth > 0 ? 'ml-5' : ''}>
      <div
        className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${
          checked
            ? 'bg-green-900/20 border border-green-700/40'
            : 'bg-maple-navy/60 border border-gray-700/50 hover:border-gray-600/60'
        }`}
      >
        <button
          onClick={onToggle}
          className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all duration-200 ${
            checked
              ? 'bg-green-500 border-green-500'
              : 'border-gray-500 hover:border-maple-orange'
          }`}
        >
          {checked && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </motion.svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <button
              onClick={onToggle}
              className={`flex-1 text-left text-sm leading-relaxed transition-colors duration-200 ${
                checked ? 'text-gray-500 line-through' : 'text-gray-200'
              }`}
            >
              {task.text}
            </button>
            {hasDetails && (
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex-shrink-0 text-gray-500 hover:text-maple-orange transition-colors text-xs mt-0.5 px-1"
              >
                {showDetails ? '▾' : '▸'}
              </button>
            )}
          </div>

          <AnimatePresence initial={false}>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-2 space-y-2">
                  {task.description && (
                    <p className="text-xs text-gray-400 leading-relaxed">{task.description}</p>
                  )}
                  {task.warning && (
                    <div className="text-xs text-yellow-300 bg-yellow-900/30 border border-yellow-700/40 rounded-md px-3 py-2">
                      ⚠ {task.warning}
                    </div>
                  )}
                  {task.tip && (
                    <div className="text-xs text-blue-300 bg-blue-900/30 border border-blue-700/40 rounded-md px-3 py-2">
                      💡 {task.tip}
                    </div>
                  )}
                  {task.subtasks && task.subtasks.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {task.subtasks.map(subtask => (
                        <ChecklistItem
                          key={subtask.id}
                          task={subtask}
                          checked={checked}
                          onToggle={onToggle}
                          depth={depth + 1}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

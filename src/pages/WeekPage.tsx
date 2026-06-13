import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { week1Tasks } from '../data/weeks/week1';
import { week2Tasks } from '../data/weeks/week2';
import { week3Tasks } from '../data/weeks/week3';
import { week4Tasks } from '../data/weeks/week4';
import { week5Tasks } from '../data/weeks/week5';
import { week6Tasks } from '../data/weeks/week6';
import { week7Tasks } from '../data/weeks/week7';
import { weeks8to12Tasks } from '../data/weeks/week8to12';
import ChecklistSection from '../components/ChecklistSection';

export default function WeekPage() {
  const { weekNumber } = useParams<{ weekNumber: string }>();
  const { getActiveCharacter } = useGame();
  const character = getActiveCharacter();

  const week = parseInt(weekNumber || '1');

  const getWeekTasks = () => {
    switch (week) {
      case 1: return week1Tasks;
      case 2: return week2Tasks;
      case 3: return week3Tasks;
      case 4: return week4Tasks;
      case 5: return week5Tasks;
      case 6: return week6Tasks;
      case 7: return week7Tasks;
      case 8: return weeks8to12Tasks;
      default: return [];
    }
  };

  const tasks = getWeekTasks();

  if (!character) {
    return (
      <div className="text-center text-gray-400 py-12">
        Please select or create a character to view week progression.
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
          {week === 8 ? 'Weeks 8-12' : `Week ${week}`} Progression
        </h1>
        <p className="text-sm text-gray-400">
          {week === 8
            ? 'Final weeks — maximize your character'
            : `Week ${week} goals and tasks`
          }
        </p>
      </motion.div>

      {tasks.map(section => (
        <ChecklistSection
          key={section.id}
          section={section}
          sectionKey="weeks"
          week={week}
        />
      ))}
    </div>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { useProgress } from '../hooks/useProgress';
import { getRankColor } from '../data/references/ranks';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
};

export default function DashboardPage() {
  const { getActiveCharacter } = useGame();
  const character = getActiveCharacter();
  const progress = useProgress(character);

  if (!character) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-maple-charcoal rounded-xl border border-gray-700/60 p-12 text-center"
        >
          <div className="text-5xl mb-4">⚔️</div>
          <h1 className="text-3xl font-bold text-white mb-3">
            Challenger World S3 Tracker
          </h1>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Track your progression through MapleStory Challenger World Season 3. Add a character to get started.
          </p>
          <p className="text-sm text-gray-500">
            Use the "Add Character" button above to create your first character.
          </p>
        </motion.div>
      </div>
    );
  }

  const stats = [
    { label: 'Level', value: character.level, color: 'text-blue-400', bg: 'from-blue-500/10 to-transparent' },
    { label: 'Rank', value: character.rank.charAt(0).toUpperCase() + character.rank.slice(1), color: getRankColor(character.rank), bg: 'from-purple-500/10 to-transparent' },
    { label: 'Week', value: character.currentWeek, color: 'text-purple-400', bg: 'from-purple-500/10 to-transparent' },
    { label: 'Overall', value: `${progress.overallProgress}%`, color: 'text-maple-orange', bg: 'from-orange-500/10 to-transparent' },
  ];

  const quickLinks = [
    { path: '/pre-patch', label: 'Pre-Patch Prep', progress: progress.prePatchProgress, icon: '📋', desc: 'Prepare before launch' },
    { path: '/day0', label: 'Day 0 Checklist', progress: progress.day0Progress, icon: '🚀', desc: 'The intense first hours' },
    { path: '/daily', label: 'Daily Routine', progress: progress.dailyProgress, icon: '📅', desc: 'Everyday tasks' },
    { path: `/week/${character.currentWeek}`, label: `Week ${character.currentWeek}`, progress: progress.weekProgress[character.currentWeek] || 0, icon: '📊', desc: 'Current week goals' },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">
          {character.name}
        </h1>
        <p className="text-gray-400 text-sm">
          {character.type.charAt(0).toUpperCase() + character.type.slice(1)} Character
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className={`bg-gradient-to-br ${stat.bg} bg-maple-charcoal rounded-xl border border-gray-700/60 p-5`}
          >
            <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">{stat.label}</div>
            <div className={`text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {quickLinks.map((link, index) => (
            <motion.div key={index} whileHover={{ scale: 1.01 }}>
              <Link
                to={link.path}
                className="block bg-maple-charcoal rounded-xl border border-gray-700/60 p-5 hover:border-maple-orange/50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    <div>
                      <span className="text-sm font-semibold text-white group-hover:text-maple-orange transition-colors">{link.label}</span>
                      <p className="text-xs text-gray-500">{link.desc}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-bold ${link.progress === 100 ? 'text-green-400' : 'text-maple-orange'}`}>
                    {link.progress}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-700/80 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${link.progress === 100 ? 'bg-green-400' : 'bg-maple-orange'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${link.progress}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-maple-charcoal rounded-xl border border-gray-700/60 p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Item Burning Progress</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Stage</div>
            <div className="text-2xl font-bold text-maple-orange">
              {character.progress.itemBurning.stage}<span className="text-gray-500 text-lg">/8</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Stars</div>
            <div className="text-2xl font-bold text-yellow-400">
              {character.progress.itemBurning.stars}<span className="text-yellow-500">★</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Crests</div>
            <div className="text-2xl font-bold text-purple-400">
              {character.progress.itemBurning.crests}<span className="text-gray-500 text-lg">/3900</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full h-2 bg-gray-700/80 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-maple-orange to-yellow-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((character.progress.itemBurning.crests / 3900) * 100, 100)}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

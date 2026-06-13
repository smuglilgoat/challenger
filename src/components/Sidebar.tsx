import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';

export default function Sidebar() {
  const location = useLocation();
  const { getActiveCharacter } = useGame();
  const character = getActiveCharacter();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/pre-patch', label: 'Pre-Patch', icon: '📋' },
    { path: '/day0', label: 'Day 0', icon: '🚀' },
    { path: '/daily', label: 'Daily', icon: '📅' },
    { type: 'divider' as const },
    { path: '/week/1', label: 'Week 1', icon: '1' },
    { path: '/week/2', label: 'Week 2', icon: '2' },
    { path: '/week/3', label: 'Week 3', icon: '3' },
    { path: '/week/4', label: 'Week 4', icon: '4' },
    { path: '/week/5', label: 'Week 5', icon: '5' },
    { path: '/week/6', label: 'Week 6', icon: '6' },
    { path: '/week/7', label: 'Week 7', icon: '7' },
    { path: '/week/8', label: 'Week 8-12', icon: '🔥' },
    { type: 'divider' as const },
    { path: '/references', label: 'References', icon: '📚' },
  ];

  return (
    <aside className="w-60 bg-maple-charcoal border-r border-gray-700/60 flex flex-col flex-shrink-0">
      <div className="p-4 border-b border-gray-700/60">
        <h1 className="text-lg font-bold text-maple-orange tracking-tight">
          CW3 Tracker
        </h1>
        <p className="text-xs text-gray-500 mt-0.5">
          Challenger World Season 3
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-3">
        <ul className="space-y-0.5">
          {navItems.map((item, index) => {
            if ('type' in item && item.type === 'divider') {
              return <li key={index} className="border-t border-gray-700/40 my-2" />;
            }

            const isActive = location.pathname === item.path;
            const isWeekLink = item.path?.startsWith('/week/');
            const currentWeek = character?.currentWeek;
            const isCurrentWeek = isWeekLink && currentWeek && item.path === `/week/${currentWeek}`;

            return (
              <li key={index}>
                <Link
                  to={item.path!}
                  className={`relative flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-150 text-sm ${
                    isActive
                      ? 'bg-maple-orange text-white font-medium'
                      : isCurrentWeek
                      ? 'bg-maple-orange/10 text-maple-orange border border-maple-orange/30'
                      : 'text-gray-400 hover:bg-white/[0.04] hover:text-gray-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-maple-orange rounded-lg"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 w-5 text-center text-xs ${
                    isWeekLink && !isActive ? 'font-mono font-bold' : ''
                  }`}>
                    {item.icon}
                  </span>
                  <span className="relative z-10 font-medium">{item.label}</span>
                  {isCurrentWeek && !isActive && (
                    <span className="relative z-10 ml-auto w-1.5 h-1.5 bg-maple-orange rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-3 border-t border-gray-700/60">
        <p className="text-[10px] text-gray-600 text-center">
          Progress saved locally
        </p>
      </div>
    </aside>
  );
}

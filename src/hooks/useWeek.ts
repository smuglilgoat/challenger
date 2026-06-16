import { useMemo } from 'react';

const SEASON_START = new Date('2026-06-17T00:00:00');

export function useWeek() {
  return useMemo(() => {
    const now = new Date();
    const diffMs = now.getTime() - SEASON_START.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { phase: 'pre-season' as const, day: 0, week: 0, label: `${Math.abs(diffDays)} days until season starts` };
    }

    if (diffDays === 0) {
      return { phase: 'day0' as const, day: 0, week: 0, label: 'Day 0 — Launch Day' };
    }

    if (diffDays === 1) {
      return { phase: 'day1' as const, day: 1, week: 0, label: 'Day 1' };
    }

    const week = Math.ceil((diffDays - 1) / 7);
    if (week > 12) {
      return { phase: 'post-season' as const, day: diffDays, week, label: 'Season ended' };
    }

    return { phase: 'week' as const, day: diffDays, week, label: `Week ${week} (Day ${diffDays})` };
  }, []);
}

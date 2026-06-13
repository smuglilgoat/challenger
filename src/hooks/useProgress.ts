import { Character } from '../types';
import { prePatchTasks } from '../data/prepatch';
import { day0Tasks } from '../data/day0';
import { dailyTasks, weeklyTasks } from '../data/daily';
import { week1Tasks } from '../data/weeks/week1';
import { week2Tasks } from '../data/weeks/week2';
import { week3Tasks } from '../data/weeks/week3';
import { week4Tasks } from '../data/weeks/week4';
import { week5Tasks } from '../data/weeks/week5';
import { week6Tasks } from '../data/weeks/week6';
import { week7Tasks } from '../data/weeks/week7';
import { weeks8to12Tasks } from '../data/weeks/week8to12';

function countTasks(section: { tasks: { id: string }[] }[]): number {
  return section.reduce((acc, s) => acc + s.tasks.length, 0);
}

export function useProgress(character: Character | null) {
  if (!character) {
    return {
      prePatchProgress: 0,
      day0Progress: 0,
      dailyProgress: 0,
      weeklyProgress: 0,
      weekProgress: {} as Record<number, number>,
      overallProgress: 0
    };
  }

  const calculateSectionProgress = (completed: Record<string, boolean> | undefined, totalTasks: number): number => {
    if (!completed || totalTasks === 0) return 0;
    const completedCount = Object.values(completed).filter(v => v).length;
    return Math.round((completedCount / totalTasks) * 100);
  };

  const prePatchTotal = countTasks(prePatchTasks);
  const day0Total = countTasks(day0Tasks);
  const dailyTotal = countTasks(dailyTasks);
  const weeklyTotal = countTasks(weeklyTasks);

  const prePatchProgress = calculateSectionProgress(character.progress.prePatch, prePatchTotal);
  const day0Progress = calculateSectionProgress(character.progress.day0, day0Total);
  const dailyProgress = calculateSectionProgress(character.progress.daily, dailyTotal);
  const weeklyProgress = calculateSectionProgress(character.progress.weeklyTasks, weeklyTotal);

  const weekTaskData = [week1Tasks, week2Tasks, week3Tasks, week4Tasks, week5Tasks, week6Tasks, week7Tasks, weeks8to12Tasks];
  const weekProgress: Record<number, number> = {};
  for (let i = 0; i < weekTaskData.length; i++) {
    const weekNum = i + 1;
    const total = countTasks(weekTaskData[i]);
    const completed = character.progress.weeks[weekNum];
    weekProgress[weekNum] = calculateSectionProgress(completed, total);
  }

  const allProgress = [
    prePatchProgress,
    day0Progress,
    ...Object.values(weekProgress)
  ].filter(p => p > 0);

  const overallProgress = allProgress.length > 0
    ? Math.round(allProgress.reduce((a, b) => a + b, 0) / allProgress.length)
    : 0;

  return {
    prePatchProgress,
    day0Progress,
    dailyProgress,
    weeklyProgress,
    weekProgress,
    overallProgress
  };
}

import { useState, useEffect, useCallback } from 'react';
import type { ProgressState } from '@/data/types';

const STORAGE_KEY = 'cw3-progress';

const defaultState: ProgressState = { steps: {} };

function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore parse errors
  }
  return defaultState;
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(loadProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const toggleStep = useCallback((id: string) => {
    setState(prev => {
      const existing = prev.steps[id];
      return {
        steps: {
          ...prev.steps,
          [id]: {
            completed: !existing?.completed,
            notes: existing?.notes ?? '',
            timestamp: Date.now(),
          },
        },
      };
    });
  }, []);

  const setNotes = useCallback((id: string, notes: string) => {
    setState(prev => ({
      steps: {
        ...prev.steps,
        [id]: {
          completed: prev.steps[id]?.completed ?? false,
          notes,
          timestamp: Date.now(),
        },
      },
    }));
  }, []);

  const isCompleted = useCallback(
    (id: string) => state.steps[id]?.completed ?? false,
    [state]
  );

  const getNotes = useCallback(
    (id: string) => state.steps[id]?.notes ?? '',
    [state]
  );

  const getCompletedCount = useCallback(
    (ids: string[]) => ids.filter(id => state.steps[id]?.completed).length,
    [state]
  );

  const resetProgress = useCallback(() => {
    setState(defaultState);
  }, []);

  return { toggleStep, setNotes, isCompleted, getNotes, getCompletedCount, resetProgress };
}

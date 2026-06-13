import { createContext, useContext, ReactNode } from 'react';
import { GameState, Character, CharacterType, Rank } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface GameContextType {
  state: GameState;
  addCharacter: (name: string, type: CharacterType) => void;
  deleteCharacter: (id: string) => void;
  setActiveCharacter: (id: string) => void;
  updateCharacter: (id: string, updates: Partial<Character>) => void;
  toggleTask: (characterId: string, section: string, taskId: string, week?: number) => void;
  updateLevel: (characterId: string, level: number) => void;
  updateRank: (characterId: string, rank: Rank) => void;
  updateWeek: (characterId: string, week: number) => void;
  getActiveCharacter: () => Character | null;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useLocalStorage<GameState>('challenger-world-state', {
    characters: [],
    activeCharacterId: null
  });

  const addCharacter = (name: string, type: CharacterType) => {
    const newCharacter: Character = {
      id: Date.now().toString(),
      name,
      type,
      level: 200,
      rank: 'bronze',
      currentWeek: 1,
      createdAt: new Date().toISOString(),
      progress: {
        prePatch: {},
        day0: {},
        daily: {},
        weeklyTasks: {},
        weeks: {},
        bosses: [],
        itemBurning: { stage: 1, stars: 15, crests: 0 },
        hexa: { totalFrags: 0, allocations: {} },
        mesos: { current: 0, history: [] },
        gear: {},
        arcaneSeal: { count: 0, tier: 'Normal', wands: 0, lastWandPurchase: '' },
        events: {
          partner: '',
          expDuo: false,
          genesisPass: false,
          challengerPass: false
        }
      }
    };

    setState(prev => ({
      ...prev,
      characters: [...prev.characters, newCharacter],
      activeCharacterId: prev.activeCharacterId || newCharacter.id
    }));
  };

  const deleteCharacter = (id: string) => {
    setState(prev => ({
      ...prev,
      characters: prev.characters.filter(c => c.id !== id),
      activeCharacterId: prev.activeCharacterId === id
        ? (prev.characters.find(c => c.id !== id)?.id || null)
        : prev.activeCharacterId
    }));
  };

  const setActiveCharacter = (id: string) => {
    setState(prev => ({ ...prev, activeCharacterId: id }));
  };

  const updateCharacter = (id: string, updates: Partial<Character>) => {
    setState(prev => ({
      ...prev,
      characters: prev.characters.map(c =>
        c.id === id ? { ...c, ...updates } : c
      )
    }));
  };

  const toggleTask = (characterId: string, section: string, taskId: string, week?: number) => {
    setState(prev => ({
      ...prev,
      characters: prev.characters.map(c => {
        if (c.id !== characterId) return c;

        const updated = { ...c, progress: { ...c.progress } };

        if (section === 'prePatch') {
          updated.progress.prePatch = {
            ...updated.progress.prePatch,
            [taskId]: !updated.progress.prePatch[taskId]
          };
        } else if (section === 'day0') {
          updated.progress.day0 = {
            ...updated.progress.day0,
            [taskId]: !updated.progress.day0[taskId]
          };
        } else if (section === 'daily') {
          updated.progress.daily = {
            ...updated.progress.daily,
            [taskId]: !updated.progress.daily[taskId]
          };
        } else if (section === 'weeklyTasks') {
          updated.progress.weeklyTasks = {
            ...updated.progress.weeklyTasks,
            [taskId]: !updated.progress.weeklyTasks[taskId]
          };
        } else if (section === 'weeks' && week !== undefined) {
          if (!updated.progress.weeks[week]) {
            updated.progress.weeks[week] = {};
          }
          updated.progress.weeks[week] = {
            ...updated.progress.weeks[week],
            [taskId]: !updated.progress.weeks[week][taskId]
          };
        }

        return updated;
      })
    }));
  };

  const updateLevel = (characterId: string, level: number) => {
    updateCharacter(characterId, { level });
  };

  const updateRank = (characterId: string, rank: Rank) => {
    updateCharacter(characterId, { rank });
  };

  const updateWeek = (characterId: string, week: number) => {
    updateCharacter(characterId, { currentWeek: week });
  };

  const getActiveCharacter = (): Character | null => {
    return state.characters.find(c => c.id === state.activeCharacterId) || null;
  };

  return (
    <GameContext.Provider value={{
      state,
      addCharacter,
      deleteCharacter,
      setActiveCharacter,
      updateCharacter,
      toggleTask,
      updateLevel,
      updateRank,
      updateWeek,
      getActiveCharacter
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}

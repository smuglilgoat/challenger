import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { CharacterType } from '../types';

export default function CharacterManager() {
  const { state, addCharacter, deleteCharacter, setActiveCharacter } = useGame();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState<CharacterType>('main');

  const handleAdd = () => {
    if (newName.trim()) {
      addCharacter(newName.trim(), newType);
      setNewName('');
      setNewType('main');
      setShowAddForm(false);
    }
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Delete character "${name}"? This cannot be undone.`)) {
      deleteCharacter(id);
    }
  };

  return (
    <div className="bg-maple-charcoal/80 backdrop-blur-sm border-b border-gray-700/60 px-6 py-2.5">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Character</span>
          <select
            value={state.activeCharacterId || ''}
            onChange={(e) => setActiveCharacter(e.target.value)}
            className="bg-maple-navy border border-gray-600/60 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-maple-orange/60 transition-colors"
          >
            {state.characters.length === 0 && (
              <option value="">No characters</option>
            )}
            {state.characters.map(char => (
              <option key={char.id} value={char.id}>
                {char.name} ({char.type})
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-3 py-1.5 bg-maple-orange/90 hover:bg-maple-orange text-white rounded-lg transition-colors text-xs font-semibold"
        >
          {showAddForm ? 'Cancel' : '+ Add'}
        </button>

        {state.characters.length > 0 && state.activeCharacterId && (
          <button
            onClick={() => {
              const char = state.characters.find(c => c.id === state.activeCharacterId);
              if (char) handleDelete(char.id, char.name);
            }}
            className="px-3 py-1.5 bg-red-600/20 text-red-400 border border-red-600/30 rounded-lg hover:bg-red-600/30 transition-colors text-xs font-medium"
          >
            Delete
          </button>
        )}
      </div>

      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 flex items-center gap-3">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                placeholder="Character name"
                className="flex-1 bg-maple-navy border border-gray-600/60 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-maple-orange/60 transition-colors"
                autoFocus
              />
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value as CharacterType)}
                className="bg-maple-navy border border-gray-600/60 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-maple-orange/60 transition-colors"
              >
                <option value="main">Main</option>
                <option value="mule">Mule</option>
                <option value="kinesis">Kinesis</option>
              </select>
              <button
                onClick={handleAdd}
                className="px-4 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors text-sm font-semibold"
              >
                Add
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

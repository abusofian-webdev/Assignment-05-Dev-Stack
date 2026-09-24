import React from 'react';
import { X, Trash2 } from 'lucide-react';
import type { TechItem } from '../types';

interface SidebarProps {
  selectedTechs: TechItem[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedTechs, onRemove, onClearAll }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
      <h3 className="font-bold text-slate-900 text-base">Your Stack</h3>
      <p className="text-xs text-slate-400 mb-4">
        {selectedTechs.length} Technology Selected
      </p>

      {selectedTechs.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-slate-200 rounded-lg">
          <p className="text-xs text-slate-400">No technology added yet.</p>
        </div>
      ) : (
        <div className="space-y-2 mb-6">
          {selectedTechs.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-100"
            >
              <div className="flex items-center gap-2">
                <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                <span className="text-xs font-semibold text-slate-800">{tech.name}</span>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedTechs.length > 0 && (
        <button
          onClick={onClearAll}
          className="w-full border border-pink-200 text-pink-500 hover:bg-pink-50 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1">
          <Trash2 className="w-3.5 h-3.5" />
          Remove All
        </button>
      )}
    </div>
  );
};
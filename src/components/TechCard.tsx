import React from 'react';
import { Star } from 'lucide-react';
import type { TechItem } from '../types';

interface TechCardProps {
  tech: TechItem;
  isSelected: boolean;
  onToggle: (tech: TechItem) => void;
}

export const TechCard: React.FC<TechCardProps> = ({ tech, isSelected, onToggle }) => {
  return (
    
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
            <h3 className="font-bold text-slate-900">{tech.name}</h3>
          </div>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tech.badgeColor}`}>
            {tech.badge}
          </span>
        </div>

        <p className="text-slate-500 text-xs leading-relaxed mb-4">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4 border-t border-slate-100 pt-3">
          <span>{tech.category}</span>
          <span>{tech.difficulty}</span>
          <div className="flex items-center gap-1 text-amber-500 font-medium">
            <Star className="w-3 h-3 fill-amber-400" />
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
          onClick={() => onToggle(tech)}
          className={`w-full py-2 px-4 rounded-lg text-xs font-semibold transition-colors ${
            isSelected
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          {isSelected ? 'Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};
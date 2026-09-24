import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechCard } from './components/TechCard';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { techData } from './techData';
import type { TechItem } from './types';

export default function App() {
  const [selectedTechs, setSelectedTechs] = useState<TechItem[]>([]);

  const toggleStack = (tech: TechItem) => {
    if (selectedTechs.some((t) => t.id === tech.id)) {
      setSelectedTechs(selectedTechs.filter((t) => t.id !== tech.id));
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const removeTech = (id: string) => {
    setSelectedTechs(selectedTechs.filter((t) => t.id !== id));
  };

  const clearAll = () => {
    setSelectedTechs([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techData.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isSelected={selectedTechs.some((t) => t.id === tech.id)}
                onToggle={toggleStack}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <Sidebar
              selectedTechs={selectedTechs}
              onRemove={removeTech}
              onClearAll={clearAll}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { MaterialCard } from '../components/MaterialCard';
import { materials } from '../data/mockData';

const allCategories = ['All', ...Array.from(new Set(materials.map((item) => item.category)))];
const difficultyOptions = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export function MaterialsPage() {
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');

  const filteredMaterials = useMemo(
    () =>
      materials.filter((material) => {
        const categoryMatch = category === 'All' || material.category === category;
        const difficultyMatch = difficulty === 'All' || material.difficulty === difficulty;
        return categoryMatch && difficultyMatch;
      }),
    [category, difficulty]
  );

  return (
    <section className="space-y-8 pb-28">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Materials</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Curated resources for every skill level</h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/75 px-4 py-3 text-slate-200">
            <Filter size={18} />
            <span className="text-sm font-semibold">Filter collection</span>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-4">
            <label className="text-sm font-medium text-slate-300">Category</label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none"
            >
              {allCategories.map((value) => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-4">
            <label className="text-sm font-medium text-slate-300">Difficulty</label>
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none"
            >
              {difficultyOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-4">
            <p className="text-sm font-medium text-slate-300">Skill level</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`rounded-3xl px-4 py-3 text-sm font-semibold transition ${difficulty === level ? 'bg-sky-500 text-white' : 'bg-white/5 text-slate-200 hover:bg-white/10'}`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredMaterials.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </motion.div>

      {filteredMaterials.length === 0 && (
        <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-8 text-center text-slate-400">
          <p>No matching learning materials found. Try a different filter or explore our categories.</p>
        </div>
      )}
    </section>
  );
}

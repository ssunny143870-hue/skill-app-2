import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Layers, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { LearningMaterial } from '../types';

const difficultyStyles = {
  Beginner: 'bg-emerald-500/20 text-emerald-200',
  Intermediate: 'bg-amber-500/20 text-amber-200',
  Advanced: 'bg-rose-500/20 text-rose-200'
};

export function MaterialCard({ material }: { material: LearningMaterial }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur-xl dark:bg-slate-900/60"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-glow">
          <Layers size={24} />
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyStyles[material.difficulty]}`}>
          {material.difficulty}
        </span>
      </div>
      <div className="mt-6 space-y-3">
        <div className="h-40 rounded-[24px] bg-slate-800/80 p-4 text-slate-200 shadow-inner">
          <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
            <p className="text-sm text-slate-400">{material.type}</p>
            <p className="text-lg font-semibold leading-7 text-white">{material.title}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{material.duration}</p>
          </div>
        </div>
        <p className="text-sm leading-6 text-slate-300">{material.description}</p>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 text-sm text-slate-400">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-2 text-slate-200">
          <Clock3 size={14} /> {material.duration}
        </span>
        <Link
          to={`/materials/${material.id}`}
          className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
        >
          Open <ArrowRight size={16} />
        </Link>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-500">
        <span className="inline-flex items-center gap-2">
          <Sparkles size={14} /> {material.category}
        </span>
        <span className="inline-flex items-center gap-2">
          <Star size={14} /> {material.progress}% progress
        </span>
      </div>
    </motion.article>
  );
}

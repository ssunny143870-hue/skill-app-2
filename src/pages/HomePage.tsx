import { motion } from 'framer-motion';
import { ArrowRight, Search, Sparkles, Trophy, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories, materials, trendingSkills } from '../data/mockData';
import { CategoryChip } from '../components/CategoryChip';
import { MaterialCard } from '../components/MaterialCard';

export function HomePage() {
  return (
    <section className="space-y-8 pb-28">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
        <div className="grid gap-6 lg:grid-cols-[1.8fr,1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Welcome back, engineer</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Learn fast, build strong, and get career-ready.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Access curated PDFs, videos, coding resources, interview prep, and skill roadmaps designed for engineering students.
            </p>
          </div>
          <div className="rounded-[28px] bg-slate-950/80 p-6 shadow-inner shadow-slate-950/20">
            <div className="flex items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-sky-600/20 to-indigo-600/15 p-4 text-slate-100">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-200/70">Today’s target</p>
                <p className="mt-2 text-2xl font-semibold">4 new skills</p>
              </div>
              <div className="grid h-16 w-16 place-items-center rounded-3xl bg-slate-900 text-sky-300">
                <Sparkles size={24} />
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              <div className="rounded-3xl bg-slate-950/90 p-4">
                <p className="text-sm text-slate-400">Completed today</p>
                <p className="mt-2 text-xl font-semibold text-white">2 modules</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-4">
                <p className="text-sm text-slate-400">Study streak</p>
                <p className="mt-2 text-xl font-semibold text-white">7 days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.7fr,1.3fr]">
          <div className="rounded-[28px] bg-slate-950/80 p-6">
            <label className="relative block">
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="search"
                placeholder="Search materials, roadmaps, and interview prep"
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 py-4 pl-12 pr-4 text-slate-100 outline-none placeholder:text-slate-500"
              />
            </label>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-400">Progress this week</p>
                <p className="mt-2 text-2xl font-semibold text-white">68%</p>
              </div>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-glow">
                <Clock3 size={24} />
              </div>
            </div>
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Skill categories</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Explore by category</h3>
          </div>
          <Link to="/materials" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200">
            Browse all materials <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ y: -3 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-6 text-left shadow-card transition hover:border-sky-400/30"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${category.colorClass} text-white shadow-lg`}>
                <span className="text-xl">{category.icon[0]}</span>
              </div>
              <h4 className="mt-5 text-xl font-semibold text-white">{category.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-400">Curated paths, videos, and interview prep for {category.title.toLowerCase()}.</p>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Trending skills</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">What students are learning now</h3>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {trendingSkills.map((skill) => (
              <CategoryChip key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Recommended</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Suggested for you</h3>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {materials.slice(0, 2).map((material) => (
              <div key={material.id} className="rounded-[28px] border border-white/10 bg-slate-950/80 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">{material.category}</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">{material.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{material.description}</p>
                  </div>
                  <div className="inline-flex rounded-3xl bg-slate-800/90 px-4 py-2 text-sm text-slate-300">
                    {material.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Recently viewed</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Keep learning where you left off</h3>
          </div>
          <Link to="/materials" className="text-sm font-semibold text-sky-300 hover:text-sky-200">
            View all materials
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {materials.slice(0, 2).map((material) => (
            <div key={material.id} className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">{material.category}</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">{material.title}</h4>
                </div>
                <div className="rounded-3xl bg-slate-800/90 px-3 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">{material.difficulty}</div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 text-sm text-slate-400">
                <span>{material.duration}</span>
                <span>{material.progress}% completed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

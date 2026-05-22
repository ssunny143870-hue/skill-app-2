import { motion } from 'framer-motion';
import { MapPin, Rocket, Sparkles } from 'lucide-react';
import { roadmapSteps } from '../data/mockData';

export function RoadmapPage() {
  return (
    <section className="space-y-8 pb-28">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Skill Roadmap</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Your frontend developer pathway</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Follow a clear sequence of skills from HTML to projects. Track progress and stay motivated with milestone indicators.</p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-3xl bg-slate-950/80 px-4 py-3 text-slate-200">
            <MapPin size={18} className="text-sky-300" />
            Current track: Frontend Developer
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr,0.8fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
          <div className="space-y-6">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-5 rounded-[28px] border border-white/10 bg-slate-950/80 p-6"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-3xl ${step.completed ? 'bg-sky-500 text-white' : 'bg-slate-900 text-slate-400'}`}>
                    {index + 1}
                  </div>
                  {index < roadmapSteps.length - 1 && <div className="h-10 w-px bg-white/10" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] ${step.completed ? 'bg-emerald-500/15 text-emerald-200' : 'bg-slate-700 text-slate-400'}`}>
                      {step.completed ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{step.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Progress tracker</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Roadmap completion</h3>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Roadmap progress</span>
                  <span>60%</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-900">
                  <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-200">
                  <p className="text-sm text-slate-400">Skills completed</p>
                  <p className="mt-2 text-3xl font-semibold text-white">3/5</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-200">
                  <p className="text-sm text-slate-400">Projects remaining</p>
                  <p className="mt-2 text-3xl font-semibold text-white">2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-card backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/20 text-sky-300">
                <Rocket size={20} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Milestone unlocked</p>
                <p className="mt-2 text-lg font-semibold text-white">UI fundamentals completed</p>
              </div>
            </div>
            <div className="mt-6 rounded-[24px] bg-slate-900 p-5 text-slate-300">
              <p className="text-sm leading-6">Complete the React module next to turn this roadmap into a fully interactive project portfolio.</p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-card backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Roadmap insight</p>
              <Sparkles size={18} className="text-sky-300" />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">A clear roadmap helps you progress from fundamentals to career-ready React projects with measurable milestones.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

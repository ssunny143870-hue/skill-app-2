import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, Download, Heart, CheckCircle, FileText, Video } from 'lucide-react';
import { materials, roadmapSteps } from '../data/mockData';

export function MaterialDetailsPage() {
  const { id } = useParams();
  const material = useMemo(() => materials.find((item) => item.id === id), [id]);

  if (!material) {
    return (
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
        <p className="text-lg text-slate-300">Material not found.</p>
      </div>
    );
  }

  const objectives = [
    'Understand core concepts and workflows',
    'Learn practical examples and real-world projects',
    'Build a strong portfolio-ready skill set',
    'Prepare for interviews and coding challenges'
  ];

  return (
    <section className="space-y-8 pb-28">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">{material.category}</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">{material.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{material.description}</p>
          </div>
          <div className="inline-flex flex-wrap items-center gap-3 rounded-3xl bg-slate-950/80 p-4 text-slate-200">
            <span className="rounded-2xl bg-sky-500/15 px-3 py-2 text-xs uppercase tracking-[0.3em] text-sky-200">{material.type}</span>
            <span className="rounded-2xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">{material.difficulty}</span>
            <span className="rounded-2xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">{material.duration}</span>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr,0.9fr]">
          <div className="space-y-8">
            <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-inner">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Overview</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Learning objectives</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-3xl bg-slate-900/90 px-4 py-3 text-slate-200">
                  <CheckCircle size={18} /> Key outcomes
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-slate-300">
                {objectives.map((objective) => (
                  <li key={objective} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-inner">
              <div className="flex items-center gap-3 text-slate-200">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/20 text-sky-300">
                  {material.type === 'Video' ? <Video size={20} /> : <FileText size={20} />}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Content preview</p>
                  <p className="mt-1 text-lg font-semibold text-white">Embedded {material.type.toLowerCase()} viewer</p>
                </div>
              </div>
              <div className="mt-6 aspect-[16/9] overflow-hidden rounded-[24px] bg-slate-900/90 p-6">
                <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[24px] border border-dashed border-white/10 bg-gradient-to-br from-slate-950/40 to-slate-900/80 text-center text-slate-400">
                  <p className="text-lg font-semibold text-white">{material.type} player/preview</p>
                  <p className="max-w-md text-sm leading-6">This area becomes an embedded video, PDF, or interactive content viewer when connected to your learning API.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-inner">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-400">Track status</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{material.progress}% complete</p>
                </div>
                <span className="inline-flex rounded-3xl bg-slate-900/90 px-3 py-2 text-sm uppercase tracking-[0.3em] text-slate-300">
                  In progress
                </span>
              </div>
              <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-900">
                <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-inner">
              <div className="flex flex-col gap-4">
                <button className="inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                  <Download size={18} /> Download material
                </button>
                <button className="inline-flex w-full items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                  <Heart size={18} /> Save for later
                </button>
                <button className="inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-emerald-500/20 px-4 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/30">
                  <CheckCircle size={18} /> Mark as completed
                </button>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-inner">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-300/80">Suggested path</p>
              <div className="mt-5 space-y-4">
                {roadmapSteps.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-3xl bg-slate-900/80 text-slate-300">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">{step.title}</p>
                      <p className="text-sm text-slate-400">{step.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

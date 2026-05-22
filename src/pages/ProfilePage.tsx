import { Briefcase, Bookmark, CheckCircle2, Settings, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const skills = ['React', 'Python', 'AWS', 'Data Science', 'Communication'];
const savedMaterials = ['React.js Career Launchpad', 'Problem Solving for Placements', 'Cloud Fundamentals with AWS'];
const completedHistory = ['HTML & CSS Foundations', 'JavaScript Essentials', 'Frontend Interview Roadmap'];

export function ProfilePage() {
  return (
    <section className="space-y-8 pb-28">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
        <div className="grid gap-6 lg:grid-cols-[0.9fr,0.7fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Student profile</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Hi, Aditi</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Personalize your learning plan, review saved materials, and see completed courses in one dashboard.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 text-slate-200">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Current track</p>
            <p className="mt-3 text-2xl font-semibold text-white">Frontend Excellence</p>
            <p className="mt-3 text-sm text-slate-400">5 skills selected • 18 materials saved</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr,0.7fr]">
        <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-card">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-500/20 text-sky-300">
              <Users size={36} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Student ID</p>
              <p className="mt-2 text-2xl font-semibold text-white">ENG-0247</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/90 p-5">
              <p className="text-sm text-slate-400">Joined</p>
              <p className="mt-3 text-xl font-semibold text-white">April 2025</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5">
              <p className="text-sm text-slate-400">University</p>
              <p className="mt-3 text-xl font-semibold text-white">Tech Valley Institute</p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-card">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Top skills</p>
          <div className="mt-6 grid gap-3">
            {skills.map((skill) => (
              <div key={skill} className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4 text-slate-200">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr,0.7fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Saved materials</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Continue learning soon</h3>
            </div>
            <Link to="/materials" className="text-sm font-semibold text-sky-300 hover:text-sky-200">
              Browse more
            </Link>
          </div>
          <div className="mt-6 space-y-4">
            {savedMaterials.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-slate-200">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-white">{item}</p>
                    <p className="text-sm text-slate-400">Saved for later</p>
                  </div>
                  <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">In progress</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-card">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900/90 text-sky-300">
              <Bookmark size={20} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Learning history</p>
              <p className="mt-2 text-xl font-semibold text-white">Recent completions</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {completedHistory.map((item) => (
              <div key={item} className="rounded-3xl bg-slate-900/80 px-4 py-4 text-slate-200">
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Account settings</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Personal preferences</h3>
          </div>
          <Settings size={24} className="text-sky-300" />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { icon: <Sparkles size={18} />, label: 'Daily reminders', value: 'Enabled' },
            { icon: <Briefcase size={18} />, label: 'Job alerts', value: 'Active' },
            { icon: <CheckCircle2 size={18} />, label: 'Goal tracker', value: 'On' }
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-200">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-950/90 text-sky-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-1 font-semibold text-white">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

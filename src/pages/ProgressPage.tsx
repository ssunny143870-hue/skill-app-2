import { Activity, Award, Book, Sparkles } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', value: 60 },
  { day: 'Tue', value: 80 },
  { day: 'Wed', value: 50 },
  { day: 'Thu', value: 70 },
  { day: 'Fri', value: 90 },
  { day: 'Sat', value: 40 },
  { day: 'Sun', value: 55 }
];

export function ProgressPage() {
  return (
    <section className="space-y-8 pb-28">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Progress dashboard</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Track your learning journey</h2>
          </div>
          <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
            Updated 2 hours ago
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm text-slate-400">Learning progress</p>
            <p className="mt-4 text-4xl font-semibold text-white">72%</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-900">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm text-slate-400">Completed materials</p>
            <p className="mt-4 text-4xl font-semibold text-white">18</p>
            <p className="mt-3 text-sm text-slate-400">Courses, notes, and videos completed.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm text-slate-400">Skills unlocked</p>
            <p className="mt-4 text-4xl font-semibold text-white">7</p>
            <p className="mt-3 text-sm text-slate-400">Milestones achieved this month.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Weekly learning</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Study hours and momentum</h3>
            </div>
            <div className="inline-flex items-center gap-2 rounded-3xl bg-slate-950/80 px-4 py-3 text-slate-200">
              <Activity size={18} className="text-sky-300" />
              7 days
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            <div className="space-y-4">
              {weeklyData.map((item) => (
                <div key={item.day} className="flex items-center gap-4">
                  <span className="w-12 text-sm text-slate-400">{item.day}</span>
                  <div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-900">
                    <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" style={{ width: `${item.value}%` }} />
                  </div>
                  <span className="w-10 text-right text-sm text-slate-300">{item.value}%</span>
                </div>
              ))}
            </div>
            <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Top achievement</p>
              <p className="mt-4 text-xl font-semibold text-white">Steady growth in learning streaks</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">Keep the momentum by reviewing your most recent courses and planning a short new objective for tomorrow.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-card backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/20 text-sky-300">
                <Award size={20} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Achievements</p>
                <h3 className="mt-2 text-xl font-semibold text-white">You earned 3 badges</h3>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {['Quick Learner', 'Coding Confident', 'Interview Ready'].map((badge) => (
                <div key={badge} className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4 text-slate-200">
                  <p className="font-semibold text-white">{badge}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-card backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-sky-300" />
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Goal</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Complete the React roadmap</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">Finish the remaining React and project tasks to unlock your next skill level and interview practice bundle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

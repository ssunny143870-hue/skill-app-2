import { motion } from 'framer-motion';

export function SplashScreen() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="grid min-h-[calc(100vh-96px)] place-items-center"
    >
      <div className="w-full max-w-2xl rounded-[36px] border border-white/10 bg-blue-500/10 p-10 text-center shadow-glow backdrop-blur-2xl">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-sky-300 shadow-inner">
          <span className="text-4xl font-black tracking-[0.25em]">E</span>
        </div>
        <p className="text-sm uppercase tracking-[0.35em] text-sky-200/80">Skill Boost App</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Upgrade Your Engineering Skills & Build Your Career</h2>
        <p className="mt-4 max-w-xl mx-auto text-base leading-7 text-slate-200/80">
          Discover curated learning paths, interviews resources, progress tracking and career-ready materials built for engineering students.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-3 w-3 rounded-full bg-sky-400 animate-pulse" />
          <span className="h-3 w-3 rounded-full bg-slate-500/60" />
          <span className="h-3 w-3 rounded-full bg-slate-500/60" />
        </div>
      </div>
    </motion.section>
  );
}

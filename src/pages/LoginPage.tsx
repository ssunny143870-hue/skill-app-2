import { motion } from 'framer-motion';
import { Lock, Mail, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="mx-auto flex min-h-[calc(100vh-96px)] max-w-xl flex-col justify-center gap-8 pb-10"
    >
      <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Welcome back</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Login to continue</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">Sign in to access your personalized learning dashboard, materials, and progress stats.</p>

        <div className="mt-8 space-y-4">
          <label className="block text-sm font-medium text-slate-200">
            Email address
            <div className="mt-2 flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 focus-within:border-sky-400/40">
              <Mail size={18} className="text-sky-300" />
              <input
                type="email"
                placeholder="you@university.edu"
                className="w-full bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
              />
            </div>
          </label>
          <label className="block text-sm font-medium text-slate-200">
            Password
            <div className="mt-2 flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 focus-within:border-sky-400/40">
              <Lock size={18} className="text-sky-300" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
              />
            </div>
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-950 text-sky-400" />
            Remember me
          </label>
          <Link to="/forgot" className="font-semibold text-sky-300 hover:text-sky-200">
            Forgot password?
          </Link>
        </div>

        <button className="mt-8 w-full rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110">
          Login
        </button>

        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-500">
          <span className="h-px flex-1 bg-white/10" />
          <span>Or continue with</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <button className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-900/80">
          <Globe2 size={18} className="text-sky-300" />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-400">
          New student?{' '}
          <Link to="/signup" className="font-semibold text-sky-300 hover:text-sky-200">
            Create account
          </Link>
        </p>
      </div>
    </motion.main>
  );
}

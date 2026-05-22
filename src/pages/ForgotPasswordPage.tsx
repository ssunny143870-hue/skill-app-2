import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ForgotPasswordPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto flex min-h-[calc(100vh-96px)] max-w-lg flex-col justify-center gap-8 pb-10"
    >
      <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl dark:bg-slate-900/70">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Need help?</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Reset your password</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">Enter your university email and we’ll send a secure link to update your password.</p>

        <label className="block text-sm font-medium text-slate-200">
          Email address
          <div className="mt-2 flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 focus-within:border-sky-400/40">
            <Mail size={18} className="text-sky-300" />
            <input type="email" placeholder="you@university.edu" className="w-full bg-transparent text-slate-100 outline-none placeholder:text-slate-500" />
          </div>
        </label>

        <button className="mt-8 w-full rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110">
          Send reset link
        </button>

        <p className="mt-6 text-center text-sm text-slate-400">
          Remembered your password?{' '}
          <Link to="/login" className="font-semibold text-sky-300 hover:text-sky-200">
            Back to login
          </Link>
        </p>
      </div>
    </motion.main>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { MaterialDetailsPage } from './pages/MaterialDetailsPage';
import { MaterialsPage } from './pages/MaterialsPage';
import { ProfilePage } from './pages/ProfilePage';
import { ProgressPage } from './pages/ProgressPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { SignupPage } from './pages/SignupPage';
import { SplashScreen } from './pages/SplashScreen';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { BottomNav } from './components/BottomNav';
import { Moon, SunMedium } from 'lucide-react';

const tabRoutes = [
  { path: '/', label: 'Home' },
  { path: '/roadmap', label: 'Skills' },
  { path: '/materials', label: 'Materials' },
  { path: '/progress', label: 'Progress' },
  { path: '/profile', label: 'Profile' }
];

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    setTheme(preferred);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  const isAuthRoute = useMemo(
    () => ['/login', '/signup', '/forgot'].includes(location.pathname),
    [location.pathname]
  );

  const showBottomNav = !isAuthRoute && !showSplash;

  return (
    <div className="min-h-screen px-4 pb-20 text-slate-100 sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 py-6">
        <div className="flex items-center justify-between gap-4 rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur-xl transition-all duration-500 dark:bg-slate-900/50">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Engineer Skill Boost</p>
            <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Student Skill Improvement App</h1>
          </div>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 shadow-glow transition hover:border-sky-400/40 hover:bg-slate-900/90 dark:bg-slate-200/10 dark:text-slate-100"
          >
            {theme === 'light' ? <Moon size={18} /> : <SunMedium size={18} />}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen key="splash" />
          ) : (
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex-1"
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot" element={<ForgotPasswordPage />} />
                <Route path="/materials" element={<MaterialsPage />} />
                <Route path="/materials/:id" element={<MaterialDetailsPage />} />
                <Route path="/roadmap" element={<RoadmapPage />} />
                <Route path="/progress" element={<ProgressPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showBottomNav && <BottomNav routes={tabRoutes} />}
    </div>
  );
}

export default App;

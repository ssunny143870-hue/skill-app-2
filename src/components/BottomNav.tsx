import { Activity, FileText, Home, Layers, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
  Home,
  Skills: Layers,
  Materials: FileText,
  Progress: Activity,
  Profile: User
};

type BottomNavProps = {
  routes: { path: string; label: string }[];
};

export function BottomNav({ routes }: BottomNavProps) {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[min(100%,640px)] -translate-x-1/2 rounded-[32px] border border-white/10 bg-slate-950/90 px-4 py-3 shadow-card backdrop-blur-xl dark:bg-slate-900/80">
      <ul className="flex items-center justify-between gap-2">
        {routes.map((item) => {
          const Icon = icons[item.label] || Home;
          return (
            <li key={item.path} className="flex-1">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `group flex flex-col items-center justify-center rounded-3xl px-3 py-2 text-[11px] font-semibold transition ${
                    isActive ? 'bg-sky-500/15 text-sky-300' : 'text-slate-400 hover:text-slate-100'
                  }`
                }
              >
                <Icon size={20} />
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

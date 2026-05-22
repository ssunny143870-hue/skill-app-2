export function CategoryChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-300/30 hover:bg-sky-500/10 hover:text-white">
      {label}
    </span>
  );
}

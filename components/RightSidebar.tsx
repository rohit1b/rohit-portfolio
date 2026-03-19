"use client";

import { Download } from "lucide-react";

export default function RightSidebar() {
  return (
    <aside className="w-72 hidden xl:flex flex-col gap-6">
      <div className="glass-panel bg-glass-bg dark:bg-glass-bg-dark rounded-3xl p-6">
        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
          Current Focus
        </h4>
        <div className="space-y-4">
          <div className="p-4 bg-white/30 dark:bg-black/20 rounded-2xl border border-white/20">
            <p className="text-xs text-slate-500 font-bold mb-1">LEARNING</p>
            <p className="text-sm font-medium">Agentic Workflows</p>
          </div>
          <div className="p-4 bg-white/30 dark:bg-black/20 rounded-2xl border border-white/20">
            <p className="text-xs text-slate-500 font-bold mb-1">WORKING ON</p>
            <p className="text-sm font-medium">Real-time Dashboard Features</p>
          </div>
        </div>
      </div>

      <div className="glass-panel bg-primary/10 dark:bg-primary/5 rounded-3xl p-6 flex-grow flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary dark:text-blue-400 mb-6">
            Recent Notes
          </h4>
          <p className="text-sm italic text-slate-600 dark:text-slate-400 leading-relaxed">
            &quot;Design is not just what it looks like and feels like. Design
            is how it works.&quot;
          </p>
        </div>
        <button className="w-full py-4 bg-white/80 dark:bg-white/10 rounded-2xl text-sm font-bold transition-all hover:bg-white dark:hover:bg-white/20 border border-white/40 flex items-center justify-center gap-2 text-slate-900 dark:text-white">
          <Download className="w-4 h-4" />
          Download Portfolio
        </button>
      </div>
    </aside>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full relative z-10 py-8 px-8 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/10 dark:bg-black/10 backdrop-blur-md">
      <div className="max-w-[90rem] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center shadow-md">
            <span className="text-white dark:text-slate-900 font-bold text-xs uppercase tracking-wider">
              RS
            </span>
          </div>
          <span className="font-bold text-slate-900 dark:text-white tracking-tight">
            Rohit Singh
          </span>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">
            —
          </span>
          <span className="text-slate-500 dark:text-slate-400 text-sm font-medium tracking-wide">
            Frontend Engineer
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
          <span>© {new Date().getFullYear()} All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with
            <span className="font-bold text-slate-800 dark:text-slate-200">
              Next.js
            </span>
            &amp;
            <span className="font-bold text-slate-800 dark:text-slate-200">
              Framer Motion
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display antialiased text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      <main className="pt-32 md:pt-40 pb-24 md:pb-32 max-w-[90rem] mx-auto px-5 sm:px-8 w-full">
        <header className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            All <span className="italic font-bold">Projects</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-500 font-medium">
            A comprehensive archive of selected works, experiments, and case
            studies.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.id}
              className="group border border-surface-border dark:border-dark-surface-border p-6 sm:p-8 bg-white dark:bg-dark-surface rounded-xl hover:border-primary/50 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </div>

              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 bg-neutral-100 dark:bg-neutral-900 border border-surface-border dark:border-dark-surface-border rounded-xl flex items-center justify-center mb-6 sm:mb-8 text-neutral-600 dark:text-neutral-400 group-hover:text-primary transition-colors duration-300`}
              >
                {project.icon}
              </div>

              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3 sm:mb-4`}
                >
                  {project.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm mb-6 sm:mb-8 flex-grow">
                {project.description.substring(0, 120)}...
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 border border-surface-border dark:border-dark-surface-border rounded text-[10px] font-bold uppercase tracking-widest text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2.5 py-1 border border-surface-border dark:border-dark-surface-border rounded text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

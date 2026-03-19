import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Code, Share, Star } from "lucide-react";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-slate-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-24 md:pb-32">
        {/* Hero Section */}
        <section className="mb-12 md:mb-20">
          <div className="border border-surface-border dark:border-dark-surface-border p-2 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-dark-surface overflow-hidden">
            <div
              className={`relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-gradient-to-br ${project.bgGradient}`}
            >
              {project.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
              )}
              {/* Stronger gradient for text readability - using actual black over just slate to guarantee contrast on bright images */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-neutral-900/80 to-black/20"></div>
              <div className="absolute inset-0 mix-blend-multiply bg-black/40"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-end justify-between gap-4 sm:gap-6">
                <div>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                      {project.badge}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/10 text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                      Web App
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/10 text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                      2025
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-lg text-slate-300 max-w-xl mb-4 sm:mb-6">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded text-white text-sm font-bold uppercase tracking-wider border border-white/20 hover:bg-white hover:text-black transition-all"
                      >
                        <Code className="w-4 h-4" /> Live Site
                      </a>
                    )}
                    <button className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded bg-primary text-white text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                      <Share className="w-4 h-4" /> Share
                    </button>
                  </div>
                </div>

                <div className="hidden lg:block text-right shrink-0 min-w-[200px]">
                  <p className="text-xs uppercase text-slate-400 font-bold tracking-widest mb-1">
                    Role
                  </p>
                  <p className="text-white font-medium mb-4">
                    {project.role || "Frontend Engineer"}
                  </p>

                  <p className="text-xs uppercase text-slate-400 font-bold tracking-widest mb-1">
                    Timeline
                  </p>
                  <p className="text-white font-medium">Ongoing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Sidebar Data — shows above content on mobile */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 self-start space-y-6 sm:space-y-8">
            <div className="border border-surface-border dark:border-dark-surface-border p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-surface">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-surface-muted dark:bg-dark-surface-muted border border-surface-border dark:border-dark-surface-border uppercase tracking-widest rounded text-[10px] font-bold text-slate-600 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-surface-border dark:border-dark-surface-border p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-surface">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                Team
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                    DK
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    Rohit Singh
                  </span>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Sections */}
          <div className="lg:col-span-9 space-y-14 md:space-y-20">
            <section id="overview">
              <span className="text-primary font-serif italic text-xl">01</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-5 sm:mb-6 mt-2 tracking-tight">
                The Objective
              </h3>
              <div className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
                <p>{project.longDescription || project.description}</p>
              </div>
            </section>

            <section id="architecture">
              <span className="text-primary font-serif italic text-xl">02</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-5 sm:mb-6 mt-2 tracking-tight">
                Architecture & Features
              </h3>

              {project.features && (
                <div className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
                  <ul className="list-disc pl-6 space-y-2">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="backdrop-blur-md bg-black/80 border border-white/10 text-slate-300 rounded-xl overflow-hidden shadow-2xl my-6 sm:my-8">
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    config.ts
                  </span>
                </div>
                <div className="p-4 sm:p-6 overflow-x-auto">
                  <pre className="font-mono text-xs sm:text-sm leading-6">
                    <span className="text-purple-400">export const</span>{" "}
                    <span className="text-yellow-200">SystemConfig</span> ={" "}
                    {"{\n"}
                    {"  "}features: [
                    <span className="text-green-300">
                      "Real-time Analytics"
                    </span>
                    , <span className="text-green-300">"AI Generation"</span>],
                    {"\n"}
                    {"  "}latency:{" "}
                    <span className="text-orange-300">"&lt; 100ms"</span>,{"\n"}
                    {"  "}status:{" "}
                    <span className="text-green-300">"Operational"</span>
                    {"\n"}
                    {"}"};
                  </pre>
                </div>
              </div>
            </section>

            {project.imageUrl && (
              <section id="ui-gallery">
                <span className="text-primary font-serif italic text-xl">
                  03
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-5 sm:mb-6 mt-2 tracking-tight">
                  Interface Gallery
                </h3>
                <div className="grid grid-cols-1 gap-6 mt-8">
                  <div className="border border-surface-border dark:border-dark-surface-border p-2 sm:p-3 rounded-2xl bg-surface-muted dark:bg-dark-surface-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.imageUrl}
                      alt="Project Interface"
                      className="w-full rounded-xl shadow-sm border border-surface-border dark:border-dark-surface-border"
                    />
                    <p className="text-center text-xs uppercase tracking-widest font-bold text-slate-500 mt-4 mb-2">
                      Main Visual Interface
                    </p>
                  </div>
                </div>
              </section>
            )}

            <section id="outcomes">
              <span className="text-primary font-serif italic text-xl">04</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-5 sm:mb-6 mt-2 tracking-tight">
                Key Outcomes
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
                <div className="border border-surface-border dark:border-dark-surface-border p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-surface">
                  <span className="block text-3xl sm:text-4xl text-primary mb-2">
                    <Star className="w-8 h-8" />
                  </span>
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                    99.9%
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Uptime
                  </div>
                </div>
                {project.highlightStat && (
                  <div className="border border-surface-border dark:border-dark-surface-border p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-surface">
                    <span className="block text-3xl sm:text-4xl text-primary mb-2">
                      <Star className="w-8 h-8" />
                    </span>
                    <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                      {project.highlightStat.value}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      {project.highlightStat.label}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Pagination Footer */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-8 sm:pt-12 mt-12 sm:mt-20 flex justify-between items-center gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-2">
                  Previous Project
                </span>
                <Link
                  href="/projects"
                  className="text-base sm:text-lg font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                >
                  Archive
                </Link>
              </div>
              <div className="text-right">
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-2">
                  Next Project
                </span>
                <Link
                  href="/projects"
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-primary transition-colors flex items-center gap-2"
                >
                  View All <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

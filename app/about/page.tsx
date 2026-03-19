"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Mail,
  ExternalLink,
  CodeIcon,
  ServerIcon,
  CloudIcon,
  Globe,
  Shield,
  Activity,
  Smartphone,
  Monitor,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-slate-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 md:pt-48 pb-24 md:pb-32">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 dark:text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Engineering <br /> with{" "}
              <span className="italic font-bold text-primary">Purpose</span>
            </h2>

            <div className="border border-surface-border dark:border-dark-surface-border p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-surface relative overflow-hidden">
              <span className="absolute top-4 right-6 text-7xl sm:text-8xl text-neutral-100 dark:text-white/5 font-serif italic">
                "
              </span>
              <p className="text-base sm:text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-serif relative z-10">
                I engineer agentic interfaces and robust frontend architectures.
                Currently a Frontend Engineer at Witting AI specializing in
                architecting high-performance Agentic AI platforms and scalable
                multi-tenant dashboards with React and Next.js.
              </p>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-surface-border dark:border-dark-surface-border flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Location
                </span>
                <span className="text-sm font-medium ml-2 text-slate-700 dark:text-slate-300">
                  Ghaziabad (U.P.), India
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="border border-surface-border dark:border-dark-surface-border p-6 rounded-2xl bg-surface-muted dark:bg-dark-surface-muted">
                <Monitor className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  UI Engineering
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Building real-time interfaces that stream language models and
                  visualize live data.
                </p>
              </div>
              <div className="border border-surface-border dark:border-dark-surface-border p-6 rounded-2xl bg-surface-muted dark:bg-dark-surface-muted">
                <Activity className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  Performance
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Obsessing over framerate drops, bundle sizes, and absolute
                  perfect easing curves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Journey timeline */}
        <section id="journey" className="mb-16 md:mb-24">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 md:mb-12 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Professional Journey
          </h3>

          <div className="relative space-y-8 md:space-y-12 pl-4 before:absolute before:left-[19px] before:top-4 before:bottom-0 before:w-[2px] before:bg-surface-border dark:before:bg-dark-surface-border">
            {/* Experience 1 */}
            <div className="relative pl-10 sm:pl-12 group">
              <div className="absolute left-[8px] top-4 w-6 h-6 rounded-full border-4 border-white dark:border-black bg-primary shadow-sm z-10 group-hover:scale-110 transition-transform"></div>

              <div className="border border-surface-border dark:border-dark-surface-border p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-surface flex flex-col md:flex-row gap-6 md:gap-8 transition-all duration-300 hover:border-primary/50">
                <div className="md:w-1/4">
                  <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest rounded bg-surface-muted dark:bg-dark-surface-muted border border-surface-border dark:border-dark-surface-border font-bold text-primary mb-3 md:mb-4">
                    Dec 2025 — Present
                  </span>
                  <div className="h-12 w-12 rounded-xl border border-surface-border dark:border-dark-surface-border bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center mb-3 md:mb-4 text-neutral-900 dark:text-white">
                    <strong className="text-xl font-display font-black">
                      R
                    </strong>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Robust Results
                  </h4>
                  <p className="text-sm text-slate-500 font-medium">
                    Software Testing
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Onsite (Noida)</p>
                </div>
                <div className="md:w-3/4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6">
                    Performing manual and functional testing to identify defects
                    and ensure software quality across web applications.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Gaining hands-on experience with software testing
                        methodologies, SDLC, and Agile development practices.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative pl-10 sm:pl-12 group">
              <div className="absolute left-[8px] top-4 w-6 h-6 rounded-full border-4 border-white dark:border-black bg-neutral-300 dark:bg-neutral-700 z-10 group-hover:scale-110 transition-transform"></div>

              <div className="border border-surface-border dark:border-dark-surface-border p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-surface flex flex-col md:flex-row gap-6 md:gap-8 transition-all duration-300 hover:border-primary/50">
                <div className="md:w-1/4">
                  <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest rounded bg-surface-muted dark:bg-dark-surface-muted border border-surface-border dark:border-dark-surface-border font-bold text-neutral-500 mb-3 md:mb-4">
                    Jun 2025 — Aug 2025
                  </span>
                  <div className="h-12 w-12 rounded-xl border border-surface-border dark:border-dark-surface-border bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center mb-3 md:mb-4 text-neutral-400">
                    <strong className="text-xl font-display font-black">
                      P
                    </strong>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Prernagati and Technology
                  </h4>
                  <p className="text-sm text-slate-500 font-medium">
                    Full Stack Developer Intern
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Onsite (Chandigarh)</p>
                </div>
                <div className="md:w-3/4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400 shrink-0"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Gained practical experience in building and maintaining
                        responsive web applications using HTML, CSS, JavaScript,
                        and React, following best frontend development practices.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-neutral-400 shrink-0"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Developed strong skills in debugging, source control
                        using Git/GitHub, and team-based development through
                        Agile development practices.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-16 md:mb-24">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 md:mb-12 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Education
          </h3>

          <div className="border border-surface-border dark:border-dark-surface-border p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-surface hover:border-primary/50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Bachelor of Technology in Computer Science and Engineering
                </h4>
                <p className="text-base text-slate-600 dark:text-slate-400 mt-1">
                  RajKumar Goel Institute Of Technology
                </p>
              </div>
              <div className="text-left md:text-right">
                <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest rounded bg-surface-muted dark:bg-dark-surface-muted border border-surface-border dark:border-dark-surface-border font-bold text-neutral-500 mb-2">
                  Nov 2022 — Jun 2026
                </span>
                <p className="text-sm font-semibold text-primary">7 CGPA</p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-surface-border dark:border-dark-surface-border">
              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                Extra-Curricular
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary shrink-0"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Successfully coordinated the “BroCode” Coding Contest during
                    the college fest, attracting 100+ participants and multiple
                    sponsors.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary shrink-0"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Elected as an Executive Member of CSSS, leading Expert Talk 3.0
                    and engaging 100+ students in competitive coding events.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Arsenal */}
        <section id="arsenal">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 md:mb-12 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Technical Arsenal
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            <div className="border border-surface-border dark:border-dark-surface-border rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 bg-white dark:bg-dark-surface flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-surface-muted dark:bg-dark-surface-muted border border-surface-border dark:border-dark-surface-border text-primary flex items-center justify-center mb-5 sm:mb-6">
                <CodeIcon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white">
                Frontend Ecosystem
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Tailwind CSS",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "C++",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded bg-surface-muted dark:bg-dark-surface-muted text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-surface-border dark:border-dark-surface-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-surface-border dark:border-dark-surface-border rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 bg-white dark:bg-dark-surface flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-surface-muted dark:bg-dark-surface-muted border border-surface-border dark:border-dark-surface-border text-primary flex items-center justify-center mb-5 sm:mb-6">
                <ServerIcon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white">
                Backend & Data
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "SQL",
                  "Socket.IO",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded bg-surface-muted dark:bg-dark-surface-muted text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-surface-border dark:border-dark-surface-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-surface-border dark:border-dark-surface-border rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 bg-white dark:bg-dark-surface flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-surface-muted dark:bg-dark-surface-muted border border-surface-border dark:border-dark-surface-border text-primary flex items-center justify-center mb-5 sm:mb-6">
                <CloudIcon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white">
                Infrastructure
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "GitHub",
                  "VS Code",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded bg-surface-muted dark:bg-dark-surface-muted text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-surface-border dark:border-dark-surface-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

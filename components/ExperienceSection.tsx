"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Workflow,
  Layers,
  Globe,
} from "lucide-react";

const timelineItems = [
  {
    period: "Dec 2025 — Present",
    role: "Software Testing",
    company: "Robust Results (IIT Kanpur)",
    description:
      "Performing manual and functional testing to identify defects and ensure software quality across web applications.",
    current: true,
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Full Stack Developer Intern",
    company: "Prernagati and Technology",
    description:
      "Gained practical experience in building responsive web applications using HTML, CSS, JavaScript, and React, following best frontend practices.",
    current: false,
  },
];

const skillCategories = [
  {
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    title: "Frontend Languages",
    skills: "HTML · CSS · JavaScript · C++",
  },
  {
    icon: <Palette className="w-5 h-5 text-primary" />,
    title: "Frameworks & UI",
    skills: "React · Next.js · Tailwind CSS",
  },
  {
    icon: <Database className="w-5 h-5 text-indigo-500" />,
    title: "Backend & Data",
    skills: "Node.js · MongoDB · SQL",
  },
  {
    icon: <Workflow className="w-5 h-5 text-green-500" />,
    title: "Core Fundamentals",
    skills: "OS · DBMS · Computer Networks · OOPs",
  },
  {
    icon: <Layers className="w-5 h-5 text-pink-500" />,
    title: "Project Architecture",
    skills: "Real-time Sockets · End-to-end Encryption",
  },
  {
    icon: <Globe className="w-5 h-5 text-cyan-500" />,
    title: "Tools & Dev",
    skills: "Git · GitHub · VS Code",
  },
];

export default function ExperienceSection() {
  return (
    <section
      className="py-20 md:py-32 border-t border-surface-border dark:border-dark-surface-border"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section label */}
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
          Experience & Skills
        </p>
        <h2 className="text-4xl sm:text-5xl font-display font-light text-neutral-900 dark:text-white tracking-tight mb-14 md:mb-20">
          Professional <span className="italic font-semibold">Journey.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          {/* Timeline */}
          <div className="lg:col-span-5">
            <div className="relative space-y-10 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-surface-border before:dark:bg-dark-surface-border">
              {timelineItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center ${item.current
                        ? "border-primary bg-white dark:bg-black"
                        : "border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black"
                      }`}
                  >
                    {item.current && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    )}
                  </div>

                  <p
                    className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${item.current ? "text-primary" : "text-neutral-400"
                      }`}
                  >
                    {item.period}
                  </p>
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                    {item.role}
                  </h4>
                  <p className="text-sm font-medium text-neutral-500 mb-2">
                    {item.company}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-6">
              Technical Arsenal
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border border-surface-border dark:border-dark-surface-border rounded-xl p-5 hover:border-primary/50 transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {cat.icon}
                    <h5 className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {cat.title}
                    </h5>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {cat.skills}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Current focus strip */}
            <div className="mt-6 border border-surface-border dark:border-dark-surface-border rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                  Current Focus
                </p>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  React · Next.js · Full Stack Web Applications
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="live-dot" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

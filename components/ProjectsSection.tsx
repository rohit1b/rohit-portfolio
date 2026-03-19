"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Star } from "lucide-react";
import Link from "next/link";
import { Project, projects } from "@/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Selected Work
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-neutral-900 dark:text-white leading-tight tracking-tight">
              Projects that
              <br />
              <span className="italic font-semibold">matter.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <Link
              href="/projects"
              className="text-sm font-medium text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 px-4 py-2 rounded hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300"
            >
              All Projects →
            </Link>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((project, idx) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                index={idx}
              />
            ))}
        </div>

        {/* Bottom summary row */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Open Source block */}
          <div className="lg:col-span-2 border border-surface-border dark:border-dark-surface-border rounded-xl p-8 sm:p-12 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-4">
              Open Source
            </p>
            <p className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-white mb-8">
              Contributing to{" "}
              <span className="italic font-semibold">Agentic Systems</span> and
              open tooling.
            </p>
            <div className="flex gap-4">
              <div className="border border-surface-border dark:border-dark-surface-border px-6 py-4 rounded-lg">
                <span className="text-2xl font-bold text-primary">30+</span>
                <p className="text-xs uppercase font-bold text-neutral-400 mt-1 tracking-widest">
                  GitHub Stars
                </p>
              </div>
              <div className="border border-surface-border dark:border-dark-surface-border px-6 py-4 rounded-lg">
                <span className="text-2xl font-bold text-primary">12</span>
                <p className="text-xs uppercase font-bold text-neutral-400 mt-1 tracking-widest">
                  Projects Built
                </p>
              </div>
            </div>
          </div>

          {/* CTA block */}
          <div className="bg-neutral-900 dark:bg-white rounded-xl p-8 sm:p-10 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:rotate-12 transition-transform duration-700">
              <Star className="w-40 h-40 text-primary" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6">
              Next Step
            </p>
            <p className="text-xl font-light text-white dark:text-neutral-900 leading-snug">
              Let&apos;s build something{" "}
              <span className="italic font-semibold text-primary">
                remarkable
              </span>{" "}
              together.
            </p>
            <Link
              href="#contact"
              className="mt-8 flex items-center justify-between bg-primary text-white rounded px-5 py-3 text-sm font-semibold hover:bg-primary-dark transition-colors z-10 w-full"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const displayNum = `0${index + 1}`;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group amber-line-hover block border border-surface-border dark:border-dark-surface-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-500"
      >
        {/* Visual Header */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          {project.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={project.title}
              src={project.imageUrl}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.03] ${project.bgGradient}`}
            >
              <span
                className={`text-6xl font-black opacity-10 ${project.accentColor}`}
              >
                {project.title.substring(0, 2)}
              </span>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Hover overlay */}
          <div className="preview-overlay absolute inset-0 bg-neutral-900/80 flex items-center justify-center">
            <span className="text-white text-sm font-semibold tracking-widest uppercase border border-white/30 px-6 py-3 rounded">
              View Case Study
            </span>
          </div>

          {/* Bottom metadata */}
          <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center">
            <span className="px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
              {project.badge}
            </span>
            <span className="text-white/60 font-display italic text-lg">
              {displayNum}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-3">
          <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-2 group-hover:gap-3 transition-all duration-300">
            <span>Read Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

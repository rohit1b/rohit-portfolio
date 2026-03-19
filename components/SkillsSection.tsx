"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone, Server, Cpu } from "lucide-react";

const skills = [
  { icon: Layout, label: "React" },
  { icon: Server, label: "Next.js" },
  { icon: Code2, label: "TypeScript" },
  { icon: Smartphone, label: "Tailwind CSS" },
  { icon: Server, label: "Node.js" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Cpu, label: "Framer Motion" },
  { icon: Database, label: "Prisma" },
  { icon: Server, label: "Docker" },
  { icon: Cpu, label: "LLM APIs" },
];

export default function SkillsSection() {
  return (
    <section className="py-20 md:py-32 border-t border-surface-border dark:border-dark-surface-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Currently building at Witting AI
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-neutral-900 dark:text-white mb-6">
            I believe that software should not just function;
            <br className="hidden sm:block" />
            it should{" "}
            <span className="italic font-semibold text-primary">flow.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-16">
            My work is dedicated to removing friction, enhancing clarity, and
            bringing a touch of elegance to complex systems.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col items-center justify-center p-6 border border-surface-border dark:border-dark-surface-border rounded-xl hover:border-primary/50 bg-white dark:bg-dark-surface transition-all duration-300"
              >
                <Icon
                  className="w-8 h-8 text-neutral-400 group-hover:text-primary mb-3 transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                  {skill.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

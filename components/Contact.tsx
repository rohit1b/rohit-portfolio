"use client";

import { motion } from "framer-motion";
import { Copy, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rohitthakurrt365@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-black text-white rounded-t-[2.5rem] mt-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6">
            Get in touch
          </p>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-light mb-8 tracking-tight">
            Let&apos;s build{" "}
            <span className="italic font-semibold block sm:inline">
              the next phase.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-neutral-400 max-w-xl mx-auto mb-12 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a
              href="mailto:rohitthakurrt365@gmail.com"
              className="group relative inline-flex items-center justify-center text-2xl sm:text-3xl font-medium"
            >
              rohitthakurrt365@gmail.com
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>

            <button
              onClick={handleCopy}
              className="p-3 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              aria-label="Copy email"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Footer info inside Contact section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Rohit Singh. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/deepak2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rohit-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

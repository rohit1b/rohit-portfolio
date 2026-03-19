"use client";

import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full bg-surface-muted dark:bg-dark-surface-muted animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-surface-border dark:border-dark-surface-border"
          : "bg-white/0 dark:bg-black/0"
      }`}
    >
      {/* Top border line — appears on scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-surface-border dark:border-dark-surface-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div
        ref={menuRef}
        className={`max-w-7xl mx-auto px-5 sm:px-8 transition-all duration-500 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display italic font-semibold text-xl text-neutral-900 dark:text-white tracking-tight hover:text-primary transition-colors duration-300"
          >
            DK
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 px-4 py-2 rounded hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300"
            >
              Resume
            </a>

            {/* Hamburger — mobile */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center text-neutral-700 dark:text-neutral-300"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 border-t border-surface-border dark:border-dark-surface-border mt-4 flex flex-col gap-4 bg-white dark:bg-black px-5 sm:px-8 -mx-5 sm:-mx-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

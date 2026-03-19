import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F59E0B",
        "primary-dark": "#D97706",
        "primary-light": "#FDE68A",
        "background-light": "#FFFFFF",
        "background-dark": "#000000",
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#FAFAFA",
          muted: "#F5F5F5",
          border: "#E5E7EB",
        },
        "dark-surface": {
          DEFAULT: "#0A0A0A",
          soft: "#111111",
          muted: "#1A1A1A",
          border: "#222222",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-newsreader)", "serif"],
      },
      backgroundImage: {
        "clean-gradient": "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
        "clean-gradient-dark":
          "linear-gradient(180deg, #000000 0%, #0A0A0A 100%)",
        "amber-glow":
          "radial-gradient(ellipse at 50% 0%, rgba(245, 158, 11, 0.08) 0%, transparent 70%)",
        "amber-glow-dark":
          "radial-gradient(ellipse at 50% 0%, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "pulse-amber": "pulse-amber 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "line-in": "line-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-amber": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "line-in": {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

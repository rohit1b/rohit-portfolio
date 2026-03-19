"use client";

import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative z-10 w-full">
      <main className="w-full flex flex-col gap-10 md:gap-16 pb-16 md:pb-32">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <Contact />
      </main>
    </div>
  );
}

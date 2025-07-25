'use client';

import Lightning from '@/components/lightning';
import ProjectsSection from '@/features/projects/components/ProjectsSection';
import HeroSection from './sections/heroSection';
import AboutSection from './sections/aboutSection';
import SkillsSection from './sections/skillsSection';

export default function PortfolioPage() {
  return (
    <>
      <div className="absolute left-0 top-0 w-full h-screen overflow-hidden ">
        <div className="bg-linear-to-t from-background to-black/0 absolute z-1 bottom-0 right-0 left-0 h-14 w-full"></div>
        <Lightning
          hue={186}
          xOffset={-1}
          speed={1}
          intensity={1}
          size={1}
          
        />
      </div>
      <main className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="h-screen flex flex-col justify-center items-start">
          <HeroSection />
          <AboutSection />
        </div>
        <ProjectsSection />
        <SkillsSection />
      </main>
    </>
  );
}

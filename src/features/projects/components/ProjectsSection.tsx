// src/components/HeroSection/HeroSection.js
import { Eye, Github } from 'lucide-react';
import { projects } from '@/features/projects/data/projectsData';
import { useCallback, useEffect, useState, useRef } from 'react';
import { SLIDE_DURATION } from '@/config';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Project } from '@/types/project';
import Link from 'next/link';
import Carousel from '@/components/carousel';

const ProjectsHeroSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [progressBarLength, setProgressBarLength] = useState<number>(0);
  const isAutoRolling = useRef<boolean>(true);
  const animationFrameId = useRef<number | null>(null);

  const activeProject: Project = projects[activeImageIndex];

  const advanceSlide = useCallback(() => {
    if (isAutoRolling.current) {
      setActiveImageIndex((prev) => (prev + 1) % projects.length);
    }
  }, []);

  useEffect(() => {
    // Immediately reset progress bar when active image changes
    setProgressBarLength(0);

    // If not auto-rolling, don't start the timer
    if (!isAutoRolling.current) return;

    const startTime = Date.now();

    const updateProgressBar = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min((elapsedTime / SLIDE_DURATION) * 100, 100);

      setProgressBarLength(progress);

      if (elapsedTime < SLIDE_DURATION) {
        animationFrameId.current = requestAnimationFrame(updateProgressBar);
      } else {
        advanceSlide();
      }
    };

    animationFrameId.current = requestAnimationFrame(updateProgressBar);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [activeImageIndex, advanceSlide]);

  const handleThumbnailClick = (index: number) => {
    isAutoRolling.current = false;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    setActiveImageIndex(index);
    setProgressBarLength(0);
  };

  return (
    <>
      {/* Mobile view */}
      <div
        className="flex justify-center items-baseline h-fit sm:hidden"
        style={{ position: 'relative' }}
      >
        <Carousel
          baseWidth={330}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
      {/* Destop view */}
      <div className="mt-12 hidden sm:block">
        <section className="max-w-7xl mx-auto px-3  relative w-full aspect-video">
          <div className="flex h-full flex-col justify-end">
            <div className="flex flex-col gap-3 z-[11] max-w-sm relative">
              <h1 className="text-2xl font-bold max-w-xs relative">
                {activeProject.title}
              </h1>
              <div className="flex gap-1 max-w-xs flex-wrap">
                {activeProject.technologies.map((tech, index) => (
                  <Badge
                    key={tech}
                    className={
                      index < 4
                        ? 'bg-white text-black'
                        : 'bg-gray-700 text-white'
                    }
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-300">{activeProject.shortDescription}</p>
              {/* button container */}
              <div className="flex gap-3 font-bold">
                <div className="relative h-14 group">
                  {/* Background div with scaling effect on hover */}
                  <div className="bg-white w-full h-full absolute group-hover:bg-white/95 group-hover:scale-110 transition-transform duration-300"></div>

                  {/* Live site Button */}
                  {activeProject.liveSiteUrl && (
                    <Link
                      target="_blank"
                      href={activeProject.liveSiteUrl}
                    >
                      <button className="text-black px-6 z-10 py-2 w-full h-full relative flex justify-center items-center gap-3">
                        {' '}
                        <Eye /> Live site
                      </button>
                    </Link>
                  )}
                </div>

                <div className="relative h-14 group">
                  {/* Background div with scaling effect on hover */}
                  <div className="bg-gray-700 w-full h-full absolute group-hover:scale-110 group-hover:bg-white  transition-transform duration-300"></div>

                  {/* Source code Button */}
                  {activeProject.githubUrl && (
                    <a href={activeProject.githubUrl}>
                      <button className="text-white px-6 z-10 py-2 w-full h-full relative flex justify-center items-center gap-3 group-hover:text-black">
                        <Github /> Source code
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="z-10 absolute w-full h-full bg-gradient-to-r from-background from-20% via-transparent to-background"></div>
            {/* cover image */}
            <div className="h-fit w-5/6 absolute right-0 top-0">
              <div className="bg-background/90 h-full w-full z-10">
                <Image
                  className="w-full absolute right-0 top-0 aspect-video"
                  src={activeProject.coverImage.src}
                  alt={activeProject.coverImage.alt}
                />
              </div>
            </div>
            {/* thumbnails grid */}
            <div className="h-1/3 bg-gradient-to-b from-transparent via-background to-background relative z-10 py-11">
              <div className="flex justify-center left-0 gap-6">
                {projects.map((project, index) => (
                  <div
                    className="flex flex-col"
                    key={project.title}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <div
                      className={`h-32 aspect-video transition-all duration-300 cursor-pointer border-2 ${
                        activeImageIndex === index
                          ? 'scale-110 border-white opacity-100'
                          : 'scale-100 border-transparent opacity-60'
                      }`}
                    >
                      <Image
                        src={project.thumbnailUrl.src}
                        alt={project.thumbnailUrl.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {activeImageIndex === index && isAutoRolling.current && (
                      <div className="w-full max-w-[33%] mx-auto h-1 bg-white/30 mt-3 relative">
                        <span
                          className="h-full bg-white/90 absolute"
                          style={{ width: progressBarLength + '%' }}
                        ></span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsHeroSection;

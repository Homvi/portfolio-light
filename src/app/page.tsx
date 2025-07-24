'use client';

import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Image from 'next/image';
import { HeroBackground } from '@/components/hero-background';
import Lightning from '@/components/lightning';
import Link from 'next/link';

// --- Main Page Component ---
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
        <FeaturedProjectSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}

// --- Sub-components for better organization ---

const HeroSection = () => (
  <header className="relative  text-center sm:text-left mb-10 overflow-hidden py-16 rounded-xl">
    <div className="absolute inset-0 -z-10">
      <HeroBackground />
    </div>
    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
      Adam Honvedo
    </h1>
    <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-primary">
      Full-Stack Developer | Laravel | React.TS
    </h2>
    <div className="mt-6 flex justify-center items-center sm:justify-start  space-x-5">
      <SocialLink
        href="https://github.com/Homvi"
        icon={<Github size={28} />}
        label="GitHub"
      />
      <SocialLink
        href="https://www.linkedin.com/in/adamhonvedo/"
        icon={<Linkedin size={28} />}
        label="LinkedIn"
      />
      <SocialLink
        href="mailto:adam.honvedo@gmail.com"
        icon={<Mail size={28} />}
        label="Email"
      />
    </div>
  </header>
);

const AboutSection = () => (
  <Section title="About Me">
    <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
      Full-Stack Developer who builds real-world applications. I manage
      production sites for a freelance client and am the sole creator of a SaaS
      job-seeker platform using Laravel and React.TS. I&apos;m ready to apply my
      practical experience to a full-time role within a great team.
    </p>
  </Section>
);

const FeaturedProjectSection = () => (
  <Section title="">
    <div>
      <Card className="overflow-hidden group pt-0">
        <div className="overflow-hidden">
          {/*  TODO: Replace with actual link to project or demo  */}
          <Link href={'#'}>
            <Image
              src="/job-seeker-platform.png"
              alt="Job Seeker Platform Screenshot"
              width={1109}
              height={788}
              className="w-full h-auto object-cover border-r group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </Link>
        </div>
        <CardHeader>
          <CardTitle>A Modern Solution for Hiring</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6 text-muted-foreground">
            This platform was built from scratch to solve a problem I&apos;m
            passionate about: the frustrating experience for both companies and
            candidates in the hiring process. It features a transparent
            application tracking system and job validation to combat ghosting
            and fake posts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="secondary"
              asChild
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </Section>
);

const ExperienceSection = () => (
  <Section title="Experience">
    <div className="space-y-6">
      <ExperienceItem
        title="Freelance Full-Stack Developer"
        company="Hungarian Real Estate & Business Consulting"
        date="2023 – Present"
        description="Developed and launched a production-level real estate listing platform using Laravel and Blade. I serve as the sole technical point-of-contact, providing ongoing maintenance, feature development, and strategic advice, ensuring high uptime and client satisfaction."
      />
      <ExperienceItem
        title="Full-Stack Developer (Collaborator)"
        company="Chingu-X (Voyages)"
        date="2024.08 - 2024.12"
        description="Collaborated in a remote, international Agile team to build a dashboard using Next.js 14. Implemented a complex, multi-step user registration UI and successfully integrated work into a long-running main branch through Git and pull requests."
      />
      <ExperienceItem
        title="Cable Installer"
        company="Abeking & Rasmussen, Germany"
        date="2025 - Present"
        description="Executed complex technical plans under strict deadlines in a high-stakes industrial environment. This role honed my problem-solving skills, attention to detail, and ability to collaborate effectively with engineering teams."
      />
    </div>
  </Section>
);

const SkillsSection = () => (
  <Section title="Core Technologies">
    <div className="flex flex-wrap gap-3">
      {[
        'Laravel',
        'PHP',
        'React.TS',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'HTML5 & CSS3',
        'Tailwind CSS',
        'MySQL',
        'Git & GitHub',
        'Agile/Scrum',
        'Vercel',
      ].map((skill, i) => (
        <div key={skill}>
          <Badge
            variant={i < 4 ? 'default' : 'secondary'}
            className=" text-md"
          >
            {skill}
          </Badge>
        </div>
      ))}
    </div>
  </Section>
);

const Footer = () => (
  <footer className="text-center py-8 border-t">
    <p className="text-muted-foreground">
      &copy; {new Date().getFullYear()} Adam Honvedo. Built with Next.js &
      shadcn/ui.
    </p>
  </footer>
);

// --- Helper Components ---
const Section = ({ title, children }) => (
  <section className="py-12">
    <h3 className="text-xl sm:text-3xl font-bold mb-6">{title}</h3>
    {children}
  </section>
);

const ExperienceItem = ({ title, company, date, description }) => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-primary font-semibold mt-1">
            {company}
          </CardDescription>
        </div>
        <p className="text-sm text-muted-foreground whitespace-nowrap pt-1">
          {date}
        </p>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    {icon}
    <span className="sr-only">{label}</span>
  </a>
);

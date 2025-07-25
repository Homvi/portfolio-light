
import SocialLink from '@/components/socialLink';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => (
  <header className="relative  text-center sm:text-left mb-10 overflow-hidden py-5 rounded-xl">
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

export default HeroSection;

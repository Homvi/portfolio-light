import tutrabajojustoCover from '@/assets/Images/tutrabajojusto/tutrabajojusto_cover_white.png';
import tutrabajojustoThumbNail from '@/assets/Images/tutrabajojusto/tutrabajojusto_thumb_black.png';

import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'TuTrabajoJusto: Real Offers, Fair Treatment',
    shortDescription:
      'A job platform for the Spanish market ensuring fair hiring through company validation and mandatory salary transparency.',
    technologies: [
      'Laravel',
      'React',
      'Inertia.js',
      'TypeScript',
      'Tailwind CSS',
      'MySQL',
      'Git',
    ],
    liveSiteUrl: '',
    githubUrl: 'https://github.com/Homvi/tutrabajojusto-platform',
    coverImage: {
      src: tutrabajojustoCover,
      alt: 'TuTrabajoJusto cover image',
      width: 1335,
      height: 751,
    },
    thumbnailUrl: {
      src: tutrabajojustoThumbNail,
      alt: 'TuTrabajoJusto thumbnail',
      width: 400,
      height: 600,
    },
  },
];

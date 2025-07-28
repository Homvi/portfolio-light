import tutrabajojustoCover from '@/assets/Images/tutrabajojusto/tutrabajojusto_cover_white.png';
import tutrabajojustoThumbNail from '@/assets/Images/tutrabajojusto/tutrabajojusto_thumb_black.png';

import smartPartnerCover from '@/assets/Images/smartPartner/smart_partner_cover.png';
import smartPartnerThumbNail from '@/assets/Images/smartPartner/smart_partner_thumb_blue.png';

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
    liveSiteUrl: undefined, // TODO: Add live site URL when available
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
  {
    title: 'Smart Ingatlan: Hungarian Real Estate Portal',
    shortDescription:
      'A freelance project for a Hungarian client, a real estate portal with admin panel, and database. The client and their team can manage all property listings.',
    technologies: ['Laravel', 'Tailwind CSS', 'MySQL', 'Alpine.js'],
    liveSiteUrl: 'https://www.smartingatlan.eu/',
    coverImage: {
      src: smartPartnerCover,
      alt: 'TuTrabajoJusto cover image',
      width: 1335,
      height: 751,
    },
    thumbnailUrl: {
      src: smartPartnerThumbNail,
      alt: 'TuTrabajoJusto thumbnail',
      width: 400,
      height: 600,
    },
  },
];

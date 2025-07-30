import { StaticImageData } from 'next/image';

export interface Project {
  title: string;
  shortTitle: string;
  shortDescription: string;
  technologies: string[];
  liveSiteUrl?: string;
  githubUrl?: string;
  coverImage: {
    src: StaticImageData | string;
    alt: string;
    width: number;
    height: number;
  };
  thumbnailUrl: {
    src: StaticImageData | string;
    alt: string;
    width: number;
    height: number;
  };
}

// src/components/section.tsx

import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ title, children, className }: SectionProps) => (
  <section className="py-9 sm:py-12">
    <h3 className={`text-xl sm:text-3xl font-bold mb-6 ${className}`}>
      {title}
    </h3>
    {children}
  </section>
);

export default Section;

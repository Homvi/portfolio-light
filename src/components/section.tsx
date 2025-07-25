// src/components/section.tsx

import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <section className="py-12">
    <h3 className="text-xl sm:text-3xl font-bold mb-6">{title}</h3>
    {children}
  </section>
);

export default Section;

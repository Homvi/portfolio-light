// src/components/socialLink.tsx

import type { ReactNode } from 'react';

type SocialLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
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

export default SocialLink;

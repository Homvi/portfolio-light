import Section from '@/components/section';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => (
  <Section
    title="Core Technologies"
    className="text-center sm:text-left"
  >
    <div className="flex flex-wrap gap-2 sm:gap-3">
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
            className="sm:text-md"
          >
            {skill}
          </Badge>
        </div>
      ))}
    </div>
  </Section>
);

export default SkillsSection;

import Section from '@/components/section';
import { Badge } from '@/components/ui/badge';

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

export default SkillsSection;

import { motion } from 'framer-motion';
import { IconBrandCodepen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

export const Portfolio = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my projects';
  const portfolios = [
    {
      id: 1,
      name: 'Portfolio Project',
      image: '/soon.avif',
      link: '#',
    },
    {
      id: 2,
      name: 'Portfolio Project',
      image: '/soon.avif',
      link: '#',
    },
    {
      id: 12,
      name: 'Portfolio Project',
      image: '/soon.avif',
      link: '#',
    },
    {
      id: 13,
      name: 'Portfolio Project',
      image: '/soon.avif',
      link: '#',
    },
    {
      id: 15,
      name: 'Portfolio Project',
      image: '/soon.avif',
      link: '#',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBrandCodepen />}
        label="Portfolio"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <ProjectCard key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </motion.section>
  );
};

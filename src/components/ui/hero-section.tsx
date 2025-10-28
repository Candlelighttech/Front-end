import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FinancialHeroProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl1: string;
  imageUrl2: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const FinancialHero = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl1,
  imageUrl2,
  className,
}: FinancialHeroProps) => {
  const gridBackgroundStyle = {
    backgroundImage:
      'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
    backgroundSize: '3rem 3rem',
  };

  return (
    <section className={cn('relative w-full overflow-hidden bg-background text-foreground pt-20 md:pt-10 lg:pt-32', className)}>
      <div className="absolute inset-0" style={gridBackgroundStyle} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <motion.div
        className="relative container mx-auto flex flex-col lg:flex-row min-h-[60vh] lg:min-h-[80vh] items-center justify-between px-4 lg:px-6 py-12 lg:py-20 gap-8 lg:gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">
          <motion.h1 className="text-4xl font-heading font-bold tracking-tight md:text-5xl lg:text-6xl" variants={itemVariants}>
            {title}
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-lg text-muted-foreground" variants={itemVariants}>
            {description}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8">
            <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-accent to-light-accent font-heading font-bold text-lg text-base-dark overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative text-base-dark flex items-center gap-2">
                {buttonText}
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div className="relative lg:w-1/2 w-full flex items-center justify-center" variants={cardsVariants}>
          {/* Back image: stacked/relative on mobile, absolutely positioned on large screens */}
          {/* <motion.img
            src={imageUrl2}
            alt="Financial Card Back"
            variants={cardItemVariants}
            whileHover={{ y: -10, rotate: -5, transition: { duration: 0.3 } }}
            className="relative lg:absolute lg:h-80 h-48 rounded-2xl shadow-2xl object-cover lg:transform lg:-rotate-6 lg:translate-x-24 lg:-translate-y-8 w-11/12 md:w-3/4 lg:w-auto"
            style={{ zIndex: 0 }}
          /> */}

          {/* Front image: stacked below/back on mobile, front/absolute on large screens */}
          <motion.img
            src={imageUrl1}
            alt="Financial Card Front"
            variants={cardItemVariants}
            whileHover={{ y: -10, rotate: 5, transition: { duration: 0.3 } }}
            className="relative lg:absolute lg:h-[220px] xl:h-[300px] h-48 rounded-2xl shadow-2xl object-cover lg:transform lg:rotate-6 lg:-translate-x-16 w-11/12 md:w-3/4 lg:w-auto mt-6 lg:mt-0"
            style={{ zIndex: 10 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinancialHero;

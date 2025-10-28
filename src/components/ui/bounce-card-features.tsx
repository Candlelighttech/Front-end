"use client";
import React from "react";
import { motion } from "framer-motion";

type Item = {
  name: string;
  users?: string;
  rating?: number;
};

export const BouncyCardsFeatures: React.FC<{ items?: Item[] }> = ({ items = [] }) => {
  const [a = { name: 'Project Dashboard' }, b = { name: 'Visual Page Builder' }, c = { name: 'Responsive Output' }, d = { name: 'AI SEO Generator' }] = items;
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-24 text-foreground">
      <div className="mb-8 sm:mb-12 md:mb-16 flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-3xl sm:text-4xl md:text-5xl font-heading font-bold">
          Grow faster with our
          <span className="text-muted-foreground"> all in one solution</span>
        </h2>
        <button className="group relative px-6 py-3 rounded-2xl border-2 border-primary-accent/30 hover:border-primary-accent text-primary-accent hover:text-white font-heading font-bold transition-all duration-500 hover:scale-105 overflow-hidden whitespace-nowrap">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/10 to-light-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative flex items-center gap-2">
            Learn more
            <div className="w-2 h-2 rounded-full bg-primary-accent group-hover:animate-ping" />
          </span>
        </button>
      </div>
      <div className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
        <BounceCard className="sm:col-span-12 md:col-span-4">
          <CardTitle>{a.name}</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 sm:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-primary-accent to-light-accent p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-heading font-semibold text-base-dark">
              {a.users ?? '50K+'} {a.rating ? `★ ${a.rating}` : '★ 4.9'}
            </span>
          </div>
        </BounceCard>
        <BounceCard className="sm:col-span-12 md:col-span-8">
          <CardTitle>{b.name}</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 sm:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-light-accent to-primary-accent p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-heading font-semibold text-base-dark">
              {b.users ?? '35K+'} {b.rating ? `★ ${b.rating}` : '★ 4.8'}
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
        <BounceCard className="sm:col-span-12 md:col-span-8">
          <CardTitle>{c.name}</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 sm:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-primary-accent/80 to-light-accent/80 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-heading font-semibold text-base-dark">
              {c.users ?? '42K+'} {c.rating ? `★ ${c.rating}` : '★ 4.9'}
            </span>
          </div>
        </BounceCard>
        <BounceCard className="sm:col-span-12 md:col-span-4">
          <CardTitle>{d.name}</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 sm:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-light-accent/80 to-primary-accent/80 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-heading font-semibold text-base-dark">
              {d.users ?? '28K+'} {d.rating ? `★ ${d.rating}` : '★ 4.7'}
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: -1 }}
      className={`group relative min-h-[250px] sm:min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-white/5 dark:bg-gray-900/30 backdrop-blur-sm border border-primary-accent/20 hover:border-primary-accent/50 transition-all duration-500 p-6 sm:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-foreground">{children}</h3>
  );
};

export default BouncyCardsFeatures;

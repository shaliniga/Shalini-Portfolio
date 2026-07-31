import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-16", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

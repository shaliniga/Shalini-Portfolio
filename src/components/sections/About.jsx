import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Code, Zap } from 'lucide-react';
import shaliniImage from '../../assets/shalini1.jpeg';

const bentoItems = [
  /* 0 – Photo, spans 1 col × 2 rows */
  null,
  /* 1 – Big bio */
  null,
  /* 2 – Current */
  null,
  /* 3 – Education */
  null,
  /* 4 – Focus */
  null,
];

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Section number watermark */}
      <div className="number-bg absolute -top-6 left-0 select-none pointer-events-none opacity-100">01</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Label */}
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#a3e635]/40 to-transparent" />
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card A – Photo (md: col-span-1, row-span-2) */}
          <motion.div
            className="md:row-span-2 relative rounded-3xl overflow-hidden min-h-[300px] md:min-h-[480px] group"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={shaliniImage}
              alt="Shalini"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050905] via-[#050905]/20 to-transparent" />
            {/* Location badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#050905]/80 backdrop-blur-md border border-[#1f2d1f] text-xs font-mono text-[#a3e635]">
              <MapPin className="w-3 h-3" /> Bengaluru, India
            </div>
          </motion.div>

          {/* Card B – Bio text (md: col-span-2) */}
          <motion.div
            className="md:col-span-2 card-dark rounded-3xl p-8 flex flex-col justify-center transition-all duration-300"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-[#f0fdf4] mb-5 leading-tight">
              I build things for the{' '}
              <span className="text-gradient-lime">web</span>.
            </h2>
            <p className="text-[#6b7280] text-base leading-relaxed mb-4">
              Software Engineer with 3+ years of experience. My journey started with curiosity about how the internet works and grew into a career focused on the{' '}
              <span className="text-[#d1fae5] font-semibold">MERN stack</span>{' '}
              and modern frontend ecosystems.
            </p>
            <p className="text-[#6b7280] text-base leading-relaxed">
              I care deeply about bridging the gap between{' '}
              <span className="text-[#d1fae5] font-semibold">design and engineering</span>{' '}
              — making products that are both beautiful on the surface and rock-solid underneath.
            </p>
          </motion.div>

          {/* Card C – Currently at */}
          <motion.div
            className="card-dark rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#a3e635]/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#a3e635]" />
            </div>
            <div>
              <p className="section-label mb-1">Currently at</p>
              <p className="text-[#f0fdf4] font-heading font-bold text-lg">Piquota Digital Inc.</p>
              <p className="text-[#6b7280] text-sm mt-1">Building enterprise full-stack products</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#a3e635]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
              Full-time · Active
            </div>
          </motion.div>

          {/* Card D – Education */}
          <motion.div
            className="card-dark rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#a3e635]/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#a3e635]" />
            </div>
            <div>
              <p className="section-label mb-1">Education</p>
              <p className="text-[#f0fdf4] font-heading font-bold text-lg">VIT University</p>
              <p className="text-[#6b7280] text-sm mt-1">Merit Scholarship Recipient</p>
            </div>
          </motion.div>

          {/* Card E – Skills snapshot (col-span-3) */}
          <motion.div
            className="md:col-span-3 card-dark rounded-3xl p-6 flex flex-wrap items-center gap-3 transition-all duration-300"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mr-4">
              <Zap className="w-4 h-4 text-[#a3e635]" />
              <span className="section-label">Core Skills</span>
            </div>
            {['React.js', 'TypeScript', 'JavaScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Supabase', 'Express.js', 'Java', 'DSA', 'Git'].map((s) => (
              < span
                key={s}
                className="px-3 py-1.5 text-xs font-mono text-[#d1fae5] border border-[#1f2d1f] rounded-lg hover:border-[#a3e635]/40 hover:text-[#a3e635] transition-all duration-200 cursor-default"
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section >
  );
}

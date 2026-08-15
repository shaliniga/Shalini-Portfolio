import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = {
  Frontend: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'React Query', 'Zustand', 'Recharts', 'React Hook Form', 'Zod', 'Redux Toolkit', 'HTML5', 'CSS3', 'Vite', 'Webpack'],
  Backend: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Supabase', 'REST APIs', 'JWT Authentication', 'Swagger / OpenAPI', 'Java', 'Spring Boot', 'PHP'],
  'DB & Tools': ['PostgreSQL', 'Supabase', 'Drizzle ORM', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'Postman', 'Swagger', 'Figma', 'Jira', 'Render', 'Vercel'],
  'Core Concepts': ['System Design', 'DSA', 'OOP', 'RBAC Security', 'State Management', 'Schema Validation', 'REST Architecture', 'Agile', 'Responsive Design', 'Performance Optimization'],
};

const TAPE_A = ['React.js', 'TypeScript', 'PostgreSQL', 'Node.js', 'Drizzle ORM', 'Supabase', 'React Query', 'Zustand', 'Tailwind CSS', 'Recharts', 'Express.js', 'Java', 'Spring Boot', 'Vite'];
const TAPE_B = ['System Design', 'DSA', 'JWT Authentication', 'Swagger / OpenAPI', 'Zod Validation', 'Responsive Design', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'Figma', 'Postman', 'Jira'];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden border-t border-[#1f2d1f]">
      {/* Number watermark */}
      <div className="number-bg absolute -top-6 right-0 select-none pointer-events-none text-right">02</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Label */}
        <motion.div
          className="flex items-center gap-4 mb-10 md:mb-14"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#a3e635]/40 to-transparent" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-heading font-black text-[#f0fdf4] mb-12 md:mb-16 leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My <span className="text-gradient-lime">Technical</span> Arsenal
        </motion.h2>

        {/* ── Marquee tapes ── */}
        <div className="space-y-3 mb-12 md:mb-16 overflow-hidden -mx-4 sm:-mx-6">
          {/* Tape 1 – forward */}
          <div className="marquee-track marquee-forward border-y border-[#1f2d1f] py-2.5 sm:py-3 bg-[#0d160d]">
            {[...TAPE_A, ...TAPE_A].map((s, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 text-xs sm:text-sm font-mono text-[#6b7280] hover:text-[#a3e635] transition-colors cursor-default">
                <span className="text-[#a3e635]">✦</span> {s}
              </span>
            ))}
          </div>

          {/* Tape 2 – reverse */}
          <div className="marquee-track marquee-reverse border-y border-[#1f2d1f] py-2.5 sm:py-3 bg-[#0d160d]">
            {[...TAPE_B, ...TAPE_B].map((s, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 text-xs sm:text-sm font-mono text-[#6b7280] hover:text-[#a3e635] transition-colors cursor-default">
                <span className="text-[#22c55e]">◆</span> {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── Category cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(SKILLS).map(([cat, skills], idx) => (
            <motion.div
              key={cat}
              className="card-dark rounded-2xl p-5 sm:p-6 hover:border-[#a3e635]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="text-[#f0fdf4] font-heading font-bold text-base">{cat}</span>
                <span className="text-[10px] font-mono text-[#6b7280] border border-[#1f2d1f] px-2 py-0.5 rounded-full">
                  {skills.length} skills
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-mono text-[#6b7280] bg-[#0d160d] border border-[#1f2d1f] rounded-lg hover:text-[#a3e635] hover:border-[#a3e635]/30 hover:bg-[#a3e635]/5 transition-all duration-150 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

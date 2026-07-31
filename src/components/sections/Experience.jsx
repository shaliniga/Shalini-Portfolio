import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    index: '01',
    role: 'Software Engineer',
    company: 'Piquota',
    period: 'Current',
    type: 'Full-time',
    description: 'Designing, developing, and maintaining scalable web applications using Java, React.js, Node.js, JavaScript, and TypeScript. Skilled in building responsive UIs, developing RESTful APIs, and implementing secure authentication (RBAC). Experienced in working on enterprise and healthcare platforms, optimizing performance, and resolving production issues in Agile environments.',
    products: ['Immunotrack', 'Traxxia', 'US/UK Client Products'],
    skills: ['React.js', 'Node.js', 'Java', 'TypeScript'],
    highlight: true,
  },
  {
    index: '02',
    role: 'Software Engineer',
    company: 'Forbes Advisor',
    period: 'Previous',
    type: 'Full-time',
    description: 'Contributed to the development and maintenance of high-traffic web applications using JavaScript, React.js, PHP, WordPress, HTML, CSS, and Tailwind CSS. Developed custom Gutenberg blocks, themes, and plugins to enhance website functionality. Built responsive user interfaces, integrated APIs, optimized website performance, and fixed production issues in an Agile team.',
    products: ['Forbes Advisor', 'CNN', 'USA Today'],
    skills: ['React.js', 'WordPress', 'PHP', 'Tailwind CSS'],
    highlight: false,
  },
  {
    index: '03',
    role: 'Full Stack Developer',
    company: 'Forbes Advisor',
    period: 'Previous',
    type: '6-Month Internship',
    description: 'Developed and maintained high-traffic web applications using React.js, JavaScript, PHP, WordPress, HTML, CSS, Tailwind CSS, and MySQL. Developed custom Gutenberg blocks and themes, integrated REST APIs, resolved bugs, and collaborated in an Agile environment across the full software development lifecycle including production deployments.',
    products: [],
    skills: ['React.js', 'JavaScript', 'MySQL', 'PHP'],
    highlight: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden border-t border-[#1f2d1f]">
      {/* Number watermark */}
      <div className="number-bg absolute -top-6 left-0 select-none pointer-events-none">03</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Label */}
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#a3e635]/40 to-transparent" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-heading font-black text-[#f0fdf4] mb-16 leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Where I've <span className="text-gradient-lime">Worked</span>
        </motion.h2>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                exp.highlight
                  ? 'border-[#a3e635]/30 bg-[#a3e635]/5 hover:border-[#a3e635]/50 hover:bg-[#a3e635]/8'
                  : 'border-[#1f2d1f] bg-[#111a11] hover:border-[#a3e635]/20'
              }`}
            >
              {/* Accent bar */}
              {exp.highlight && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#a3e635] to-[#22c55e]" />
              )}

              <div className="p-6 md:p-8 pl-8 md:pl-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">

                  {/* Left: Number */}
                  <div className="flex-shrink-0">
                    <span className="font-mono text-[#a3e635]/40 text-4xl font-bold">{exp.index}</span>
                  </div>

                  {/* Center: Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-xl font-heading font-black text-[#f0fdf4]">{exp.role}</h3>
                      <span className="text-[#6b7280] text-sm hidden sm:block">@</span>
                      <span className={`text-lg font-heading font-bold ${exp.highlight ? 'text-[#a3e635]' : 'text-[#86efac]'}`}>
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-[#6b7280] text-sm leading-relaxed mb-5 max-w-2xl">
                      {exp.description}
                    </p>
                    <div className="flex flex-col gap-3">
                      {/* Skills */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs font-mono text-[#6b7280] self-center mr-1">Skills:</span>
                          {exp.skills.map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1 text-xs font-mono text-[#d1fae5] bg-[#0d160d] border border-[#1f2d1f] rounded-lg"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Products */}
                      {exp.products && exp.products.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-xs font-mono text-[#6b7280] self-center mr-1">Products:</span>
                          {exp.products.map((p) => (
                            <span
                              key={p}
                              className="px-3 py-1 text-xs font-mono text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/20 rounded-lg"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Meta */}
                  <div className="flex-shrink-0 flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 text-xs font-mono rounded-full border ${
                      exp.highlight
                        ? 'text-[#a3e635] border-[#a3e635]/30 bg-[#a3e635]/10'
                        : 'text-[#6b7280] border-[#1f2d1f]'
                    }`}>
                      {exp.period}
                    </span>
                    <span className="text-[10px] font-mono text-[#6b7280]">{exp.type}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

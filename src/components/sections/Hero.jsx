import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import resumePdf from '../../assets/Shalini g resume1.pdf';

const TAPE_ITEMS = [
  'React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express',
  'Redux', 'Tailwind CSS', 'REST APIs', 'Vite', 'Figma',
  'React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express',
  'Redux', 'Tailwind CSS', 'REST APIs', 'Vite', 'Figma',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-grid-pattern"
    >
      {/* Cursor glow */}
      <div ref={glowRef} className="cursor-glow" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center,transparent_40%,#050905_80%] pointer-events-none z-[1]" />

      {/* Large ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#a3e635]/5 blur-[120px] pointer-events-none z-[1]" />

      {/* ── Top badge tape ── */}
      <div className="w-full overflow-hidden border-b border-[#1f2d1f] bg-[#0d160d] relative z-10 mt-16">
        <div className="marquee-track marquee-forward py-2.5">
          {[...TAPE_ITEMS, ...TAPE_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-xs font-mono text-[#6b7280] uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-[#a3e635] inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-center py-16 sm:py-20">

        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] text-xs font-mono tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#a3e635] opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-[#a3e635]" />
            </span>
            Open to opportunities · 2026
          </span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-heading font-black text-[#f0fdf4] leading-[0.95] tracking-tighter"
            style={{ fontSize: 'clamp(2.75rem, 10vw, 8.5rem)' }}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            Shalini G
          </motion.h1>
        </div>

        {/* Role line */}
        <div className="overflow-hidden mb-8 sm:mb-10">
          <motion.div
            className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.35 }}
          >
            <h2
              className="font-heading font-black text-gradient-lime leading-[0.95] tracking-tighter"
              style={{ fontSize: 'clamp(2.75rem, 10vw, 8.5rem)' }}
            >
              Full Stack
            </h2>
            <span className="font-heading font-black text-[#1f2d1f] leading-[0.95] tracking-tighter"
              style={{ fontSize: 'clamp(2.75rem, 10vw, 8.5rem)' }}>
              Engineer
            </span>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 sm:gap-10"
          {...fadeUp(0.55)}
        >
          <p className="text-[#6b7280] text-base md:text-lg max-w-md leading-relaxed">
            3+ years crafting production-ready React & MERN applications.
            Turning complex problems into clean, performant interfaces.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#a3e635] text-[#050905] font-bold text-sm hover:bg-[#84cc16] transition-all duration-200 shadow-[0_0_30px_#a3e63540] hover:shadow-[0_0_50px_#a3e63560] active:scale-95"
            >
              View Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href={resumePdf}
              download="Shalini_Resume.pdf"
              className="group/btn flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#0d160d] border border-[#233523] text-[#f0fdf4] text-sm font-semibold hover:border-[#a3e635]/60 hover:text-[#a3e635] hover:bg-[#111e11] hover:shadow-[0_0_20px_#a3e63520] transition-all duration-200 active:scale-95"
            >
              <Download className="w-4 h-4 text-[#a3e635] group-hover/btn:translate-y-0.5 transition-transform" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-14 sm:mt-20 pt-6 sm:pt-8 border-t border-[#1f2d1f] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          {...fadeUp(0.7)}
        >
          {[
            { n: '3+', l: 'Years Experience' },
            { n: '15+', l: 'Production Features' },
            { n: '20+', l: 'Reusable Components' },
            { n: '100%', l: 'Responsive Design' },
          ].map((s) => (
            <div key={s.l} className="group p-2">
              <div className="text-[#a3e635] font-heading font-black text-3xl sm:text-4xl md:text-5xl tabular-nums group-hover:drop-shadow-[0_0_20px_#a3e635] transition-all">
                {s.n}
              </div>
              <div className="text-[#6b7280] text-[11px] sm:text-xs font-mono uppercase tracking-widest mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight, Send, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden border-t border-[#1f2d1f]">
      {/* Number watermark */}
      <div className="number-bg absolute -top-6 left-0 select-none pointer-events-none">05</div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#a3e635]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Label */}
        <motion.div
          className="flex items-center gap-4 mb-10 md:mb-14"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#a3e635]/40 to-transparent" />
        </motion.div>

        {/* Big CTA layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-12">

          {/* Left */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-heading font-black text-[#f0fdf4] mb-5 sm:mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}
            >
              Let's build<br />
              something{' '}
              <span className="text-gradient-lime">great</span>{' '}
              together.
            </h2>
            <p className="text-[#9ca3af] text-base sm:text-lg max-w-lg leading-relaxed mb-8">
              I'm currently exploring new opportunities. Whether you have a role, a project, or just want to connect — my inbox is open.
            </p>

            {/* Big email CTA */}
            <a
              href="mailto:shalini.g9995@gmail.com"
              className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#a3e635] text-[#050905] font-bold text-sm sm:text-base md:text-lg hover:bg-[#84cc16] transition-all duration-200 shadow-[0_0_40px_#a3e63540] hover:shadow-[0_0_60px_#a3e63560] active:scale-95 break-all sm:break-normal max-w-full"
            >
              <Send className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>shalini.g9995@gmail.com</span>
            </a>
          </motion.div>

          {/* Right – Social links */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="section-label mb-4 sm:mb-6">Find me on</p>
            <div className="space-y-3">
              {[
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  label: 'LinkedIn',
                  sub: 'in/shalini-g-239b7b29b',
                  href: 'https://www.linkedin.com/in/shalini-g-239b7b29b/',
                  color: '#0A66C2',
                },
                {
                  icon: <Github className="w-5 h-5" />,
                  label: 'GitHub',
                  sub: '@shaliniga',
                  href: 'https://github.com/shaliniga',
                  color: '#f0fdf4',
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: 'Email',
                  sub: 'shalini.g9995@gmail.com',
                  href: 'mailto:shalini.g9995@gmail.com',
                  color: '#a3e635',
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: 'Phone',
                  sub: '+91 8925100735',
                  href: 'tel:8925100735',
                  color: '#fbbf24',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-[#1f2d1f] bg-[#111a11] hover:border-[#a3e635]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0d160d] border border-[#1f2d1f] flex items-center justify-center flex-shrink-0"
                    style={{ color: s.color }}>
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#d1fae5]">{s.label}</p>
                    <p className="text-xs font-mono text-[#6b7280] truncate">{s.sub}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6b7280] group-hover:text-[#a3e635] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>

            {/* Availability card */}
            <div className="mt-4 p-4 rounded-xl border border-[#a3e635]/20 bg-[#a3e635]/5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute h-full w-full rounded-full bg-[#a3e635] opacity-75" />
                <span className="relative rounded-full h-2.5 w-2.5 bg-[#a3e635]" />
              </span>
              <p className="text-xs font-mono text-[#a3e635]">
                Available for full-time & freelance
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#050905]/95 backdrop-blur-xl border-b border-[#1f2d1f]'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#a3e635] flex items-center justify-center shadow-[0_0_20px_#a3e63550]">
            <span className="font-heading font-black text-[#050905] text-sm">S</span>
          </div>
          <span className="font-heading font-bold text-[#f0fdf4] text-lg tracking-tight group-hover:text-[#a3e635] transition-colors">
            Shalini G
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-[#6b7280] hover:text-[#a3e635] transition-colors relative group"
            >
              {l.name}
              <span className="absolute bottom-0 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 bg-[#a3e635] transition-transform origin-left" />
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/shaliniga" target="_blank" rel="noreferrer"
            className="text-[#6b7280] hover:text-[#a3e635] transition-colors p-1" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/shalini-g-239b7b29b/" target="_blank" rel="noreferrer"
            className="text-[#6b7280] hover:text-[#a3e635] transition-colors p-1" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="ml-2 flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#a3e635] text-[#a3e635] text-sm font-semibold hover:bg-[#a3e635] hover:text-[#050905] transition-all duration-200 shadow-[0_0_15px_#a3e63520] hover:shadow-[0_0_25px_#a3e63540]"
          >
            Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#f0fdf4] p-2 focus:outline-none hover:text-[#a3e635] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6 text-[#a3e635]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0d160d]/98 backdrop-blur-2xl border-b border-[#1f2d1f] overflow-hidden"
          >
            <nav className="flex flex-col px-5 py-6 gap-2">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[#d1fae5] font-medium border-b border-[#1f2d1f]/60 hover:text-[#a3e635] transition-colors flex items-center justify-between text-base"
                >
                  {l.name} <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              
              <div className="flex items-center justify-between pt-4 mt-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/shaliniga"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg border border-[#1f2d1f] text-[#6b7280] hover:text-[#a3e635] hover:border-[#a3e635]/40 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shalini-g-239b7b29b/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg border border-[#1f2d1f] text-[#6b7280] hover:text-[#a3e635] hover:border-[#a3e635]/40 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 ml-4 py-2.5 text-center rounded-xl bg-[#a3e635] text-[#050905] font-bold text-sm hover:bg-[#84cc16] transition-all shadow-[0_0_20px_#a3e63530]"
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

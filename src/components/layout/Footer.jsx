import React from 'react';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1f2d1f] bg-[#050905]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#a3e635] flex items-center justify-center shadow-[0_0_12px_#a3e63540]">
            <span className="font-heading font-black text-[#050905] text-xs">S</span>
          </div>
          <span className="font-heading font-bold text-[#f0fdf4]">
            Shalini G
          </span>
          <span className="text-[#1f2d1f] text-sm font-mono ml-2">© {year}</span>
        </div>

        {/* Center */}
        <p className="text-xs font-mono text-[#6b7280] text-center">
          Designed & built with 💚 in India
        </p>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a href="#home" className="text-xs font-mono text-[#6b7280] hover:text-[#a3e635] transition-colors">Top ↑</a>
          <a href="https://github.com/shaliniga" target="_blank" rel="noreferrer"
            className="text-[#6b7280] hover:text-[#a3e635] transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/shalini-g-239b7b29b/" target="_blank" rel="noreferrer"
            className="text-[#6b7280] hover:text-[#a3e635] transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

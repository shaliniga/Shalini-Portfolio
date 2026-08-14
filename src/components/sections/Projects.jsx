import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    num: '01',
    title: 'Ecart-Website',
    tagline: 'Modern online shopping platform',
    description: 'A full-stack eCommerce application featuring product listing, shopping cart functionality, email notifications, and seamless checkout with responsive design.',
    impact: 'Full-stack MERN capabilities',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1400',
    github: 'https://github.com/shaliniga/Ecart-Website',
    live: 'https://ecart-website-r5yq.onrender.com/',
  },
  {
    num: '02',
    title: 'Map',
    tagline: 'Interactive location finder',
    description: 'A React-based mapping application using Leaflet.js and OpenStreetMap. Features dynamic search updates, API integration, and keyboard navigation.',
    impact: 'Real-time interactive geocoding',
    tags: ['React', 'Leaflet.js', 'OpenStreetMap', 'CSS'],
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1400',
    github: 'https://github.com/shaliniga/Map',
    live: 'https://map-liard-theta.vercel.app/',
  },
  {
    num: '03',
    title: 'Dice Game',
    tagline: 'Interactive 2-player browser game',
    description: 'A competitive 2-player dice game. Roll to accumulate points, hold to secure your score, but beware of rolling a 1! First to 100 wins.',
    impact: 'Fun interactive game mechanics',
    tags: ['JavaScript', 'HTML', 'CSS', 'Game Logic'],
    image: 'https://images.unsplash.com/photo-1595624871930-6e8537998592?auto=format&fit=crop&q=80&w=1400',
    github: 'https://github.com/shaliniga/Dice-Game',
    live: 'https://dice-game-pied-kappa.vercel.app/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden border-t border-[#1f2d1f]">
      {/* Number watermark */}
      <div className="number-bg absolute -top-6 right-0 select-none pointer-events-none text-right">04</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Label */}
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
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
          Selected <span className="text-gradient-lime">Work</span>
        </motion.h2>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative rounded-3xl overflow-hidden border border-[#1f2d1f] hover:border-[#a3e635]/30 transition-all duration-500"
            >
              {/* Full-bleed image */}
              <div className="relative w-full aspect-[16/7] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.3] group-hover:brightness-[0.4]"
                />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-end justify-between p-8 md:p-10">

                  {/* Left: text */}
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-[#a3e635]/60 text-sm">{p.num}</span>
                      <span className="h-px w-10 bg-[#a3e635]/30" />
                    </div>
                    <h3 className="font-heading font-black text-[#f0fdf4] mb-2 leading-tight"
                      style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
                      {p.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm mb-4 max-w-lg">{p.tagline}</p>

                    {/* Impact */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] text-xs font-mono mb-5">
                      {p.impact}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-mono text-[#d1fae5] bg-[#050905]/70 border border-[#1f2d1f] rounded-lg">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: link buttons */}
                  <div className="flex gap-3 mt-6 md:mt-0 md:ml-8 flex-shrink-0">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#a3e635] text-[#050905] text-sm font-bold hover:bg-[#84cc16] transition-colors shadow-[0_0_20px_#a3e63540]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#050905]/80 backdrop-blur border border-[#1f2d1f] text-[#d1fae5] text-sm font-semibold hover:border-[#a3e635]/30 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
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

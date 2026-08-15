import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import mindtrackLogo from '../../assets/logo.jpeg';
import mindtrackMobileIcon from '../../assets/icon.png';

const projects = [
  {
    num: '01',
    title: 'MindTrack',
    tagline: 'Mental Wellness & Burnout Analytics Platform',
    description: 'A comprehensive mental wellness tracking platform designed to help organizations monitor employee wellness, identify early burnout trends, and manage team wellness metrics with role-based confidentiality.',
    impact: 'Mental Wellness & Burnout Analytics',
    tags: ['React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Supabase', 'Tailwind CSS', 'Recharts', 'Zustand', 'React Query'],
    image: mindtrackLogo,
    mobileImage: mindtrackMobileIcon,
    github: 'https://github.com/shaliniga/mindtrack',
    live: 'https://mindtrack-03h8.onrender.com/',
  },
  {
    num: '02',
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
    num: '03',
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
    num: '04',
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
              {/* Full-bleed background image container */}
              <div className="relative w-full min-h-[380px] md:min-h-0 md:aspect-[16/7] overflow-hidden flex flex-col justify-end">
                <picture className="absolute inset-0 w-full h-full pointer-events-none">
                  {p.mobileImage && (
                    <source media="(max-width: 767px)" srcSet={p.mobileImage} />
                  )}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.25] group-hover:brightness-[0.35]"
                  />
                </picture>
                
                {/* Gradient overlay to guarantee crisp text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050905]/95 via-[#050905]/70 to-[#050905]/30 md:from-[#050905]/85 md:via-[#050905]/40 md:to-transparent pointer-events-none" />

                {/* Content overlay */}
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between p-6 sm:p-8 md:p-10 gap-6">

                  {/* Left: text */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-[#a3e635]/80 text-sm font-semibold">{p.num}</span>
                      <span className="h-px w-10 bg-[#a3e635]/30" />
                    </div>
                    <h3 className="font-heading font-black text-[#f0fdf4] mb-2 leading-tight"
                      style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
                      {p.title}
                    </h3>
                    <p className="text-[#9ca3af] text-sm mb-4 max-w-lg">{p.tagline}</p>

                    {/* Impact */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] text-xs font-mono mb-4">
                      {p.impact}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-mono text-[#d1fae5] bg-[#050905]/80 border border-[#1f2d1f] rounded-lg">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: link buttons */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:w-auto md:ml-8 flex-shrink-0">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#a3e635] text-[#050905] text-sm font-bold hover:bg-[#84cc16] transition-colors shadow-[0_0_20px_#a3e63540]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Site
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#050905]/90 backdrop-blur border border-[#1f2d1f] text-[#d1fae5] text-sm font-semibold hover:border-[#a3e635]/30 hover:text-[#a3e635] transition-colors"
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


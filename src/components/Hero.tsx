import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { heroStats } from '../data/content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-600/8 rounded-full blur-[100px] animate-pulse-slow" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          <span className="text-accent-300 text-xs font-medium tracking-wide">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight text-balance leading-[1.05]"
        >
          Data doesn't lie.
          <br />
          <span className="gradient-text">It just stays quiet</span>
          <br />
          <span className="text-ink-400 text-3xl md:text-5xl font-medium">
            until someone asks the right question.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-ink-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-balance"
        >
          I'm <span className="text-white font-medium">Yusuf</span> — a Data Analyst
          and BI Consultant based in Kaduna, Nigeria, helping e-commerce businesses
          turn scattered numbers into decisions that move revenue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary">
            Let's talk about your data
            <ArrowDown size={16} />
          </a>
          <a href="#projects" className="btn-ghost">
            See my work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-5 text-center hover:border-accent-500/30 transition-colors duration-300"
            >
              <div className="font-display text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-ink-400 text-xs mt-1 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-ink-500"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}

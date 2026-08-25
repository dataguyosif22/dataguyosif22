import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-accent-400 text-sm font-mono mb-3 tracking-wider uppercase">
            04 — Projects
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            Built and shipped
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl">
            Two app MVPs I built on my own — because the best way to understand data
            tooling is to build it yourself.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 relative overflow-hidden group hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-ink-900/80 border border-ink-700/50 flex items-center justify-center">
                    <project.icon className="w-7 h-7 text-accent-400" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-ink-500 group-hover:text-accent-400 group-hover:rotate-12 transition-all duration-300" />
                </div>

                <div className="text-accent-400 text-xs font-mono tracking-wider uppercase mb-1">
                  {project.tagline}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-ink-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-ink-800/60 border border-ink-700/50 text-ink-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

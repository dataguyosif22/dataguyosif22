import { motion } from 'framer-motion'
import { achievements } from '../data/content'

export default function Proof() {
  return (
    <section id="proof" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-accent-400 text-sm font-mono mb-3 tracking-wider uppercase">
            03 — Proof
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            A bit of proof
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-7 relative overflow-hidden group hover:border-accent-500/30 transition-all duration-300"
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-500/5 rounded-full blur-2xl group-hover:bg-accent-500/10 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <span className="text-ink-400 text-xs font-mono tracking-wide">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-ink-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

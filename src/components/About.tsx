import { motion } from 'framer-motion'
import { skills, currently } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-accent-400 text-sm font-mono mb-3 tracking-wider uppercase">
            01 — About
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8 text-balance">
            Finding the one insight that changes
            <br />
            what a founder does on Monday morning.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-ink-300 text-lg leading-relaxed"
          >
            <p>
              I've spent the last few years in the trenches of real client data:
              messy CRMs, half-tracked funnels, dashboards nobody opens. My job
              isn't to build another report that sits there. It's to find the one
              insight that changes what a founder does on Monday morning.
            </p>
            <p>
              My work spans the full analytics lifecycle — from auditing raw data
              quality to building dashboards that teams actually use. I
              specialize in e-commerce analytics: churn, retention, funnel leakage,
              and customer LTV.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-white font-display font-semibold mb-4 text-sm tracking-wider uppercase text-ink-400">
                Tools I reach for
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card p-4 flex items-center gap-3 hover:border-accent-500/30 transition-colors duration-300 group"
                  >
                    <skill.icon className="w-5 h-5 text-accent-400 group-hover:scale-110 transition-transform" />
                    <span className="text-ink-200 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold mb-4 text-sm tracking-wider uppercase text-ink-400">
                Currently
              </h3>
              <div className="space-y-3">
                {currently.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-ink-300 text-sm leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

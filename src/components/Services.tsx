import { motion } from 'framer-motion'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-accent-400 text-sm font-mono mb-3 tracking-wider uppercase">
            02 — Services
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            What I actually do
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl">
            From scattered data to decisions that move revenue — here's how I help
            e-commerce businesses grow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-7 hover:border-accent-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-ink-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

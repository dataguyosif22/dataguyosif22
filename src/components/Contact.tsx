import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, Loader as Loader2 } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { socials } from '../data/content'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    setStatus('loading')
    setErrorMsg('')

    const { error } = await supabase.from('contact_messages').insert({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    })

    if (error) {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or email me directly.')
      return
    }

    setStatus('success')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-accent-400 text-sm font-mono mb-3 tracking-wider uppercase">
            05 — Contact
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            If your data has answers
            <br />
            nobody's asking it yet,
          </h2>
          <p className="text-accent-400 text-xl md:text-2xl font-display font-medium">
            let's talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 glass-card p-7"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-ink-300 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={status === 'loading'}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-ink-950/60 border border-ink-700/50 text-white placeholder-ink-500
                    focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all
                    disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-ink-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'loading'}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-ink-950/60 border border-ink-700/50 text-white placeholder-ink-500
                    focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all
                    disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-ink-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={status === 'loading'}
                  rows={4}
                  placeholder="Tell me about your data challenges..."
                  className="w-full px-4 py-3 rounded-xl bg-ink-950/60 border border-ink-700/50 text-white placeholder-ink-500
                    focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all
                    disabled:opacity-50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 text-accent-400 text-sm"
                >
                  <CheckCircle2 size={18} />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 text-red-400 text-sm"
                >
                  <AlertCircle size={18} />
                  {errorMsg}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-ink-400 text-sm leading-relaxed mb-6">
              Prefer to reach out directly? Here's where you can find me.
            </p>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 hover:border-accent-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <social.icon className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    {social.label}
                  </div>
                  <div className="text-ink-500 text-xs truncate">
                    {social.href.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

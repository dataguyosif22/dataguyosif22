import { socials } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-ink-800/50 py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent-500/20 border border-accent-500/30 flex items-center justify-center">
              <span className="font-display font-bold text-accent-400 text-xs">Y</span>
            </div>
            <span className="text-ink-400 text-sm">
              Yusuf Tunde Dunmoye — Data Analyst & BI Consultant
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-500 hover:text-accent-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-ink-600 text-xs">
          © {new Date().getFullYear()} Yusuf Tunde Dunmoye. Built with care.
        </div>
      </div>
    </footer>
  )
}

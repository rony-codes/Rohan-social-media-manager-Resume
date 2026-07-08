import { motion } from 'framer-motion'
import siteConfig from '../siteConfig'

const links = [
  { href: '#work', label: 'Services' },
  { href: '#client', label: 'Client' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 bg-ink/80 backdrop-blur-md border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          <a
            href="#top"
            className="font-display font-semibold text-xl tracking-tight text-fg"
          >
            {siteConfig.name}<span className="text-silver">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest text-fgDim">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="relative group py-2">
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-silver transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-silver-light border border-silver/25 bg-silver/5 rounded-full px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-silver opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-silver" />
              </span>
              {siteConfig.availability}
            </span>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-widest border border-fg/15 rounded-full px-4 py-2 text-fg hover:bg-fg hover:text-ink transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

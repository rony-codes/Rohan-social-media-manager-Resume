import { motion } from 'framer-motion'
import { Instagram, Youtube, ArrowUpRight } from 'lucide-react'
import siteConfig from '../siteConfig'
import AnimatedNumber from './AnimatedNumber'

export default function FeaturedClient() {
  const c = siteConfig.featuredClient

  return (
    <section id="client" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="font-mono text-[11px] uppercase tracking-widest text-silver mb-4"
        >
          Featured Client — 01
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold text-4xl md:text-6xl text-fg max-w-3xl text-balance mb-14"
        >
          {c.name}, {c.tag.toLowerCase()}
        </motion.h2>

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-fgDim mb-3">
              {c.handle}
            </p>
            <p className="font-sans text-lg text-fg leading-relaxed">{c.blurb}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={c.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-fg/15 px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-fg hover:border-silver hover:text-silver-light transition-colors duration-300"
              >
                <Instagram size={14} /> View Instagram <ArrowUpRight size={12} />
              </a>
              <a
                href={c.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-fg/15 px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-fg hover:border-silver hover:text-silver-light transition-colors duration-300"
              >
                <Youtube size={14} /> View YouTube <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden"
          >
            <div className="bg-inkRaised p-6 flex flex-col gap-1">
              <Instagram size={16} className="text-silver mb-2" strokeWidth={1.5} />
              <span className="font-display font-semibold text-3xl text-fg">
                <AnimatedNumber value={c.instagram.followers} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-fgDim">
                {c.instagram.label}
              </span>
            </div>
            <div className="bg-inkRaised p-6 flex flex-col gap-1">
              <Youtube size={16} className="text-silver mb-2" strokeWidth={1.5} />
              <span className="font-display font-semibold text-3xl text-fg">
                <AnimatedNumber value={c.youtube.subscribers} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-fgDim">
                {c.youtube.label}
              </span>
            </div>
            <div className="bg-inkRaised p-6 col-span-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-fgDim leading-relaxed">
                Role: Content strategy · Filming direction · Editing · Posting · Community management
              </span>
            </div>
          </motion.div>
        </div>

        {/* Placeholder row for future clients */}
        <div className="mt-10 grid sm:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="bg-ink border border-dashed border-line p-8 flex items-center justify-center min-h-[120px]"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-fgDim/60">
                {siteConfig.moreClientsNote} 
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Instagram, Linkedin, Twitter, Youtube, AtSign } from 'lucide-react'
import { motion } from 'framer-motion'
import siteConfig from '../siteConfig'

const icons = {
  Instagram: Instagram,
  LinkedIn: Linkedin,
  'Twitter / X': Twitter,
  Threads: AtSign,
  YouTube: Youtube,
}

export default function Platforms() {
  return (
    <section className="py-16 md:py-20 border-b border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-widest text-fgDim mb-10 text-center">
          Platforms I run day to day
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {siteConfig.platforms.map((p, i) => {
            const Icon = icons[p.name] || AtSign
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2.5 text-fgDim hover:text-silver-light transition-colors duration-300 cursor-default gpu"
              >
                <Icon size={20} strokeWidth={1.5} />
                <span className="font-sans text-sm md:text-base">{p.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import siteConfig from '../siteConfig'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % siteConfig.roleWords.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { y: 18, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="top" className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
      <div className="absolute top-24 right-6 md:right-10 font-mono text-[10px] uppercase tracking-widest text-fgDim text-right hidden md:block">
        <p>Social Media</p>
        <p>Management &amp; Strategy</p>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver mb-6"
          >
            {siteConfig.heroEyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-semibold text-[13vw] md:text-[6vw] leading-[0.98] tracking-tightest text-fg text-balance max-w-4xl"
          >
            I build{' '}
            <span className="inline-block bg-fg text-ink px-3 rounded-md">feeds</span>
            <br />
            people can&rsquo;t scroll past.
          </motion.h1>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-end gap-3 md:gap-4">
            <span className="font-mono text-sm md:text-base text-fgDim">I&rsquo;m a full-time</span>
            <span className="relative inline-flex h-8 md:h-10 items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={siteConfig.roleWords[index]}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-sans font-medium text-sm md:text-base text-silver-light border-b border-silver/40 pb-0.5 gpu"
                >
                  {siteConfig.roleWords[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl font-sans text-base md:text-lg text-fgDim leading-relaxed"
          >
            {siteConfig.heroSubtext}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-fg text-ink px-6 py-3.5 font-mono text-[11px] uppercase tracking-widest hover:bg-silver-light transition-colors duration-300"
            >
              {siteConfig.ctaConsultation}
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-fg/15 text-fg px-6 py-3.5 font-mono text-[11px] uppercase tracking-widest hover:border-silver hover:text-silver-light transition-colors duration-300"
            >
              Download Portfolio ↗
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

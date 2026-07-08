import { motion } from 'framer-motion'
import siteConfig from '../siteConfig'

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-inkRaised border-y border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* TODO: replace this placeholder block with <img src="/your-photo.jpg" /> */}
          <div className="aspect-[4/5] rounded-2xl bg-ink border border-line flex items-center justify-center relative overflow-hidden">
            <span className="font-display font-semibold text-6xl text-fg/10">
              {siteConfig.name[0]}
            </span>
            <div className="absolute top-2 bottom-0 left-0 font-mono text-[10px] uppercase tracking-widest text-fgDim">
             <img src= 'https://github.com/rony-codes/Rohan-social-media-manager-Resume/blob/main/src/assests/RohanImg.jpeg?raw=true' />
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 bg-ink border border-line rounded-full px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-silver-light shadow-sm">
            {siteConfig.availability}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-silver mb-4">
            About
          </p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-fg mb-8 text-balance">
            A few lines about {siteConfig.name}
          </h2>
          {siteConfig.bio.map((p, i) => (
            <p key={i} className="font-sans text-base md:text-lg text-fgDim leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <p className="font-mono text-[10px] uppercase tracking-widest text-fgDim/50 mt-6">
          
          </p>
        </motion.div>
      </div>
    </section>
  )
}

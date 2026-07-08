import { motion } from 'framer-motion'
import siteConfig from '../siteConfig'

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Services() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-4xl md:text-5xl text-fg"
          >
            What I actually do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-[11px] uppercase tracking-widest text-fgDim max-w-xs text-right"
          >
            Six ways I plug into a brand's social presence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden">
          {siteConfig.services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="group relative bg-ink hover:bg-inkRaised p-8 md:p-10 min-h-[220px] flex flex-col justify-between transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-silver">{s.label}</span>
                <span className="h-8 w-8 rounded-full border border-fg/10 flex items-center justify-center text-fgDim group-hover:border-silver group-hover:text-silver-light group-hover:rotate-45 transition-all duration-300">
                  ↗
                </span>
              </div>
              <div>
                <h3 className="font-sans font-medium text-xl text-fg mb-2">{s.title}</h3>
                <p className="font-sans text-sm text-fgDim leading-relaxed">{s.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

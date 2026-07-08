import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Twitter, Youtube, AtSign, ArrowUpRight } from 'lucide-react'
import siteConfig from '../siteConfig'

const icons = {
  Instagram: Instagram,
  LinkedIn: Linkedin,
  'Twitter / X': Twitter,
  Threads: AtSign,
  YouTube: Youtube,
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend attached — this opens a pre-filled email.
  // TODO: swap for Formspree / EmailJS / your own endpoint when ready.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Consultation request from ${form.name || 'website'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-silver mb-4">
              {siteConfig.ctaContact}
            </p>
            <h2 className="font-display font-semibold text-4xl md:text-6xl text-fg mb-8 text-balance">
              Have a brand that
              <br /> needs a following?
            </h2>
            <p className="font-sans text-fgDim mb-10 max-w-md leading-relaxed">
              Tell me a bit about the brand and what "growth" would actually mean
              for you — followers, bookings, sales. I'll reply within a couple of days.
            </p>

            <div className="space-y-3 font-mono text-sm text-fgDim mb-10">
              <p>{siteConfig.location}</p>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-silver-light transition-colors">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="block hover:text-silver-light transition-colors">
                {siteConfig.phone}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {siteConfig.socials.map((s) => {
                const Icon = icons[s.name] || AtSign
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fgDim hover:text-silver-light transition-colors duration-300"
                  >
                    <Icon size={14} /> {s.name} <ArrowUpRight size={11} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-fgDim mb-2">
                Name
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-line focus:border-silver outline-none py-3 font-sans text-fg placeholder:text-fgDim/50 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-fgDim mb-2">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@brand.com"
                className="w-full bg-transparent border-b border-line focus:border-silver outline-none py-3 font-sans text-fg placeholder:text-fgDim/50 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-fgDim mb-2">
                What do you need help with?
              </label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your brand and goals..."
                className="w-full bg-transparent border-b border-line focus:border-silver outline-none py-3 font-sans text-fg placeholder:text-fgDim/50 transition-colors duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-fg text-ink px-7 py-4 font-mono text-[11px] uppercase tracking-widest hover:bg-silver-light transition-colors duration-300"
            >
              {siteConfig.ctaConsultation}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

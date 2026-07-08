import { motion } from 'framer-motion'

/**
 * Displays a stat number with a single clean reveal (opacity + transform only,
 * both GPU-friendly) instead of a per-frame count-up. Count-up animations that
 * rewrite textContent every frame cause visible jitter, especially with
 * proportional/serif digits — this avoids that entirely while still feeling alive.
 */
export default function AnimatedNumber({ value, suffix = '', className = '' }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-block gpu ${className}`}
    >
      {value}
      {suffix}
    </motion.span>
  )
}

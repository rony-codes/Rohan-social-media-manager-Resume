import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import siteConfig from '../siteConfig'
import AnimatedNumber from './AnimatedNumber'

function StatCard({ stat }) {
  return (
    <div className="flex items-center gap-4 shrink-0 px-8 py-6 border-r border-line">
      <span className="font-display font-semibold text-3xl md:text-4xl text-fg">
        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-fgDim max-w-[9rem] leading-snug">
        {stat.label}
      </span>
    </div>
  )
}

export default function Ticker() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // xPercent + transform-only animation keeps this on the GPU, which is
    // what makes it feel smooth instead of glitchy.
    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 32,
      ease: 'none',
      repeat: -1,
    })

    const wrapper = track.parentElement
    const onEnter = () => tween.timeScale(0.15)
    const onLeave = () => tween.timeScale(1)
    wrapper?.addEventListener('mouseenter', onEnter)
    wrapper?.addEventListener('mouseleave', onLeave)

    return () => {
      tween.kill()
      wrapper?.removeEventListener('mouseenter', onEnter)
      wrapper?.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const stats = siteConfig.tickerStats

  return (
    <section className="relative bg-inkRaised border-y border-line grain pt-6 pb-2">
      <p className="relative z-10 px-6 md:px-10 mb-3 font-mono text-[10px] uppercase tracking-widest text-fgDim/70">
        Live numbers
      </p>
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex w-max gpu">
          {[...stats, ...stats].map((s, i) => (
            <StatCard stat={s} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

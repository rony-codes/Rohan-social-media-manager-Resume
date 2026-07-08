import siteConfig from '../siteConfig'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-fgDim/70">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <a
          href="#top"
          className="font-mono text-[10px] uppercase tracking-widest text-fgDim/70 hover:text-silver-light transition-colors duration-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

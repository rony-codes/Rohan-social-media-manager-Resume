import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Services from './components/Services'
import Platforms from './components/Platforms'
import FeaturedClient from './components/FeaturedClient'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg selection:bg-silver-light selection:text-ink">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Platforms />
        <FeaturedClient />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

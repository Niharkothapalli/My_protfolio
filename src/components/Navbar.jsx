import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Academic', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-black border-b-2 border-black"
        style={{ boxShadow: scrolled ? '0 4px 0px rgba(0,0,0,0.15)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 font-bold text-base tracking-widest uppercase text-white hover:opacity-70 transition-opacity"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            NK_PORTFOLIO
          </button>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="relative group text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-150"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  {link}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full" />
                </button>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="text-xs uppercase tracking-widest border-2 border-white text-white px-4 py-2 font-bold hover:bg-white hover:text-black transition-all duration-150"
                style={{ fontFamily: "'Share Tech Mono', monospace", boxShadow: '2px 2px 0px rgba(255,255,255,0.3)' }}
              >
                RESUME &gt;
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-zinc-800 w-full"
          >
            <ul className="flex flex-col px-6 py-5 gap-4">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white w-full text-left py-1 transition-colors"
                  >
                    &gt; {link}
                  </button>
                </li>
              ))}
              <li>
                <a href="/resume.pdf" download className="font-mono text-xs uppercase tracking-widest border-2 border-white text-white px-4 py-2 inline-block hover:bg-white hover:text-black transition-all">
                  DOWNLOAD RESUME
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

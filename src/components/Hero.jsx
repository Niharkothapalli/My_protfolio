import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, snapshot } from '../data/portfolio'

const ROLES = personalInfo.roles

function Typewriter() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const t = useRef(null)

  useEffect(() => {
    const cur = ROLES[index]
    if (!deleting && displayed.length < cur.length) {
      t.current = setTimeout(() => setDisplayed(cur.slice(0, displayed.length + 1)), 65)
    } else if (!deleting && displayed.length === cur.length) {
      t.current = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && displayed.length > 0) {
      t.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else {
      setDeleting(false)
      setIndex((i) => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(t.current)
  }, [displayed, deleting, index])

  return (
    <span>
      {displayed}
      <span className="terminal-cursor" />
    </span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'transparent' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

          {/* Left content */}
          <div className="flex-1 md:max-w-xl">

            {/* Terminal line */}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="font-mono text-xs text-muted uppercase tracking-widest mb-3">
              KOTHAPALLI. NIHAR SAI DURGA MANIKANTA
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-6xl md:text-7xl font-bold uppercase tracking-wide text-black leading-none mb-2"
            >
              {personalInfo.name.split(' ')[0]}
              <br />
              <span style={{ WebkitTextStroke: '2px #000', color: 'transparent' }}>
                {personalInfo.name.split(' ')[1]}
              </span>
            </motion.h1>

            {/* Status */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="status-online mb-2 mt-2">
              ECE UNDERGRAD AT VIT BHIMAVARAM
            </motion.div>

            <div className="bp-divider mt-4" />

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-bold uppercase tracking-wider text-black mb-5 h-8 flex items-center"
            >
              <Typewriter />
            </motion.div>

            {/* Recruiter-focused intro */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-dark text-sm leading-relaxed mb-3 max-w-md"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
            Software Engineer and Full Stack Developer specializing in Java, Modern Web Development, Data Engineering, and AI-powered applications.            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-muted text-sm leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              Currently building scalable web platforms and intelligent software solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mb-8">
              <a href="/resume.pdf" download className="btn-primary">
                <i className="ph ph-download-simple" /> DOWNLOAD RESUME
              </a>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                <i className="ph ph-paper-plane-tilt" /> GET IN TOUCH
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-4">
              {[
                { href: personalInfo.github, icon: 'ph-github-logo', label: 'GitHub' },
                { href: personalInfo.linkedin, icon: 'ph-linkedin-logo', label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: 'ph-envelope', label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border-2 border-line bg-white flex items-center justify-center text-muted hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                  style={{ boxShadow: '2px 2px 0px rgba(0,0,0,0.15)' }}
                >
                  <i className={`ph-bold ${icon} text-lg`} />
                </a>
              ))}
              <span className="font-mono text-xs text-muted tracking-widest">@NIHARKOTHAPALLI</span>
            </motion.div>
          </div>

          {/* Right: Photo + snapshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 flex flex-col items-center gap-6"
          >
            {/* Photo frame */}
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-black" style={{ zIndex: 0 }} />
              <div
                className="relative z-10 w-60 h-60 md:w-72 md:h-72 border-2 border-black overflow-hidden angle-br-lg"
                style={{ boxShadow: '6px 6px 0px #000' }}
              >
                <img src="/NPWBG.PNG" alt="Nihar Kothapalli" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 4px)' }} />
              </div>
              <div className="absolute bg-black px-3 py-1.3" style={{ bottom: '-16px', left: '16px', zIndex: 20 }}>
                <span className="font-mono text-xs text-white uppercase tracking-widest">23PA1A0488</span>
              </div>
            </div>

            {/* Quick Profile Snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="w-full border-2 border-black bg-white angle-br mt-4"
              style={{ boxShadow: '4px 4px 0px #000' }}
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b border-line">
                <span className="w-2 h-2 bg-green-500 animate-pulse" />
                <span className="font-mono text-xs text-muted uppercase tracking-widest">PROFILE SNAPSHOT</span>
              </div>
              <div className="grid grid-cols-3 divide-x divide-line">
                {snapshot.map(({ label, value }) => (
                  <div key={label} className="px-3 py-3 text-center">
                    <p className="font-bold text-black text-sm uppercase tracking-tight">{value}</p>
                    <p className="font-mono text-xs text-muted mt-0.5 uppercase tracking-wider leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>


      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-black transition-colors"
        aria-label="Scroll down"
      >
        <i className="ph-bold ph-arrow-down text-xl" />
      </motion.button>
    </section>
  )
}

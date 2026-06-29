import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo, education } from '../data/portfolio'
import { fadeUp, stagger, scaleIn } from '../utils/animations'

const stats = [
  { label: 'Projects Built', value: 6, suffix: '+' },
  { label: 'ECE CGPA', value: 8.75, suffix: '' },
  { label: 'CS Minor CGPA', value: 9.5, suffix: '' },
  { label: 'Internships', value: 3, suffix: '+' },
]

function Counter({ target, suffix, run }) {
  const [count, setCount] = useState(0)
  const frame = useRef(null)

  useEffect(() => {
    if (!run) return
    const isFloat = target % 1 !== 0
    const duration = 1200
    const steps = 60
    const increment = target / steps
    let current = 0
    const tick = () => {
      current = Math.min(current + increment, target)
      setCount(isFloat ? parseFloat(current.toFixed(2)) : Math.floor(current))
      if (current < target) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [run, target])

  return <span>{count}{suffix}</span>
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="section-padding" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>

          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <p className="section-label">01 / PROFILE</p>
            <h2 className="section-heading">About Me</h2>
            <div className="bp-divider" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left */}
            <motion.div variants={fadeUp} className="space-y-6">
              {/* Terminal bio block */}
              <div
                className="border-2 border-black p-6 bg-surface angle-br"
                style={{ boxShadow: '4px 4px 0px #000' }}
              >
                <p className="font-mono text-xs text-muted mb-3 uppercase tracking-widest">&gt; PROFESSIONAL SUMMARY</p>
                <p className="text-dark text-base leading-relaxed">{personalInfo.about}</p>
              </div>

              {/* Tech tags */}
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">CORE STACK //</p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'JavaScript', 'Node.js', 'SQL', 'AI Systems', 'RAG'].map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">EDUCATION //</p>
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="border-l-4 border-black pl-5 py-2"
                  >
                    <h4 className="font-bold uppercase tracking-wide text-black text-base">{edu.degree}</h4>
                    <p className="font-mono text-xs text-muted mt-0.5">{edu.school} · {edu.period}</p>
                    <p className="text-sm text-dark mt-1">
                      CGPA: <strong>{edu.cgpa}</strong> &nbsp;·&nbsp;
                      <span className="text-green-600 font-bold">{edu.highlight}</span>
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Stats + photo */}
            <motion.div variants={stagger} className="space-y-6">
              {/* Photo */}
              <motion.div variants={scaleIn} className="flex justify-center">
                <div className="relative">
                  <div className="absolute top-3 left-3 w-full h-full border border-line" />
                  <div
                    className="relative w-44 h-44 border-2 border-black overflow-hidden angle-br"
                    style={{ boxShadow: '4px 4px 0px #000' }}
                  >
                    <img src="/NPWBG.PNG" alt="Nihar Kothapalli" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </motion.div>
              <div className="flex justify-center mt-4">
                <span className="bg-black text-white font-mono text-xs px-3 py-1 uppercase tracking-widest">2023–2027 · FINAL YEAR</span>
              </div>

              {/* Quote block */}
              <motion.div
                variants={scaleIn}
                className="border-l-4 border-black pl-5 py-3 bg-surface mt-6"
                style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.08)' }}
              >
                <p className="text-sm text-dark leading-relaxed italic">
                  "Bridging modern web development and artificial intelligence to engineer scalable, intelligent, and impactful digital solutions."
                </p>
              </motion.div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ label, value, suffix }) => (
                  <motion.div
                    key={label}
                    variants={scaleIn}
                    className="cyber-box p-5 text-center angle-br"
                  >
                    <p className="text-3xl font-bold text-black cb-title tracking-tight">
                      <Counter target={value} suffix={suffix} run={inView} />
                    </p>
                    <p className="font-mono text-xs text-muted uppercase tracking-wider mt-1 cb-muted">{label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

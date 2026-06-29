import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '../data/portfolio'
import { fadeUp, stagger, slideLeft } from '../utils/animations'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="section-padding" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>

          <motion.div variants={fadeUp} className="mb-14">
            <p className="section-label">03 / DEPLOYMENT LOG</p>
            <h2 className="section-heading">Experience</h2>
            <div className="bp-divider" />
          </motion.div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-black" />

            <div className="space-y-10">
              {experience.map((exp, i) => (
                <motion.div key={exp.company} variants={slideLeft} className="relative pl-16 md:pl-20">
                  {/* Node */}
                  <div className="absolute left-5 md:left-7 -translate-x-1/2 w-4 h-4 bg-black border-2 border-white outline outline-2 outline-black" />

                  <div
                    className="border-2 border-black bg-white p-6 angle-br"
                    style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.12)' }}
                  >
                    {/* Card header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                      <div>
                        <h3 className="font-bold uppercase tracking-wide text-xl text-black">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <i className="ph-bold ph-buildings text-sm text-muted" />
                          <span className="font-mono text-xs text-muted uppercase tracking-widest">{exp.company}</span>
                          <span
                            className="font-mono text-xs px-2 py-0.5 border border-black text-black uppercase tracking-wider"
                            style={{ boxShadow: '1px 1px 0px #000' }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-muted uppercase tracking-wider">
                        <i className="ph ph-calendar text-sm" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Points as terminal log */}
                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-dark">
                          <span className="font-mono text-green-600 mt-0.5 flex-shrink-0">{'>'}</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {/* Education node */}
              <motion.div variants={slideLeft} className="relative pl-16 md:pl-20">
                <div className="absolute left-5 md:left-7 -translate-x-1/2 w-4 h-4 bg-white border-2 border-black outline outline-2 outline-black" />
                <div
                  className="border-2 border-line bg-surface p-5 angle-br"
                  style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.06)' }}
                >
                  <h3 className="font-bold uppercase tracking-wide text-black">B.Tech – Electronics &amp; Communication Engineering</h3>
                  <p className="font-mono text-xs text-muted mt-1 uppercase tracking-wider">Vishnu Institute of Technology</p>
                  <p className="font-mono text-xs text-muted mt-1">2023 – 2027 &nbsp;·&nbsp; CGPA: 8.75 &nbsp;·&nbsp; <span className="text-green-600">MINOR_CS: 9.50</span></p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, stagger, slideLeft } from '../utils/animations'

const education = [
  {
    icon: '🎓',
    level: 'BACHELOR OF TECHNOLOGY',
    degree: 'Electronics & Communication Engineering',
    institution: 'Vishnu Institute of Technology, Bhimavaram',
    period: '2023 – 2027',
    score: '8.75',
    scoreLabel: 'CGPA',
    scoreColor: 'text-green-600',
    tags: ['B.Tech', 'ECE', 'Engineering'],
    highlight: null,
  },
  {
    icon: '🧑🏻‍💻',
    level: 'MINOR DEGREE',
    degree: 'Computer Science',
    institution: 'Vishnu Institute of Technology, Bhimavaram',
    period: '2025 – 2027',
    score: '9.50',
    scoreLabel: 'CGPA',
    scoreColor: 'text-green-500',
    tags: ['Minor', 'CS', 'Software'],
    highlight: 'TOP PERFORMER',
  },
  {
    icon: '🌟',
    level: 'INTERMEDIATE EDUCATION',
    degree: 'Mathematics, Physics & Chemistry (MPC)',
    institution: 'Sri Prakash Junior College',
    board: 'Board of Intermediate Education, Andhra Pradesh',
    period: '2021 – 2023',
    score: '88%',
    scoreLabel: 'PERCENTAGE',
    scoreColor: 'text-blue-600',
    tags: ['MPC', 'Intermediate', 'AP Board'],
    highlight: null,
  },
  {
    icon: '🏫',
    level: 'SECONDARY SCHOOL',
    degree: 'Class X — SSC',
    institution: 'Sri Prakash Vidya Niketan, Tuni',
    board: 'SSC — Andhra Pradesh Board · 2021',
    period: '2021',
    score: '563/600',
    scoreLabel: '93%',
    scoreColor: 'text-purple-600',
    tags: ['SSC', 'AP Board', 'Class X'],
    highlight: null,
  },
]

export default function AcademicProfile() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="academic" className="section-padding" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>

          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <p className="section-label">02 / EDUCATION</p>
            <h2 className="section-heading">Academic Profile</h2>
            <div className="bp-divider" />
            <p className="text-muted text-sm max-w-xl mt-3" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
              My academic journey and educational achievements that have shaped my foundation in engineering and computer science.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-black hidden md:block" style={{ zIndex: 0 }} />

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  variants={slideLeft}
                  className="relative flex gap-8 items-start group"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-black border-2 border-black items-center justify-center text-xl z-10 group-hover:bg-white transition-colors duration-200">
                    <span>{edu.icon}</span>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 border-2 border-black bg-white p-6 angle-br group-hover:shadow-none transition-all duration-200"
                    style={{ boxShadow: '5px 5px 0px #000' }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      {/* Left */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-mono text-xs text-muted uppercase tracking-widest">{edu.level}</span>
                          {edu.highlight && (
                            <span className="bg-black text-white font-mono text-xs px-2 py-0.5 uppercase tracking-widest">
                              {edu.highlight}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold uppercase tracking-wide text-black text-base leading-snug">{edu.degree}</h3>
                        <p className="font-mono text-xs text-dark mt-1">{edu.institution}</p>
                        {edu.board && <p className="font-mono text-xs text-muted mt-0.5">{edu.board}</p>}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {edu.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Score + Period */}
                      <div className="text-right flex-shrink-0">
                        <p className={`text-3xl font-bold tracking-tight ${edu.scoreColor}`}>{edu.score}</p>
                        <p className="font-mono text-xs text-muted uppercase tracking-widest">{edu.scoreLabel}</p>
                        <div className="mt-2 border border-line px-3 py-1 inline-block">
                          <p className="font-mono text-xs text-muted uppercase tracking-widest">{edu.period}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom cap dot */}
            <div className="hidden md:flex absolute left-0 w-12 h-12 items-center justify-center" style={{ bottom: '-24px', zIndex: 10 }}>
              <div className="w-5 h-5 rounded-full bg-black border-4 border-white" style={{ boxShadow: '0 0 0 2px #000' }} />
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  )
}

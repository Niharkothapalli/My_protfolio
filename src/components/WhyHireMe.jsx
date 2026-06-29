import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { whyHireMe, currentlyLearning } from '../data/portfolio'
import { fadeUp, stagger, scaleIn } from '../utils/animations'

export default function WhyHireMe() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="whyhireme" className="section-padding" style={{ background: 'rgba(244,244,245,0.5)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>

          <motion.div variants={fadeUp} className="mb-14">
            <p className="section-label">06 / VALUE PROPOSITION</p>
            <h2 className="section-heading">Why Work With Me?</h2>
            <div className="bp-divider" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Why hire me checklist */}
            <motion.div variants={fadeUp}>
              <div
                className="border-2 border-black bg-white angle-br-lg"
                style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.12)' }}
              >
                <div className="flex items-center gap-2 px-5 py-3 border-b-2 border-black bg-black">
                  <span className="w-2 h-2 bg-green-500 animate-pulse" />
                  <span className="font-mono text-xs text-white uppercase tracking-widest">What Makes Me a Strong Candidate</span>
                </div>
                <div className="p-6 grid sm:grid-cols-2 gap-3">
                  {whyHireMe.map(({ text, icon }) => (
                    <motion.div
                      key={text}
                      variants={scaleIn}
                      className="flex items-center gap-3 py-2.5 px-3 border border-line bg-surface hover:bg-black hover:text-white hover:border-black transition-all duration-150 group"
                    >
                      <i className={`ph-bold ${icon} text-base text-black group-hover:text-white flex-shrink-0`} />
                      <span className="font-bold text-sm uppercase tracking-wide">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Currently Learning */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div
                className="border-2 border-black bg-white angle-br"
                style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.12)' }}
              >
                <div className="flex items-center gap-2 px-5 py-3 border-b-2 border-black bg-black">
                  <i className="ph-bold ph-graduation-cap text-white text-sm" />
                  <span className="font-mono text-xs text-white uppercase tracking-widest">CURRENTLY_LEARNING.LOG</span>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  {currentlyLearning.map((item, i) => (
                    <div key={item} className="flex items-center gap-3 py-2 px-3 border border-line bg-surface">
                      <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
                      <span className="w-1.5 h-1.5 bg-blue-500 flex-shrink-0" />
                      <span className="font-mono text-xs uppercase tracking-wider text-dark">{item}</span>
                      <span className="ml-auto font-mono text-xs text-blue-500">IN_PROGRESS</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability card */}
              <div
                className="border-2 border-black bg-black text-white p-6 angle-br"
                style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
              >
                <p className="font-mono text-xs text-green-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  OPEN TO OPPORTUNITIES
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {['Software Engineering', 'Full-Stack Development', 'Backend Development', 'AI Engineering', 'Web Development', 'Data Engineering'].map((role) => (
                    <div key={role} className="flex items-center gap-2 text-sm text-zinc-300">
                      <span className="text-green-400">✓</span>
                      <span className="font-bold uppercase tracking-wide text-xs">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

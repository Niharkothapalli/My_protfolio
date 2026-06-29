import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills, currentlyLearning } from '../data/portfolio'
import { fadeUp, stagger, scaleIn } from '../utils/animations'

const categoryIcons = {
  'Languages': 'ph-code',
  'Frontend': 'ph-layout',
  'Backend & Databases': 'ph-database',
  'AI & Generative AI': 'ph-robot',
  'Tools & Platforms': 'ph-wrench',
  'CS Fundamentals': 'ph-graduation-cap',
  'Currently Learning': 'ph-lightning',
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="section-padding" style={{ background: 'rgba(244,244,245,0.6)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>

          <motion.div variants={fadeUp} className="mb-14">
            <p className="section-label">02 / SYSTEMS</p>
            <h2 className="section-heading">Technical Skills</h2>
            <div className="bp-divider" />
          </motion.div>

          {/* Category grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={scaleIn}
                className="border-2 border-black bg-white angle-br"
                style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.12)' }}
              >
                {/* Card header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-black bg-black">
                  <i className={`ph-bold ${categoryIcons[category]} text-white text-sm`} />
                  <span className="font-mono text-xs text-white uppercase tracking-widest">{category}</span>
                </div>
                {/* Skills list */}
                <div className="p-4 flex flex-col gap-2">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 py-1.5 px-3 border border-line bg-surface hover:bg-black hover:text-white hover:border-black transition-all duration-150 group"
                    >
                      <span className="w-1.5 h-1.5 bg-black group-hover:bg-white flex-shrink-0" />
                      <span className="font-mono text-xs uppercase tracking-wider">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* All tech badge cloud */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-2 bg-green-500 animate-pulse" />
              <p className="font-mono text-xs text-muted uppercase tracking-widest">ALL TECHNOLOGIES // FULL INDEX</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.values(skills).flat().map((name) => (
                <span
                  key={name}
                  className="tag cursor-default hover:bg-black hover:text-white hover:border-black transition-all duration-150"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

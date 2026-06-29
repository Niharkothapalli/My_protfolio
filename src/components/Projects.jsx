import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '../data/portfolio'
import { fadeUp, stagger, scaleIn } from '../utils/animations'

const statusColors = {
  'FastAPI': 'text-blue-600', 'Python': 'text-blue-600',
  'Node.js': 'text-green-600', 'Firebase': 'text-orange-500',
  'Gemini API': 'text-cyan-600', 'FAISS': 'text-cyan-600',
  'RAG': 'text-purple-600', 'Express.js': 'text-green-600',
}

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={scaleIn}
      className="cyber-box flex flex-col group angle-br-lg"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-line group-hover:border-zinc-700 transition-colors">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-green-500" />
          <span className="font-mono text-xs text-muted uppercase tracking-widest cb-muted">PROJECT.EXE</span>
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted uppercase tracking-wider hover:text-black cb-muted cb-icon flex items-center gap-1 transition-colors"
          >
            <i className="ph-bold ph-github-logo" /> GITHUB
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted uppercase tracking-wider hover:text-black cb-muted cb-icon flex items-center gap-1 transition-colors ml-3"
            >
              <i className="ph-bold ph-arrow-square-out" /> DEMO
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-4">
          <span className="text-3xl">{project.icon}</span>
          <div>
            <h3 className="font-bold uppercase tracking-wide text-xl text-black cb-title">{project.title}</h3>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tech.map((t) => (
                <span key={t} className={`font-mono text-xs ${statusColors[t] || 'text-muted'} cb-muted`}>{t}</span>
              )).reduce((acc, el, i) => i === 0 ? [el] : [...acc, <span key={`sep-${i}`} className="text-muted font-mono text-xs cb-muted">/</span>, el], [])}
            </div>
          </div>
        </div>

        <p className="text-sm text-muted leading-relaxed mb-5 flex-1 cb-muted">{project.description}</p>

        {/* Features */}
        <div>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2 cb-muted">KEY_MODULES //</p>
          <div className="flex flex-wrap gap-1.5">
            {project.features.map((f) => (
              <span key={f} className="tag cb-tag">{f}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="section-padding" style={{ background: 'rgba(244,244,245,0.5)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>

          <motion.div variants={fadeUp} className="mb-14">
            <p className="section-label">04 / BUILD LOG</p>
            <h2 className="section-heading">Featured Projects</h2>
            <div className="bp-divider" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-7">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <a
              href="https://github.com/Niharkothapalli"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <i className="ph-bold ph-github-logo" /> VIEW ALL ON GITHUB
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

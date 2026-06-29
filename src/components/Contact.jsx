import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '../data/portfolio'
import { fadeUp, stagger, slideLeft } from '../utils/animations'

const contactLinks = [
  { icon: 'ph-envelope', label: 'EMAIL', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: 'ph-linkedin-logo', label: 'LINKEDIN', value: 'linkedin.com/in/nihar-kothapalli', href: personalInfo.linkedin },
  { icon: 'ph-phone', label: 'MOBILE', value: '+91 95 4234 4234', href: 'tel:+919542344234' },
  { icon: 'ph-map-pin', label: 'LOCATION', value: 'Annavaram, India · Open to Remote & Relocation', href: null },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('https://formspree.io/f/xqeoyvyb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 4000)
      } else {
        setError(true)
        setTimeout(() => setError(false), 4000)
      }
    } catch {
      setError(true)
      setTimeout(() => setError(false), 4000)
    }
  }

  const inputClass = "w-full bg-surface border-2 border-line px-4 py-3 text-dark text-sm font-mono focus:outline-none focus:border-black transition-colors placeholder:text-muted"

  return (
    <section id="contact" className="section-padding" style={{ background: 'rgba(244,244,245,0.5)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>

          <motion.div variants={fadeUp} className="mb-14">
            <p className="section-label">06 / COMM LINK</p>
            <h2 className="section-heading">Get In Touch</h2>
            <div className="bp-divider" />
            <p className="text-muted text-base max-w-xl mt-2">
              Seeking Software Engineering, Full Stack Development, and AI Engineering opportunities where I can contribute, learn, and grow.
              Feel free to reach out regarding internships, full-time roles, freelance work, or collaborations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: Info */}
            <motion.div variants={slideLeft} className="space-y-4">
              {contactLinks.map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 border-2 border-line bg-white p-4 transition-all duration-200 hover:border-black"
                  style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.06)' }}
                >
                  <div className="w-10 h-10 border-2 border-black bg-black flex items-center justify-center flex-shrink-0">
                    <i className={`ph-bold ${icon} text-white text-base`} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted uppercase tracking-widest">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="font-bold text-black text-sm uppercase tracking-wide hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="font-bold text-black text-sm uppercase tracking-wide">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Status card */}
              <div
                className="border-2 border-black bg-black p-5 angle-br"
                style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
              >
                <p className="status-online text-green-400 font-mono text-xs">ACTIVELY RECRUITING</p>
                <p className="text-white font-bold uppercase tracking-wide mt-2">Available for Opportunities</p>
                <div className="grid grid-cols-2 gap-1 mt-2">
                  {['Software Engineering', 'Full Stack Dev', 'Data Engineering', 'AI Engineering'].map((r) => (
                    <p key={r} className="font-mono text-xs text-zinc-400 flex items-center gap-1"><span className="text-green-400">✓</span>{r}</p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={fadeUp}>
              <form
                onSubmit={handleSubmit}
                className="border-2 border-black bg-white p-8 angle-br-lg space-y-5"
                style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.12)' }}
              >
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-line">
                  <span className="w-2 h-2 bg-green-500 animate-pulse" />
                  <span className="font-mono text-xs text-muted uppercase tracking-widest">COMPOSE_MESSAGE.SH</span>
                </div>

                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-1.5">YOUR NAME</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-1.5">EMAIL ADDRESS</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" className={inputClass} />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-1.5">MESSAGE</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="I'd like to discuss a Software Engineer role..." className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 py-3 font-bold uppercase tracking-widest text-sm border-2 transition-all duration-200 angle-br ${
                    sent ? 'bg-green-500 border-green-600 text-white'
                    : error ? 'bg-red-500 border-red-600 text-white'
                    : 'bg-black border-black text-white hover:bg-white hover:text-black'
                  }`}
                  style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
                >
                  <i className={`ph-bold ${sent ? 'ph-check' : error ? 'ph-warning' : 'ph-paper-plane-tilt'}`} />
                  {sent ? 'MESSAGE SENT TO NIHAR ✓' : error ? 'FAILED — TRY AGAIN' : 'SEND MESSAGE'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-black py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <p className="font-bold uppercase tracking-widest text-white">NIHAR KOTHAPALLI</p>
          <p className="font-mono text-xs text-zinc-500 mt-0.5 uppercase tracking-wider">SOFTWARE ENGINEER | FULL STACK DEVELOPER | JAVA DEVELOPER</p>
        </div>

        <div className="flex items-center gap-4">
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
              className="w-9 h-9 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-white hover:text-white transition-all duration-150"
            >
              <i className={`ph-bold ${icon} text-base`} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-zinc-600 uppercase tracking-wider">
          BUILT WITH REACT + VITE + TAILWIND
        </p>
      </div>
    </footer>
  )
}

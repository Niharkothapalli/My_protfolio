import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AcademicProfile from './components/AcademicProfile'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import WhyHireMe from './components/WhyHireMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function GridOverlay() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        backgroundSize: '25px 25px',
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), ' +
          'linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)',
      }}
    />
  )
}

export default function App() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <GridOverlay />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <About />
        <AcademicProfile />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Hero from './components/sections/Hero'
import AboutMe from './components/sections/AboutMe'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-alabaster text-sapphire transition-colors duration-300 dark:bg-sapphire dark:text-alabaster">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
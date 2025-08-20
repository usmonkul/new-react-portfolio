import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'
import './i18n'
import { AsideLeft, AsideRight } from './components/Aside'
import SpotlightEffect from './components/SpotlightEffect'
import './components/SpotlightEffect.css'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ErrorBoundary>
          <SpotlightEffect 
            size={800} 
            opacity={0.12} 
            blur={1}
            enabled={true}
          >
            <Header />
            <main>
              <Hero />
              <AboutMe />
              <Experience />
              <Projects />
              <CTA />
            </main>
            <Footer />
            <AsideLeft />
            <AsideRight />
          </SpotlightEffect>
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  )
}

export default App

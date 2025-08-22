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
import { useTranslation } from 'react-i18next'
import { Analytics } from "@vercel/analytics/react"

function AppContent() {
  const { ready } = useTranslation();

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 mx-auto mb-4" style={{ borderColor: 'var(--accent-primary)' }}></div>
          <p style={{ color: 'var(--text-secondary)' }}>Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
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
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ErrorBoundary>
          <AppContent />
          <Analytics />
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  )
}

export default App

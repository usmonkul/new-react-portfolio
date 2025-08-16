import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'
import './i18n'
import { AsideLeft, AsideRight } from './components/Aside'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <AboutMe />
        </main>
        <Footer />
        <AsideLeft />
        <AsideRight />
      </div>
    </ThemeProvider>
  )
}

export default App

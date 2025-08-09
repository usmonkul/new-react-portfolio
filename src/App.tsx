import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'
import './i18n'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

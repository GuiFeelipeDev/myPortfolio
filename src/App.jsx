import { useEffect, useRef } from "react"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Portfolio from "./components/portfolio/Portfolio"
import Skills from "./components/skills/Skills"

function App() {
  const contactHef = useRef(null)
  const aboutHef = useRef(null)
  const skillsHef = useRef(null)
  const portfolioHef = useRef(null)

  const scrollInto = (prop) => {
    switch (prop) {
      case "contact":
        contactHef.current.scrollIntoView()
        break
      case "portfolio":
        portfolioHef.current.scrollIntoView()
        break
      case "about":
        aboutHef.current.scrollIntoView()
        break
      case "skills":
        skillsHef.current.scrollIntoView()
        break
    }
  }

  return (
    <div className="main">
      <Header scrollInto={scrollInto} />
      <div className="hero-limiter">
        <Hero />
      </div>
      <div className="content-limiter">
        <About refA={aboutHef} />
        <Skills refA={skillsHef} />
        <Portfolio refA={portfolioHef} />
        <Contact refA={contactHef} />
        <Footer />
      </div>
    </div>
  )
}

export default App

import { Backdrop } from './components/Backdrop'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Ecosystem } from './components/sections/Ecosystem'
import { Hero } from './components/sections/Hero'
import { Journey } from './components/sections/Journey'
import { Now } from './components/sections/Now'
import { Projects } from './components/sections/Projects'
import { Tools } from './components/sections/Tools'

export default function App() {
  return (
    <>
      <Backdrop />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Tools />
        <Ecosystem />
        <Now />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

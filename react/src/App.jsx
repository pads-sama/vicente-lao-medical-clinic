import Footer from "./components/core/Footer"
import About from "./components/sections/About"
import Doctor from "./components/sections/Doctor"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"

function App() {

  return (
    <>
      <div className="h-screen">
        <Hero/>
        <Doctor/>
        <Services/>
        <About/>
        <Footer/>
      </div>
    </>
  )
}

export default App

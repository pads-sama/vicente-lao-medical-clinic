import { About, Doctor, Footer, Hero, Nav, Services } from "../components/core"

const Home = () => {
  return (
    <>
    <div className='h-[90vh] px-5 bg-gradient-to-l from-blue-500 to-blue-700 -z-10 | md:overflow-hidden md:bg-gradient-to-r'>
        <div>
            <Nav/>
        </div>
        <div>
            <Hero/>
        </div>
    </div>
    <div>
      <Doctor/>
    </div>
    <div>
      <Services/>
    </div>
    <div>
      <About/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Home
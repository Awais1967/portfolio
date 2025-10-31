import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'

const App = () => {
  return (
    <main>
      <div>
        <Navbar/>
        <Hero/>
        <ShowcaseSection/>
        <LogoSection/>
      </div>
    </main>
  )
}

export default App

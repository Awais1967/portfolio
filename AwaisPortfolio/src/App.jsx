import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
      <div>
        <Navbar/>
        <Hero/>
        <ShowcaseSection/>
      </div>
    </main>
  )
}

export default App

import React from 'react'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import FullScreenNavigation from './components/Navigation/FullScreenNavigation'
const App = () => {

 
  return (
    <div className='text-white'>
      <Navbar />
      <FullScreenNavigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </div>
  )
}

export default App

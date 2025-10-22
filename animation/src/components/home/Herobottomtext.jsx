import React from 'react'
import { Link } from 'react-router-dom'
const Herobottomtext = () => {
  return (
    <div className='font-[font2] text-white text-center text-xl md:text-3xl lg:text-[6vw] flex flex-wrap items-center gap-2 md:gap-6 justify-center py-2 md:py-4 uppercase'>
      <Link className='text-2xl md:text-4xl lg:text-[6.5vw] border-2 border-white rounded-full px-4 md:px-6 pb-0 uppercase leading-tight md:leading-[8vw] hover:border-blue-600 hover:text-blue-600 transition-colors duration-200' to='/projects'>Projects</Link>
      <Link className='text-2xl md:text-4xl lg:text-[6.5vw] border-2 border-white rounded-full px-4 md:px-6 pb-0 uppercase leading-tight md:leading-[8vw] hover:border-blue-600 hover:text-blue-600 transition-colors duration-200' to='/skills'>Skills</Link>
      <Link className='text-2xl md:text-4xl lg:text-[6.5vw] border-2 border-white rounded-full px-4 md:px-6 pb-0 uppercase leading-tight md:leading-[8vw] hover:border-blue-600 hover:text-blue-600 transition-colors duration-200' to='/contact'>Contact</Link>
    </div>
  )
}

export default Herobottomtext

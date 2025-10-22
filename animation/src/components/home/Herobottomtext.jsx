import React from 'react'
import { Link } from 'react-router-dom'
const Herobottomtext = () => {
  return (
    <div className='font-[font2] text-white text-center text-[6vw] flex items-center gap-2 justify-center  py-2 uppercase'>
      <Link className='text-[6.5vw] border-2 brder-white rounded-full px-6  pb-0 uppercase leading-[8vw]  hover:border-blue-600 hover:text-blue-600' to='/projects'>Projects</Link>
      <Link className='text-[6.5vw] border-2 brder-white rounded-full px-6 pb-0 uppercase leading-[8vw]  hover:border-blue-600 hover:text-blue-600' to='/skills'>Skills</Link>
      <Link className='text-[6.5vw] border-2 brder-white rounded-full px-6 pb-0 uppercase leading-[8vw]  hover:border-blue-600 hover:text-blue-600' to='/contact'>Contact</Link>
    </div>
  )
}

export default Herobottomtext

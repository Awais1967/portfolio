import React, { useContext, useRef } from 'react'
import Image from '../../assets/image/awais.jpg'
import {Navbarcontext} from "../contex/Context";
const Navbar = () => {

  const navref = useRef(null);
  const { nav, setnav } = useContext(Navbarcontext);
  return (
    <div className='flex fixed top-0 w-full items-start justify-between p-5 z-10'>
      <div>
        <img src={Image} alt="Awais" className='h-10 w-10 rounded-full'/>
      </div>
      <div 
        onClick={()=>{
          setnav(true)
        }}
       onMouseEnter={()=>{
        navref.current.style.height = '100%'
      }} onMouseLeave={()=>{
        navref.current.style.height = '0%'
      }}
       className='h-10 bg-[#FFFFFF] relative w-[16vw] rounded-full'>
        {/* Added lines start */}
        <div className="w-14 h-[1.5px] bg-[#233447] absolute top-2 right-3"></div>
        <div className="w-10 h-[1.5px] bg-[#233447]  absolute top-4 right-3"></div>
        <div className="w-6 h-[1.5px] bg-[#233447]  absolute top-6 right-3"></div>
         <div className="w-2 h-[1.5px] bg-[#233447]  absolute top-8 right-3"></div>
        {/* Added lines end */}
      <div ref={navref} className='bg-[#375f4f] rounded-full transition-all duration-500 absolute top-0 h-full w-full'>
            <div className="w-14 h-[1.5px] bg-[#233447] absolute top-2 right-3"></div>
        <div className="w-10 h-[1.5px] bg-[#233447]  absolute top-4 right-3"></div>
        <div className="w-6 h-[1.5px] bg-[#233447]  absolute top-6 right-3"></div>
         <div className="w-2 h-[1.5px] bg-[#233447]  absolute top-8 right-3"></div>
      </div>
      <div className='relative opacity-1'></div>
      </div>
    </div>
  )
}

export default Navbar

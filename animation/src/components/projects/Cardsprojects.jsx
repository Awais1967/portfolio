import React from 'react'

const Cardsprojects = (props) => {

  return (
    <div>
       <div className='w-full h-[850px] mb-4 flex flex-wrap gap-4 flex-row bg-white'>
          <div className='w-[49%] group h-full transition-all relative rounded-none duration-500 hover:rounded-[50px] overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.image1} alt='Project 1'/>
           <div className='opacity-0 group-hover:opacity-100 h-full w-full absolute top-0 left-0 flex justify-center items-center bg-black/40 '>
             <h2 className='uppercase text-4xl font-[font1] border-2 p-2 text-white border-white rounded-full font-medium'>mern stack</h2>
           </div>
          </div>
          
       
          <div className='w-[49%] group h-full transition-all relative rounded-none duration-500 hover:rounded-[50px] overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.image2} alt='Project 1'/>
           <div className='opacity-0 group-hover:opacity-100 h-full w-full absolute top-0 left-0 flex justify-center items-center bg-black/40 '>
             <h2 className='uppercase text-4xl font-[font1] border-2 p-2 text-white border-white rounded-full font-medium'>mern stack</h2>
           </div>
          </div>
         
        
    
          
        </div>  
          
    </div>
  )
}

export default Cardsprojects

import React, { useRef } from 'react'
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import experienceImage from '../assets/image/experience.jpeg';
import experienceImage2 from '../assets/image/experience2.jpeg';
import experienceImage3 from '../assets/image/experience3.jpeg';

const Skills = () => {

    gsap.registerPlugin(ScrollTrigger)
    const imageDivRef = useRef(null)
    const imageref = useRef(null)
    
    const imagearray =[
      experienceImage,
      experienceImage2,
      experienceImage3,
      // '../assets/image/experience.jpeg',
      // '../assets/image/experience2.jpeg',
      // '../assets/image/experience3.jpeg',
    ];
      console.log(imagearray)
    useGSAP(() => {
      gsap.to(imageDivRef.current,{
        scrollTrigger:{
          trigger:imageDivRef.current,
          markers: true,
          start:'top 36.75%',
          end:'bottom -100%',
          // scrub:true,
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType:'transform',
          scrub:1,
          anticipatePin:1,
          invalidateOnRefresh:true,
          onUpdate:(elem)=>{

               let imageIndex;
               if(elem.progress<1){
                                imageIndex = Math.floor(elem.progress * (imagearray.length ));

               }else{
                 imageIndex = imagearray.length-1;
               }
               imageref.current.src = imagearray[imageIndex];

               console.log(imageIndex)
          }
        }
      })
    })
  return (
    
  <div>
     <div className='section1 py-1'>
    <div ref={imageDivRef} className='absolute overflow-hidden h-[15vw] w-[18vw] top-80 left-[35vw]  rounded-4xl'>
      <img ref={imageref} className='h-full w-full ' src={experienceImage} alt='experience' />
    </div>
     <div className='relative font-[font2]'>
      <div className='mt-[50vh]'>
        <h1 className='text-white text-[10vw] text-center uppercase leading-[10vw] '>Experience</h1>
      </div>
      <div className='pl-[40%] mt-20 text-white'>
        <p className='text-6xl'>&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus nobis aut dolor harum et alias nisi cupiditate enim itaque ea aliquid sequi aspernatur, voluptatum earum sapiente libero possimus quod officia magni pariatur, adipisci eligendi deserunt! Tempore beatae earum debitis.</p>
      </div>

      
    </div>
   </div>
   <div className='section2'></div>
  </div>
  )
}

export default Skills

import React from 'react'
import Cardsprojects from '../components/projects/cardsprojects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const anim = gsap.from('.hero', {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      }
    });
    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, []);
  return (
    <div className='p-4 bg-white'>
      <div className='pt-[25vw] '>
        <h1 className='font-[font2] text-[10.5vw] uppercase text-black'>Projects</h1>
      </div>
      <div className='hero -mt-10 bg-white'>
         <Cardsprojects/>
      </div>
    </div>
  )
}

export default Projects

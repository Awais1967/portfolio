import React from 'react'
import Cardsprojects from '../components/projects/Cardsprojects.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
//  import img1 from '../assets/projectsimg/img1.jpg'
//  import img2 from '../assets/projectsimg/img2.jpg'
//  import img3 from '../assets/projectsimg/img3.jpg'
//  import img4 from '../assets/projectsimg/img4.jpg'
//  import img5 from '../assets/projectsimg/img5.jpg'
//  import img6 from '../assets/projectsimg/img6.jpg'
//  import img7 from '../assets/projectsimg/img7.jpg'
const Projects = () => {
  const images = [
   {
    image1: '../assets/projectsimg/img1.jpg',
    image2: '../assets/projectsimg/img3.jpg',
   },
   {
    image1: '../assets/projectsimg/img3.jpg',
    image2: '../assets/projectsimg/img4.jpg',
   },
   {
    image1: '../assets/projectsimg/img5.jpg',
    image2: '../assets/projectsimg/img6.jpg',
   },
   {
    image1: '../assets/projectsimg/img7.jpg',
    image2: '../assets/projectsimg/img1.jpg',
   }
  ];
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
    <div className='p-2 md:p-4 bg-white'>
      <div className='pt-8 md:pt-[15vw] lg:pt-[25vw]'>
        <h1 className='font-[font2] text-2xl md:text-6xl lg:text-[10.5vw] uppercase text-black'>Projects</h1>
      </div>
      <div className='hero -mt-2 md:-mt-10 bg-white'>
        {images.map((item, index) => (
          <Cardsprojects key={index} image1={item.image1} image2={item.image2} />
        ))}
      </div>
    </div>
  )
}

export default Projects

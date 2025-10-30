import React, { useRef } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


   

    useGSAP(() => {
            const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

         projects.forEach((card,index)=>{
        gsap.fromTo(
            card,{
                y:50,opacity:0
            },
            {
                y:0,opacity:1,duration:1,delay:0.3 * (index +1 ),
                scrollTrigger:{
                    trigger: card,
                    start: 'top bottom-=100',
            }
        })
                  
    });
        gsap.fromTo(sectionRef.current,
            {opacity:0},
            {opacity:1, duration:1.5}
        )
    }, []);
   

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
            <div className='first-project-wrapper' ref={project1Ref}>
                <div className='image-wrapper'>
                    <img src="/images/project1.png" alt="Ryde"/>
                </div>
                <div className='text-content'>
                    <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly app called Ryde </h2>
                    <p>Ryde is an innovative ride-hailing app that connects passengers with drivers for convenient and efficient transportation. With a user-friendly interface, real-time tracking, and secure payment options, Ryde offers a seamless experience for both riders and drivers. Whether you're commuting to work or exploring the city, Ryde ensures a reliable and comfortable journey every time.</p>
                </div>
            </div>
                {/* Right side */}
                <div className='Project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}> 
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src='/images/project2.png' alt="library"/> 
                        </div>
                        <h2>Library Management System</h2>
                    </div>
                     <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7db]'>
                            <img src='/images/project3.png' alt="yc directory"/> 
                        </div>
                        <h2>Yc directory - A startup show case</h2>
                    </div>
                </div>
        </div>
      </div>
      
          </section>
  )
}

export default ShowcaseSection

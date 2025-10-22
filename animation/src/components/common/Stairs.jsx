import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Stairs = (props) => {
  const location = useLocation();
  const stairparentRef = useRef(null);
  const pageref = useRef(null);

  useEffect(() => {
    // Reset stairs styles before animation
    gsap.set('.stair', { clearProps: 'all' });
    gsap.set(stairparentRef.current, { display: 'block' });

    let tl = gsap.timeline({
      onComplete: () => {
        gsap.set(stairparentRef.current, { display: 'none' });
        gsap.set('.stair', { y: '0%' });
      }
    });

    tl.from('.stair', {
      height: 0,
      stagger: { amount: -0.25 },
    })
    .to('.stair', {
      y: '100%',
      stagger: { amount: -0.25 },
    });

    gsap.fromTo(
      pageref.current,
      { opacity: 0 },
      { opacity: 1, delay: 1.2 }
    );

    // Cleanup on unmount or location change
    return () => {
      if (tl) tl.kill();
      gsap.set(stairparentRef.current, { display: 'none' });
      gsap.set('.stair', { y: '0%' });
      gsap.set(pageref.current, { opacity: 1 });
    };
  }, [location.key]);

  return (
    <div>
      <div ref={stairparentRef} className="h-[60vh] md:h-screen w-full md:w-screen fixed z-20 top-0">
        <div className="h-full w-full flex flex-col md:flex-row">
          <div className="stair w-full md:w-1/5 h-1/5 md:h-full bg-black"></div>
          <div className="stair w-full md:w-1/5 h-1/5 md:h-full bg-white"></div>
          <div className="stair w-full md:w-1/5 h-1/5 md:h-full bg-black"></div>
          <div className="stair w-full md:w-1/5 h-1/5 md:h-full bg-white"></div>
          <div className="stair w-full md:w-1/5 h-1/5 md:h-full bg-black"></div>
        </div>
      </div>
      <div ref={pageref}>
        {props.children}
      </div>
    </div>
  );
};

export default Stairs;

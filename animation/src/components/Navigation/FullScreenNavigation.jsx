import React from "react";
import "../../index.css";
import Image from "../../assets/image/awais.jpg";
import { useContext,useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import {Navbarcontext} from "../contex/Context";

const FullScreenNavigation = () => {
  
  const fullScreenref = useRef(null);
  const fullnavlinksref = useRef(null);
  // const navcontext = useContext(Context);
  
  const { nav, setnav } = useContext(Navbarcontext);
  console.log(nav);

  // Set initial state for .link
  useGSAP(() => {
    gsap.set('.link', { opacity: 0, rotateX: 90 });
    gsap.set('.stairing', { height: 0 });
  }, []);

  useGSAP(() => {
    if (nav) {
      // Show overlay
      if (fullScreenref.current) fullScreenref.current.style.display = 'block';
      const tl = gsap.timeline();
      tl.to('.stairing', {
        delay: 0.2,
        height: '100%',
        stagger: { amount: -0.3 }
        
      });
      tl.to('.link', {
        opacity: 1,
        rotateX: 0,
        stagger: { amount: 0.3 }
      }, '-=0.2');
    } else {
      // Animate out, then hide overlay
      const tl = gsap.timeline({
        onComplete: () => {
          if (fullScreenref.current) fullScreenref.current.style.display = 'none';
        }
      });
      tl.to('.link', {
        opacity: 0,
        rotateX: 90,
        stagger: { amount: 0.1 }
      });
      tl.to('.stairing', {
        height: 0,
        stagger: { amount: 0.1 }
      }, '-0.2');
    }
  }, [nav]);

  return (
    <div ref={fullScreenref} className=" h-screen fullscreennav  w-full absolute bg-black text-white  overflow-hidden z-20">
      <div className=" h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullnavlinksref} className="relative z-30">
        <div className="navlink flex w-full justify-between items-start p-5 mt-12">
          <div>
            <img
              src={Image}
              alt="Awais"
              className="h-[3vw] w-[3vw]  rounded-full"
            />
          </div>
          
          <div className="h-32 w-32 relative mr-20 cursor-pointer " onClick={() => setnav(false)}>
            <div className="h-50 w-2 absolute -rotate-40 origin-top  bg-[#D3FD50]"></div>
            <div className="h-50 w-2 absolute right-0 rotate-40 origin-top  bg-[#D3FD50]"></div>
          </div>
        </div>
        
  <div className="navbody py-12 z-50 text-white" style={{opacity: 1}}>
          {/* <div className="link origin-top relative border-y-2 border-white py-2" style={{opacity: 1, color: 'white'}}>
            <h1 className="font-sans text-white uppercase text-[4vw] leading-[1] pt-8 pb-8 text-center" style={{opacity: 1, color: 'white'}}>
              Projects
            </h1>
            <div className="movelink absolute flex top-5 py-4 bg-[#55681c] text-black" style={{position: 'absolute', opacity: 1}}>
              <div className="MoveX flex items-center">
                <h2 className="whitespace-nowrap font-sans uppercase text-[4vw] leading-[1] pt-5 text-center" style={{opacity: 1, color: 'black'}}>
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap font-sans uppercase text-[4vw] leading-[0.8] pt-5 text-center" style={{opacity: 1, color: 'black'}}>
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
              </div>
              <div className="MoveX flex items-center">
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[0.8] pt-5 text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[0.8] pt-5 text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
              </div>
            </div>
          </div>
          
          <div className="link origin-top relative border-y-2 border-white py-1" style={{opacity: 1, color: 'white'}}>
            <h1 className="font-sans text-white uppercase text-[4vw] leading-[1] pt-5 text-center " style={{opacity: 1, color: 'white'}}>
              Projects
            </h1>
            <div className="movelink absolute flex top-7 bg-[#D3FD50] text-black" style={{position: 'absolute', opacity: 1}}>
              <div className="MoveX flex items-center">
                <h2 className="whitespace-nowrap font-sans uppercase text-[4vw] leading-[1] pt-5 text-center" style={{opacity: 1, color: 'black'}}>
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap font-sans uppercase text-[4vw] leading-[0.8] pt-5 text-center" style={{opacity: 1, color: 'black'}}>
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
              </div>
              <div className="MoveX flex items-center">
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[0.8] pt-5 text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[0.8] pt-5 text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
              </div>
            </div>
          </div> */}
            <div className="link origin-top relative border-y-2 border-white py-1 z-51 ">
            <h1 className="font-sans text-white uppercase text-[8vw] leading-[1] pt-5 text-center ">
              Projects
            </h1>
            <div className="movelink absolute flex top-0 bg-[#D3FD50] text-black z-10">
              <div className="MoveX flex items-center">
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[0.8] pb-12  text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[0.8] pt-5 text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
              </div>
              <div className="MoveX flex items-center">
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[0.8] pt-5 text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[0.8] pt-5 text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
              </div>
            </div>
          </div>
            <div className="link origin-top relative border-y-2 border-white py-1 z-0">
            <h1 className="font-sans text-white uppercase text-[8vw] leading-[1] pt-5 text-center ">
              Projects
            </h1>
            <div className="movelink absolute flex top-0 bg-[#D3FD50] text-black z-10">
              <div className="MoveX flex items-center">
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[1] pt-5 text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[0.8] pt-5 text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
              </div>
              <div className="MoveX flex items-center">
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[0.8] pt-5 text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap font-sans uppercase text-[8vw] leading-[0.8] pt-5 text-center">
                  Problem solving Projects
                </h2>
                <img
                  src={Image}
                  alt="Awais"
                  className="h-32 w-48 object-cover shrink-0 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNavigation;

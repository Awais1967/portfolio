import React from "react";
import Video from "../../components/home/Video";

const Herotoptext = () => {
  return (
    <div className="font-[font2] text-white pt-5 text-center">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[9vw] ">
        Awais Abbas
      </div>
      <div className="text-[5.5vw]  justify-center flex items-center  uppercase leading-[9vw]">
        Full stack 
        <div className="h-[8vw] w-[20vw]  rounded-full overflow-hidden ">
          <Video />
        </div>
      
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]  ">
         developer &{" "}
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]  ">
        AI developer
      </div>
    </div>
  );
};

export default Herotoptext;

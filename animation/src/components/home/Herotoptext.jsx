import React from "react";
import Video from "../../components/home/Video";

const Herotoptext = () => {
  return (
    <div className="font-[font2] text-white pt-4 md:pt-8 flex flex-col items-center justify-center text-center space-y-2 md:space-y-4">
      <div className="w-full flex justify-center">
        <span className="text-xl sm:text-2xl md:text-5xl lg:text-[9vw] uppercase leading-tight">Awais Abbas</span>
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-2">
        <span className="text-base sm:text-lg md:text-3xl lg:text-[5vw] uppercase leading-tight">Full stack</span>
        <div className="h-[40px] w-[80px] sm:h-[60px] sm:w-[120px] md:h-[8vw] md:w-[20vw] rounded-full overflow-hidden mt-2">
          <Video />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <span className="text-xl sm:text-2xl md:text-5xl lg:text-[9vw] uppercase leading-tight">developer &</span>
      </div>
      <div className="w-full flex justify-center">
        <span className="text-xl sm:text-2xl md:text-5xl lg:text-[9vw] uppercase leading-tight">AI developer</span>
      </div>
    </div>
  );
};

export default Herotoptext;

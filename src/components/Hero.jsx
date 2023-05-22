import React from "react";
const Hero = () => {
  return (
    <div className="w-11/12 xl:w-4/5 h-[350px] m-auto bg-stone-50 rounded-xl">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-11/12 xl:w-1/2 p-5 space-y-5">
          <h1 className="text-5xl font-semibold">
            Tickets Beyonce
          </h1>
        </div>
        <div className="hidden md:flex p-5">
          <img
            className="w-[400px] h-[300px] "
            src="images/bey.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

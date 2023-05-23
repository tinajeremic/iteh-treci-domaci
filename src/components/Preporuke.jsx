import React from "react";
import Hero from "./Hero";
const Preporuke = () => {
  return (
    <div className="naslovna">
      <Hero />
      <div className="w-4/5 m-auto space-y-10">
        <div className="products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 -content-center">
          <div className="product h-[350px] space-y-2">
            <img
              className="w-full h-4/5 object-cover"
              src="images/acotar.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold text-white text-center">A Court of Thorns and Roses</h1>
            <h2 className="text-xl  text-white text-center">Sarah J. Maas</h2>
            {/* <p className="font-semibold text-gray-600">
            It is Beyoncé's second visual album, following her self-titled fifth studio album (2013), 
            and a concept album with a song cycle that relates Beyoncé's emotional journey after her husband's infidelity in a
            generational and racial context.
            </p> */}
          </div>
          <div className="product h-[350px] space-y-2">
            <img
              className="w-full h-4/5 object-cover"
              src="images/shatter.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold text-white text-center">Shatter Me</h1>
            <h2 className="text-xl  text-white text-center">Tahereh Mafi</h2>
            {/* <p className="font-semibold text-gray-600">
            Beyoncé conceived and recorded Renaissance during the COVID-19 pandemic, seeking to inspire joy and escapism in listeners
            who had experienced isolation and to celebrate a club era in which marginalized people sought liberation through dance music. 
            </p> */}
          </div>
          <div className="product h-[350px] space-y-2">
            <img
              className="w-full h-4/5 object-cover"
              src="images/silm.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold text-white text-center">Silmarillion</h1>
            <h2 className="text-xl  text-white text-center">J. R. R. Tolkien</h2>
            {/* <p className="font-semibold text-gray-600">
            Beyoncé's desire to assert her full artistic freedom served as inspiration for the album's dark, personal subject matter,
             which incorporated feminist themes of sex, monogamy, beauty standards, relationship problems and criticism of capitalism. 
            </p> */}
          </div>
          <div className="product h-[350px] space-y-2">
            <img
              className="w-full h-4/5 object-cover"
              src="images/hoeab.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold text-white cent text-center">House of Earth and Blood</h1>
            <h2 className="text-xl  text-white text-center">Sarah J. Maas</h2>
            {/* <p className="font-semibold text-gray-600">
            4's lyrics emphasize monogamy, female empowerment and self-reflection, 
            a result of Beyoncé considering a maturer message to contend artistic credibility. 
            </p> */}
          </div>
        </div>

        <div className="w-full h-[300px] relative">
          <img
            className="w-full absolute top-0 rounded-xl h-full object-cover"
            src="images/books.png"
            alt=""
          />
          <div className="w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute">
            <h1 className="text-4xl text-semibold">           
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preporuke;

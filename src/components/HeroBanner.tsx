import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const carousel = [
  {
    id: "id",
    name: "Headphones",
    price: 2999,
    description: "description",
    image: "/slide1.jpg",
    imageAlt:
      "https://utfs.io/f/1646325d-6bc5-4da0-b4d8-a55cc2f4d89d-x99mxn.jpg",
  },
  {
    id: "id",
    name: "Speakers",
    price: 5999,
    description: "description",
    image: "/slide2.jpg",
    imageAlt:
      "https://utfs.io/f/aabeff90-fb42-4ca2-ad6d-81c0952e8713-zax8ks.jpg",
  },
  {
    id: "id",
    name: "Smart Watch",
    price: 3999,
    description: "description",
    image: "/slide3.jpg",
    imageAlt:
      "https://utfs.io/f/48e51878-3592-44b2-9c7b-d062e595198a-imdbjx.jpg",
  },
];

const HeroBanner = () => {
  const navigator = useNavigate();
  return (
    <div
      className="relative text-white text-[20px] w-full max-w-[90vw] mx-auto rounded-lg cursor-pointer"
     
    >
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        
        renderArrowPrev={(clickHandler) => (
          <div
            onClick={clickHandler}
            className="absolute right-[45px] md:right-[70px] bottom-5 w-[20px] md:w-[40px] h-[20px] md:h-[40px] bg-black/20 z-10 flex items-center justify-center cursor-pointer hover:opacity-90  rounded-lg"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler) => (
          <div
            onClick={clickHandler}
            className="absolute right-5 bottom-5 w-[20px] md:w-[40px] h-[20px] md:h-[40px] bg-black/20 z-10 flex items-center justify-center cursor-pointer hover:opacity-90  rounded-lg"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
        
      >
        {carousel.map((item, index) => (
          <div key={index} className="relative rounded-xl"  onClick={() => navigator("/products/all")}>
            <img
              src={item.image}
              className="aspect-[16/10] md:aspect-auto object-cover rounded-xl"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full flex items-center justify-center  text-4xl sm:text-7xl md:text-8xl lg:text-9xl rounded-xl font-extrabold text-white/80 font-oswald">
              {item.name}
            </div>
            <div className="px-3 md:px-[40px] w-[10rem] md:w-[20rem] py-[10px] md:py-2 font-oswald bg-white/60 absolute bottom-[25px] md:bottom-[50px] lg:bottom-[75px] left-0 text-black/[0.9] text-xs md:text-lg uppercase font-medium cursor-pointer hover:opacity-90 rounded-tr-xl rounded-br-xl">
              Shop now
              <p>$ {item.price}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;

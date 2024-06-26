import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Image } from "../interfaces";

interface Props {
  images: Image[];
}
const ProductDetailsCarousel = ({ images }: Props) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] h-full mx-auto sticky top-[50px] ">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((img) => (
          <img
            key={img.id}
            src={img.attributes.url}
            alt={img.attributes.name}
            className="rounded-xl outline-none"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;

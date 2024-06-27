// @ts-ignore
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import { Product } from "../interfaces";

const RelatedProducts = ({
  products,
  type,
}: {
  products: Product[];
  type: string;
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  console.log(type);

  return (
    <div className="mt-5">
      <div className="text-2xl font-bold mb-5"> Recommended</div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
        autoPlay={true}
        autoPlaySpeed={1500}
      >
        {[...products, ...products, ...products]?.map((product) => (
          <ProductCard key={product?.id} product={product} type={type} />
        ))}
      </Carousel>
    </div>
  );
};

export default RelatedProducts;

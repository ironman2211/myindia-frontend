// @ts-ignore
import React from "react";
import { Product } from "../interfaces";
import { Link } from "../MyIndiaUtils";
import { getDiscountedPricePercentage } from "../utils/helper";

interface Props {
  product: Product;
  type: string;
}
const ProductCard = ({ product, type }: Props) => {
  return (
    <Link to={`/products/${type.toLowerCase()}/${product.id}`}>
      <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer rounded-lg">
        <div className="flex flex-col justify-between w-full h-[15rem]  rounded-lg">
          <img
            className="h-full w-full object-cover"
            src={product.images[0].attributes.url}
            alt={product.name}
          />
        </div>
        <div className="p-4 text-black/[0.9] flex flex-col gap-4">
          <h2 className="text-lg font-medium">{product.name}</h2>
          <span className="text-xs h-[2rem] ">
            {product.description.substring(0, 70)}
          </span>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;{1111}</p>

            <>
              <p className="text-base  font-medium line-through">
                &#8377;{888}
              </p>
              <p className="ml-auto text-base font-medium text-green-500 ">
                {getDiscountedPricePercentage({
                  originalPrice: product.price,
                  discountedPrice: product.discountedPrice,
                })}
                % off
              </p>
            </>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

import React from "react";
import { useEffect, useState } from "react";
import Products from "../../components/Products";
import RecomendedProducts from "../../components/RecomendedProducts";
import dummyProducts from "../../data/index";
import { Product } from "../../interfaces";

const Productspage = () => {
  const productsType = window.location.pathname.split("/")[2];
  const [products, setProducts] = useState<Product[]>([]);
  const [recomended, setRecomended] = useState<Product[]>([]);
  useEffect(() => {
    switch (productsType) {
      case "all":
        setProducts(dummyProducts.all);
        setRecomended(dummyProducts.all.slice(2, 10));
        break;
      case "new":
        setProducts(dummyProducts.new);
        setRecomended(dummyProducts.new.slice(2, 10));
        break;
      case "popular":
        setProducts(dummyProducts.popular);
        setRecomended(dummyProducts.popular.slice(2, 10));
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="w-full  md:px-10 md:py-5 px-6 py-5 mt-20">
      <div className="flex flex-col items-start justify-center  gap-2 md:gap-3">
        <h3 className=" text-xl md:text-4xl font-bold text-center">
          {productsType[0].toUpperCase() + productsType.slice(1) + " Products"}
        </h3>
        <p className="text-xs md:text-sm text-gray-700">
          {" "}
          dolor in reprehenderinon proident, sunt in culpa{" "}
        </p>
      </div>
      <RecomendedProducts products={recomended} type={productsType} />
      <div className="text-2xl font-bold mt-8">All product</div>
      <Products products={products} type={productsType} />
    </div>
  );
};

export default Productspage;

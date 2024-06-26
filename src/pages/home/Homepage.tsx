import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import HeroBanner from "../../components/HeroBanner";
import ProductsDisplay from "../../components/ProductsDisplay";
import dummyProducts from "../../data/index";
import { Product } from "../../interfaces";

const Homepage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);

  useEffect(() => {
    const allProducts = dummyProducts.all.slice(0, 4);
    const newProducts = dummyProducts.all.slice(4, 8);
    const popularProducts = dummyProducts.all.slice(6, 10);
    setAllProducts(allProducts);
    setNewProducts(newProducts);
    setPopularProducts(popularProducts);
  }, []);

  return (
    <main className=" flex flex-col pt-20 ">
      <HeroBanner />
      <div className="flex flex-col items-center justify-center mt-10 gap-7 my-10 ">
        {/* <ProductsDisplay products={allProducts} type="All" /> */}
        <ProductsDisplay products={newProducts} type="New" />
        <ProductsDisplay products={popularProducts} type="Popular" />
      </div>
      <Footer />
    </main>
  );
};

export default Homepage;

import Footer from "../../components/Footer";
import HeroBanner from "../../components/HeroBanner";
import ProductsDisplay from "../../components/ProductsDisplay";
import { Product } from "../../interfaces";
const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Product 1",
    linkName: "product-1",
    description:
      "Product 1 description jdnasjklndjkans dnasjdbnas dbioahsd ihdiasd asidhoaisn djasjndjansdjnasdna daksdjasd",
    price: 100,
    discountedPrice: 90,
    image: "https://utfs.io/f/1646325d-6bc5-4da0-b4d8-a55cc2f4d89d-x99mxn.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Product 2 description",
    linkName: "product-2",
    price: 200,
    discountedPrice: 180,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Product 3 description",
    linkName: "product-3",
    price: 300,
    discountedPrice: 280,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 4,
    linkName: "product-4",
    name: "Product 4",
    description: "Product 4 description",
    price: 400,
    discountedPrice: 380,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
  },
];

const Homepage = () => {
  return (
    <main className=" flex flex-col ">
      <HeroBanner />
      <div className="flex flex-col items-center justify-center mt-10 gap-7 my-10 ">
        <ProductsDisplay products={dummyProducts} type="All" />
        <ProductsDisplay products={dummyProducts} type="New" />
        <ProductsDisplay products={dummyProducts} type="Popular" />
      </div>
      <Footer />
    </main>
  );
};

export default Homepage;

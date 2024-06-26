import { Product } from "../interfaces";
import { Link } from "../MyIndiaUtils";
import ProductCard from "./ProductCard";

const ProductsDisplay = ({
  products,
  type,
}: {
  products: Product[];
  type: string;
}) => {
  return (
    <div className="w-full h-fit">
      <h3 className="md:text-5xl text-3xl font-bold text-center font-Oswald text-gray-700 ">
        {type} Products
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mx-auto p-10 md:p-20">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} type={type} />
        ))}
      </div>
      <h6 className="text-sm font-bold text-center font-Oswald text-cyan-300 cursor-pointer">
        <Link to={`/products/${type.toLocaleLowerCase()}`}>See All {type} products</Link>
      </h6>
    </div>
  );
};

export default ProductsDisplay;

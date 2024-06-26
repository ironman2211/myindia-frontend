import { Product } from "../interfaces";
import ProductCard from "./ProductCard";

const Products = ({
  products,
  type,
}: {
  products: Product[];
  type: string;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-9 py-10">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} type={type} />
      ))}
    </div>
  );
};

export default Products;

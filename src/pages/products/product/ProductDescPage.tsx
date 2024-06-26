import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "../../../components/Wrapper";
import ProductDetailsCarousel from "../../../components/ProductDetailsCarousel";
import { useEffect, useState } from "react";
import { getDiscountedPricePercentage } from "../../../utils/helper";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

interface Image {
  id: string;
  attributes: {
    name: string;
    url: string;
  };
}
const images: Image[] = [
  {
    id: "fsdfs",
    attributes: {
      name: "asdas",
      url: "https://utfs.io/f/48e51878-3592-44b2-9c7b-d062e595198a-imdbjx.jpg",
    },
  },
  {
    id: "asdas",
    attributes: {
      name: "asdas",
      url: "https://utfs.io/f/48e51878-3592-44b2-9c7b-d062e595198a-imdbjx.jpg",
    },
  },
  {
    id: "asdas",
    attributes: {
      name: "asdas",
      url: "https://utfs.io/f/48e51878-3592-44b2-9c7b-d062e595198a-imdbjx.jpg",
    },
  },
];
interface Product {
  id: string;
  linkName: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  images: Image[];
  details: string[];
}
const dummydata: Product[] = [
  {
    id: "874823jkasd",
    linkName: "product-4",
    name: "Product 4",
    description: "Product 4 description",
    details: ["Product 4 description", "Product 4 description"],
    price: 400,
    discountedPrice: 380,
    images: images,
  },
  {
    id: "874823jkass",
    linkName: "product-4",
    name: "Product 4",
    description: "Product 4 description",
    price: 400,
    discountedPrice: 380,
    images: images,
    details: ["Product 4 description", "Product 4 description"],
  },
];
const ProductDetails = () => {
  const id = window.location.pathname.split("/")[3];
  const [product, setproduct] = useState<Product>();

  useEffect(() => {
    setproduct(dummydata.find((p) => p.id == id));
  }, []);

  return (
    <div className="w-full md:py-20">
      {/* <ToastContainer /> */}
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          {product?.images && (
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <ProductDetailsCarousel images={product?.images} />
            </div>
          )}
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {product?.name}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              {product?.description}
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{product?.discountedPrice}
              </p>
              {product && (
                <>
                  <p className="text-base  font-medium line-through">
                    &#8377;{product?.price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage({
                      originalPrice: product.price,
                      discountedPrice: product.discountedPrice,
                    })}
                    % off
                  </p>
                </>
              )}
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {}}
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <ul>
                  {product?.details?.map((detail, i) => (
                    <div className="flex items-center" key={i}>
                      <VscDebugBreakpointDataUnverified size={20} />
                      <span className="ml-2">{detail}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>

        {/* <RelatedProducts products={products} /> */}
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

// export async function getStaticPaths() {
//     const products = await fetchDataFromApi("/api/products?populate=*");
//     const paths = products?.data?.map((p) => ({
//         params: {
//             slug: p.attributes.slug,
//         },
//     }));

//     return {
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params: { slug } }) {
//     const product = await fetchDataFromApi(
//         `/api/products?populate=*&filters[slug][$eq]=${slug}`
//     );
//     const products = await fetchDataFromApi(
//         `/api/products?populate=*&[filters][slug][$ne]=${slug}`
//     );

//     return {
//         props: {
//             product,
//             products,
//         },
//     };
// }

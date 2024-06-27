import React from "react";
import Wrapper from "../../../components/Wrapper";
import ProductDetailsCarousel from "../../../components/ProductDetailsCarousel";
import { useEffect, useState } from "react";
import { getDiscountedPricePercentage } from "../../../utils/helper";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import dummydata from "../../../data/index";
import { Cart, Product } from "../../../interfaces";
import { useCartContext } from "../../../context/Cartcontext";
import { FaArrowRight } from "react-icons/fa";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const type = window.location.pathname.split("/")[2].toLowerCase();
  const id = window.location.pathname.split("/")[3];
  const [product, setproduct] = useState<Product>();
  const navigate = useNavigate();

  const { cart, addCart, removeFromCart } = useCartContext();

  console.log(cart);

  const addToCart = (product: Product) => {
    if (!cart.find((c) => c.id === product.id)) {
      const newCartItem: Cart = {
        type,
        quantity: 1,
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.images[0].attributes.url,
        discountedPrice: product.discountedPrice,
      };
      addCart(newCartItem);
    }
  };

  const checkInCart = (id: string) => {
    const item = cart.find((c) => c.id === id);
    return item ? true : false;
  };

  useEffect(() => {
    switch (type) {
      case "all":
        setproduct(dummydata.all.find((p) => p.id == id));
        break;
      case "new":
        setproduct(dummydata.new.find((p) => p.id == id));
        break;
      case "popular":
        setproduct(dummydata.popular.find((p) => p.id == id));
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="w-full md:py-20">
      {/* <ToastContainer /> */}
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          {product?.images && (
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-[500px] mx-auto lg:mx-0">
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
            {product && !checkInCart(product.id) ? (
              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={() => addToCart(product)}
              >
                Added to Cart
              </button>
            ) : (
              <div className="flex gap-5 items-center justify-center">
                <button
                  className="w-full py-4 rounded-full bg-violet-400 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex gap-5 items-center justify-center"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart
                  <FaArrowRight />
                </button>
                {product && (
                  <button
                    className="flex gap-2 items-center justify-center text-rose-800"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                    <IoMdRemoveCircleOutline size={30} />
                  </button>
                )}
              </div>
            )}

            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            {/* <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button> */}
            {/* WHISHLIST BUTTON END */}

            <div className="mt-6">
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

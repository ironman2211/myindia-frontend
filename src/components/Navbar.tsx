// @ts-ignore
import React from "react";
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "../MyIndiaUtils";
import { useCartContext } from "../context/Cartcontext";
const Navbar = () => {
  const { cart } = useCartContext();
  return (
    <div className=" flex w-[95vw] mx-auto h-[9vh] items-center justify-between rounded-lg border-[2px] bg-white/60 p-3 sm:p-8 text-black shadow-sm mb-5 fixed top-4 left-0 z-50 right-0">
      <Link to="/">
        <div className="flex items-center justify-center text-sm sm:text-lg font-Oswald cursor-pointer">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <div className="hidden sm:block font-bold">MY INDIA</div>
        </div>
      </Link>

      <div
        className={`flex items-center justify-between gap-6 rounded-full px-4 py-2 text-sm 
            "bg-black/5" }`}
      >
        <Link to="/login">Login</Link>

        <Link to="/about">About</Link>

        <Link to="/products/all">Products</Link>

        <button className="flex items-center justify-center gap-3 text-sm sm:text-base">
          {/* <FaRegHeart /> */}

          <Link to="/cart">
            <div className="flex items-center justify-center gap-3 text-sm sm:text-base relative">
              <div className="h-4 w-4 bg-red-500 rounded-full absolute -top-3 -right-3 text-[.8rem] flex items-center justify-center font-bold text-white">
                {cart.length}
              </div>

              <FaCartShopping className="h-5 w-5" />
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Navbar;

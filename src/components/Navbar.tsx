import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" flex w-[95vw] mx-auto h-[9vh] items-center justify-between rounded-lg border-[2px] bg-transparent p-8 text-black shadow-sm mb-5">
      <div className="flex items-center gap-3 text-sm sm:text-base">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <b>MY INDIA</b>
      </div>

      <div
        className={`flex items-center justify-between gap-6 rounded-full px-4 py-2 text-sm 
            "bg-black/5" }`}
      >
        <button>Login</button>
        <button>Shop</button>
        <button className="flex items-center justify-center gap-3 text-sm sm:text-base">
        <FaRegHeart />

          <FaCartShopping />

        </button>
      </div>
    </div>
  );
};
export default Navbar;

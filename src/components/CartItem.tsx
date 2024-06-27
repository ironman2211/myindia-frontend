// @ts-ignore
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Cart } from "../interfaces";
import { useCartContext } from "../context/Cartcontext";
import { useNavigate } from "react-router-dom";

const CartItem = ({ item }: { item: Cart }) => {
  const { updateCart, removeFromCart } = useCartContext();
  const navigator = useNavigate();
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src={item.image} alt={"dasd"} width={120} height={120} />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div
            className="text-lg md:text-2xl font-semibold text-black/[0.8] cursor-pointer"
            onClick={() => navigator(`/products/${item.type}/${item.id}`)}
          >
            {item.name}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {item.description}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377;{item.discountedPrice}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {item.description}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>

              <select
                className="hover:text-black"
                defaultValue={item.quantity}
                onChange={(e) => updateCart(item.id, Number(e.target.value))}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={9 === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            onClick={() => removeFromCart(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

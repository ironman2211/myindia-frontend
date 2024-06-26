import CartItem from "../../components/CartItem";
import Wrapper from "../../components/Wrapper";
import { useCartContext } from "../../context/Cartcontext";
import { Cart } from "../../interfaces";

const CartPage = () => {
  const { cart } = useCartContext();
  return (
    <div className="w-full min-h-[85vh] md:py-32">
      <Wrapper>
        <>
          <div className="text-center max-w-[800px] mx-auto ">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Shopping Cart
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 py-10">
            <div className="flex-[2]">
              {cart.length > 0 ? (
                <>
                  <div className="text-lg font-bold">Cart Items</div>
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </>
              ) : (
                <div className="text-center mt-10 flex flex-col items-center">
                  <span className="text-xl font-bold">Your cart is empty</span>
                  <span className="text-center mt-4">
                    Looks like you have not added anything in your cart.
                    <br />
                    Go ahead and explore top categories.
                  </span>
                  <a
                    href="/"
                    className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                  >
                    Continue Shopping
                  </a>
                </div>
              )}
            </div>
            <div className="flex-[1]">
              <div className="text-lg font-bold">Summary</div>

              <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                {cart.length > 0 ? (
                  <>
                    {cart.map((item) => (
                      <div className="flex justify-between flex-col  gap-2 pb-1 border-b-2 border-black/[0.1] border-dashed mb-3"> 
                        <div className="flex justify-between ">
                          <div className=" text-md font-medium text-black">
                            {item.name}
                          </div>
                          <div className="text-md md:text-lg font-medium text-black">
                            &#8377;{item.price * item.quantity}
                          </div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-700">
                          <div className="   font-medium ">
                            Discount
                          </div>
                          <div className="  font-medium text-green-800">
                           - &#8377;
                            {(item.price - item.discountedPrice) *
                              item.quantity}
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="text-center mt-10 flex flex-col items-center">
                    <span className="text-xl font-bold">
                      Your cart is empty
                    </span>
                    <span className="text-center mt-4">
                      Looks like you have not added anything in your cart.
                      <br />
                      Go ahead and explore top categories.
                    </span>
                    <a
                      href="/"
                      className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                    >
                      Continue Shopping
                    </a>
                  </div>
                )}
                <div className="flex justify-between">
                  <div className="uppercase text-md md:text-lg font-medium text-black">
                    Subtotal
                  </div>
                  <div className="text-md md:text-lg font-medium text-black">
                    &#8377;{callculateSubtotal(cart)}
                  </div>
                </div>
                <div className="text-sm md:text-md py-5 border-t mt-5">
                  The subtotal reflects the total price of your order, including
                  duties and taxes, before any applicable discounts. It does not
                  include delivery costs and international transaction fees.
                </div>
              </div>

              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                Checkout
              </button>
            </div>
          </div>
        </>
      </Wrapper>
    </div>
  );
};

const callculateSubtotal = (cart: Cart[]) => {
  let subtotal = 0;
  cart.forEach((item) => {
    subtotal += item.discountedPrice * item.quantity;
  });
  return subtotal;
};
export default CartPage;

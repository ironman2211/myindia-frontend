import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Cart } from "../interfaces";

interface CartContextType {
  cart: Cart[];
  addCart: (newItem: Cart) => void;
  updateCart: (itemId: string, newQuantity: number) => void;
  removeFromCart: (itemId: string) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addCart: () => {},
  updateCart: () => {},
  removeFromCart: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

// CartProvider component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]); // Initialize cart state with an empty array

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart); // Set cart state with data from localStorage
      } catch (error) {
        // console.error("Error parsing cart data from localStorage:", error);
      }
    }
  }, []); // Ensure this effect runs only once on mount

  useEffect(() => {
    // console.log("Current Cart State:", cart); // Log current cart state after update
    localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage on every state update
  }, [cart]); // Depend on cart to update when cart changes

  const addCart = (newItem: Cart) => {
    setCart((prevCart) => [...prevCart, newItem]);
  };
  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateCart = (itemId: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addCart, updateCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

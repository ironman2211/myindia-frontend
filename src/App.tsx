import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Productspage from "./pages/products/Productspage";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/products/product/ProductDescPage";
import Cartpage from "./pages/cart/Cartpage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-gradient-to-r from-[hsl(133,100%,98%)] to-[hsl(267,100%,96%)] pt-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<Productspage />} />
        <Route path="/products/:id/:name" element={<ProductDetails />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

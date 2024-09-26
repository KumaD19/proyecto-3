import { Route, Routes } from "react-router-dom";
import ContactUs from "./ConactUs";
import Footer from "./Footer";
import ProductsContainer from "./ProductsContainer";
import ShoppingCart from "./ShoppingCart";

const Main = () => {
  return (
    <main>
     <Routes>

      <Route path="/" element={<ProductsContainer/>}/>
      <Route path="/contactUs" element ={<ContactUs/>}/>
      <Route path="/cart" element={<ShoppingCart/>}/>
     </Routes>
    
      <Footer/>
    </main>
  );
};

export default Main;

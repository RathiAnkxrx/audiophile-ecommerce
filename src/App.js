import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import HeadPhone from "./Pages/Category/headphone";
import EarPhone from "./Pages/Category/earphone";
import Speaker from "./Pages/Category/speaker";
import ProductDetail from "./Pages/ProductDetail";
import CartModel from "./Components/CartModel";
import SrcollToTop from "./scrollToTop";
import CheckoutPage from "./Pages/CheckoutPage";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  Aos.init({});
  return (
    <>
      <GlobalStyle />
      <SrcollToTop />
      <CartModel />
      <Header />

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/headphone" element={<HeadPhone />} />
        <Route path="/earphone" element={<EarPhone />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/product_detail/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<Navigate to="/home" />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

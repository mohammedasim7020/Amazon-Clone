import Navbar from "./components/header/Navbar";
import Newnav from "./components/header/newnavbaar/Newnav";
import Maincomp from "./components/home/Maincomp";
import Footer from "./components/footer/Footer";
import Singup from "./components/singup_singin/Singup";
import Singin from "./components/singup_singin/Singin";
import Cart from "./components/cart/Cart"
import Buynow from "./components/buynow/Buynow";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<Singin />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

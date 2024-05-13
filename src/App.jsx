
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shopping from "./pages/Shopping";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Basket from "./pages/Basket";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import "aos/dist/aos.css";
import AOS from "aos";
import "animate.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  AOS.init();

  return (
    <>
      <Header />
      <main className="w-screen flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

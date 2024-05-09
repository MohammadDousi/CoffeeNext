import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Shopping from "../pages/Shopping";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Basket from "../pages/Basket";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

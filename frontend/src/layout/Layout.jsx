import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* <div className="bg-desktop-image z-50 h-[920px] w-full fixed xl:bg-contain bg-cover 2xl:bg-cover bg-no-repeat"> */}
        <Header />
        <div>{children}</div>
        <Footer />
      {/* </div> */}
    </>
  );
}

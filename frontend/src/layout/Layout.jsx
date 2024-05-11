import PropTypes from "prop-types";

import "aos/dist/aos.css";
import AOS from "aos";
import "animate.css";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  AOS.init();
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

Layout.propTypes = {
  children: PropTypes.any,
};

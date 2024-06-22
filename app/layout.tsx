import "./globals.css";

import "keen-slider/keen-slider.min.css";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "animate.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ProviderRedux from "@/redux/providerRedux";
import React, { ReactNode } from "react";
import ProviderQuery from "./providerQuery";
import { ThemeProvider } from "next-themes";
import { Slide, ToastContainer } from "react-toastify";

export const metadata = {
  title: "کافه عربیکا - صفحه اصلی",
  description: "کافه ای برای همه",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body>
        <ThemeProvider attribute="class" enableSystem>
          <ProviderQuery>
            <ProviderRedux>
              <Header />
              {children}
              <Footer />

              <ToastContainer
                position="bottom-center"
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </ProviderRedux>
          </ProviderQuery>
        </ThemeProvider>
      </body>
    </html>
  );
}

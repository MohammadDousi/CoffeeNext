import "../style/globals.css";

import "aos/dist/aos.css";
import "animate.css";

import "keen-slider/keen-slider.min.css";

import { ThemeProvider } from "next-themes";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ProviderRedux from "@/redux/providerRedux";
import { ReactNode } from "react";

export const metadata = {
  title: "کافه عربیکا - صفحه اصلی",
  description: "Generated by create next app",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" enableSystem>
          <ProviderRedux>
            <Header />
            {children}
            <Footer />
          </ProviderRedux>
        </ThemeProvider>
      </body>
    </html>
  );
}
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollTop from "@/components/layout/ScrollTop";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`flex flex-col min-h-dvh ${inter.className}`}>
      <Header />
      <Component {...pageProps} />
      <ScrollTop />
      <Footer />
    </div>
  );
}

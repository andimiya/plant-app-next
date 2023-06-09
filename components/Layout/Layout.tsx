import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Quicksand } from "next/font/google";
import { ToastContainer, Slide } from "react-toastify";

import css from "./Layout.module.css";

interface Props {
  children?: ReactNode;
}

const nunito = Quicksand({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  variable: "--font-nunito",
});

const Layout = ({ children }: Props) => (
  <div className={`${nunito.className} ${css.main}`}>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
    />

    <Header />

    <div className={css.contents}>{children}</div>
    <Footer />
  </div>
);

export default Layout;

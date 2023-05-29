import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Header/Header";
import { Nunito } from "next/font/google";
import { ToastContainer, Slide } from "react-toastify";
import css from "./Layout.module.css";

interface Props {
  children?: ReactNode;
}

const nunito = Nunito({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const Layout = ({ children }: Props) => (
  <main className={`${nunito.className} ${css.main}`}>
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

    <Nav />
    <div className={css.contents}>{children}</div>
    <Footer />
  </main>
);

export default Layout;

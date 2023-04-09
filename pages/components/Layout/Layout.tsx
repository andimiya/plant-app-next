import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Header/Header";
import { Lato } from "next/font/google";
import css from "./Layout.module.css";

interface Props {
  children?: ReactNode;
}

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});

const Layout = ({ children }: Props) => (
  <main className={`${lato.className} ${css.main}`}>
    <Nav />
    <main>{children}</main>
    <Footer />
  </main>
);

export default Layout;

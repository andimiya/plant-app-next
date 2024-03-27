import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { ToastContainer, Slide } from 'react-toastify';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => (
  <main>
    <Header />
    <div>{children}</div>
    {/* <Footer /> */}
  </main>
  // <div>
  //   <ToastContainer
  //     position="top-right"
  //     autoClose={2000}
  //     hideProgressBar
  //     newestOnTop={false}
  //     closeOnClick
  //     rtl={false}
  //     pauseOnFocusLoss
  //     draggable
  //     pauseOnHover
  //     theme="dark"
  //     transition={Slide}
  //   />

  //   <Header />

  //   <div>{children}</div>
  //   <Footer />
  // </div>
);

export default Layout;

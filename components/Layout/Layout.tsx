import { ReactNode } from 'react';
import Header from '../Header/Header';
import { NavMenu } from '../NavMenu/NavMenu';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => (
  <main>
    <Header />
    <div className="hero">
      <NavMenu />
    </div>
    <div style={{ width: '70%', margin: '0 auto' }}>{children}</div>
    <div style={{ marginBottom: '50px' }}></div>
  </main>
);

export default Layout;

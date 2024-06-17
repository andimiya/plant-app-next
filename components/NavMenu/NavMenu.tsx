import Link from 'next/link';
import css from './NavMenu.module.css';

export const NavMenu = () => {
  return (
    <div className={css.container}>
      <div className={css.titleContainer}>
        <Link href="/">
          <div className={css.siteTitle}>PLANT CARE</div>
        </Link>
      </div>
      <div className={css.navContainer}>
        <nav role="navigation" className={css.nav}>
          <Link href="/plants">PLANT LIBRARY</Link>
          <a href="care-log.html">CARE LOG</a>
          <a href="contact.html">LOGIN</a>
        </nav>
      </div>
    </div>
  );
};

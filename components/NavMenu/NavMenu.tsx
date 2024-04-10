import css from './NavMenu.module.css';

export const NavMenu = () => {
  return (
    <div className={css.container}>
      <div className={css.titleContainer}>
        <a href="#">
          <div className={css.siteTitle}>PLANT CARE</div>
        </a>
      </div>
      <div className={css.navContainer}>
        <nav role="navigation" className={css.nav}>
          <a href="index.html" aria-current="page">
            PLANT LIBRARY
          </a>
          <a href="care-log.html">CARE LOG</a>
          <a href="contact.html">LOGIN</a>
        </nav>
      </div>
    </div>
  );
};

export const NavMenu = () => {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="nav w-nav"
    >
      <div className="w-container">
        <a href="#" className="logo w-nav-brand">
          <div>PLANT CARE</div>
        </a>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <a
            href="index.html"
            aria-current="page"
            className="nav-link w-nav-link w--current"
          >
            PLANT LIBRARY
          </a>
          <a href="care-log.html" className="nav-link w-nav-link">
            CARE LOG
          </a>
          <a href="contact.html" className="nav-link w-nav-link">
            LOGIN
          </a>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
};

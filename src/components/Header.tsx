import { useState } from "react";

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      className={`site-header ${isHovered ? "site-header--hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="site-header__inner">
        <nav className="site-header__nav site-header__nav--left">
          <a href="#paslaugos">Paslaugos</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#atsiliepimai">Atsiliepimai</a>
        </nav>

        <a href="#" className="site-header__brand">
          <span className="site-header__brand-main">v.v.makeeup</span>
        </a>

        <nav className="site-header__nav site-header__nav--right">
          <a href="#mokymai">Mokymai</a>
          <a href="#kontaktai">Kontaktai</a>
          <a
            href="https://www.treatwell.lt/"
            target="_blank"
            rel="noreferrer"
            className="site-header__cta"
          >
            Registracija
          </a>
        </nav>

        <button className="site-header__menu" aria-label="Open menu">
          Menu
        </button>
      </div>
    </header>
  );
}

export default Header;
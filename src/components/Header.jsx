import Navigation from "./Navigation";
import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e, expanded) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <header className="primary-header">
      <div className="wrapper">
        <div className="primary-header__container">
          <img src={logo} alt="Logo" />
          <button
            className="mobile-nav-toggle"
            aria-expanded={expanded}
            aria-controls="navigation"
            onClick={(e) => handleClick(e, expanded)}
          >
            <img
              className={expanded ? "icon-close" : "icon-hamburger"}
              src={expanded ? closeIcon : hamburgerIcon}
              alt=""
              aria-hidden="true"
            />
            <span className="visually-hidden">Menu</span>
          </button>
          <Navigation expanded={expanded} />
        </div>
      </div>
    </header>
  );
};

export default Header;

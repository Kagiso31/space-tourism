import Navigation from "./Navigation";
import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

const Header = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <header className="primary-header">
      <a href="#">
        <img src={logo} alt="Logo" />
      </a>
      <button
        className="mobile-nav-toggle"
        aria-expanded="false"
        aria-controls="navigation"
        onClick={handleClick}
      >
        <img
          className="icon-hamburger"
          src={hamburgerIcon}
          alt=""
          aria-hidden="true"
        />
        <img className="icon-close" src={closeIcon} alt="" aria-hidden="true" />
        <span className="visually-hidden">Menu</span>
      </button>

      <Navigation />
    </header>
  );
};

export default Header;

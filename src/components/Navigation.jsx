import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ expanded }) => {
  useEffect(() => {
    if (expanded) {
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "auto";
    }
    return () => {
      document.querySelector("html").style.overflowY = "auto";
    };
  }, [expanded]);

  return (
    <nav className="nav" id="navigation" data-visible={expanded}>
      <ul role="list" className="nav__list">
        <li className="nav__item">
          <NavLink to="/space-tourism" className="nav__link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/space-tourism/destination" className="nav__link">
            Destination
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/space-tourism/crew" className="nav__link">
            Crew
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/space-tourism/technology" className="nav__link">
            Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

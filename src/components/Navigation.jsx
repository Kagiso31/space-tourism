import { NavLink } from "react-router-dom";

const Navigation = ({ expanded }) => {
  return (
    <>
      <nav className="nav" id="navigation" data-visible={expanded}>
        <ul role="list" className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link" href="#">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/destination" className="nav__link" href="#">
              Destination
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/crew" className="nav__link" href="#">
              Crew
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/technology" className="nav__link" href="#">
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

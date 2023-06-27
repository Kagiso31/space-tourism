const Navigation = () => {
  return (
    <>
      <nav className="nav" id="navigation">
        <ul role="list" className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Destination
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Crew
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Technology
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

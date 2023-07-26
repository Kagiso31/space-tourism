import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);
  return (
    <section className="home">
      <div className="wrapper">
        <div className="home__text">
          <h1 className="home__heading">
            <strong className="home__subtitle">
              So, you want to travel to
            </strong>
            <strong className="home__title">Space</strong>
          </h1>
          <p className="home__body">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to="/space-tourism/destination">
          <button className="home__button">Explore</button>
        </Link>
      </div>
      <div className="attribution">
        <p>
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            {" "}
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by{" "}
          <a target="_blank" href="https://www.github.com/Kagiso31">
            Kagiso Mokou
          </a>
        </p>
        <p>
          <a href="https://www.flaticon.com/free-icons/link" target="_blank">
            Favicon created by nawicon - Flaticon
          </a>
        </p>
      </div>
    </section>
  );
};

export default Home;

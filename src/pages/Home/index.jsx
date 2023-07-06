import { useEffect } from "react";

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
        <button className="home__button">Explore</button>
      </div>
    </section>
  );
};

export default Home;

import { useEffect, useState } from "react";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";

const Destination = () => {
  useEffect(() => {
    document.body.classList.add("destination-page");
    return () => document.body.classList.remove("destination-page");
  }, []);

  const [activeTab, setActiveTab] = useState("tab-1");

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
  };

  const changeImg = () => {
    switch (activeTab) {
      case "tab-1":
        return moon;
      case "tab-2":
        return mars;
      case "tab-3":
        return europa;
      case "tab-4":
        return titan;
    }
  };

  // Keyboard Navigation
  const moveLeft = () => {
    const currentTab = document.activeElement;
    if (!currentTab.parentElement.previousElementSibling) {
      const nextTab =
        currentTab.parentElement.parentElement.lastElementChild
          .firstElementChild;
      nextTab.focus();
    } else {
      const nextTab =
        currentTab.parentElement.previousElementSibling.firstElementChild;
      nextTab.focus();
    }
  };

  const moveRight = () => {
    const currentTab = document.activeElement;
    if (!currentTab.parentElement.nextElementSibling) {
      const nextTab =
        currentTab.parentElement.parentElement.firstElementChild
          .firstElementChild;
      nextTab.focus();
    } else {
      const nextTab =
        currentTab.parentElement.nextElementSibling.firstElementChild;
      nextTab.focus();
    }
  };

  const moveHome = () => {
    const currentTab = document.activeElement;
    const nextTab =
      currentTab.parentElement.parentElement.firstElementChild
        .firstElementChild;
    nextTab.focus();
  };

  const moveEnd = () => {
    const currentTab = document.activeElement;
    const nextTab =
      currentTab.parentElement.parentElement.lastElementChild.firstElementChild;
    nextTab.focus();
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
      case "Home":
        e.preventDefault();
        moveHome();
        break;
      case "End":
        e.preventDefault();
        moveEnd();
        break;
    }
  };

  return (
    <section className="destination">
      <h1 id="destination-title" className="destination__title">
        <span>01</span> Pick your destination
      </h1>

      <div className="destination__tabs-container">
        <img
          className="destination__img"
          src={changeImg()}
          alt="Picture of destination"
        />

        <div>
          <ul
            aria-labelledby="destination-title"
            role="tablist"
            onKeyDown={(e) => handleKeyDown(e)}
          >
            <li role="presentation">
              <a
                onClick={(e) => handleClick(e, e.target.id)}
                aria-selected={activeTab === "tab-1"}
                role="tab"
                id="tab-1"
                href="#moon"
                tabIndex={activeTab === "tab-1" ? "" : "-1"}
              >
                Moon
              </a>
            </li>
            <li role="presentation">
              <a
                onClick={(e) => handleClick(e, e.target.id)}
                aria-selected={activeTab === "tab-2"}
                role="tab"
                id="tab-2"
                href="#mars"
                tabIndex={activeTab === "tab-2" ? "" : "-1"}
              >
                Mars
              </a>
            </li>
            <li role="presentation">
              <a
                onClick={(e) => handleClick(e, e.target.id)}
                aria-selected={activeTab === "tab-3"}
                role="tab"
                id="tab-3"
                href="#europa"
                tabIndex={activeTab === "tab-3" ? "" : "-1"}
              >
                Europa
              </a>
            </li>
            <li role="presentation">
              <a
                onClick={(e) => handleClick(e, e.target.id)}
                aria-selected={activeTab === "tab-4"}
                role="tab"
                id="tab-4"
                href="#titan"
                tabIndex={activeTab === "tab-4" ? "" : "-1"}
              >
                Titan
              </a>
            </li>
          </ul>
          <div className="destination__tab-panels">
            {/* Moon */}
            <div
              id="moon"
              role="tabpanel"
              aria-labelledby="tab-1"
              tabIndex="0"
              hidden={activeTab === "tab-1" ? false : true}
            >
              <h2 className="destination__name">Moon</h2>
              <p className="destination__description wrapper">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className="destination__extra-info">
                <div className="destination__distance">
                  <h3 className="destination__distance-title">Avg. distance</h3>
                  <p className="destination__distance-value">384,400 km</p>
                </div>
                <div className="destination__travel">
                  <h3 className="destination__travel-title">
                    Est. travel time
                  </h3>
                  <p className="destination__travel-value">3 days</p>
                </div>
              </div>
            </div>
            {/* Mars */}
            <div
              id="mars"
              role="tabpanel"
              aria-labelledby="tab-2"
              tabIndex="0"
              hidden={activeTab === "tab-2" ? false : true}
            >
              <h2 className="destination__name">Mars</h2>
              <p className="destination__description wrapper">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>
              <div className="destination__extra-info">
                <div className="destination__distance">
                  <h3 className="destination__distance-title">Avg. distance</h3>
                  <p className="destination__distance-value">225 mil. km</p>
                </div>
                <div className="destination__travel">
                  <h3 className="destination__travel-title">
                    Est. travel time
                  </h3>
                  <p className="destination__travel-value">9 months</p>
                </div>
              </div>
            </div>
            {/* Europa */}
            <div
              id="europa"
              role="tabpanel"
              aria-labelledby="tab-3"
              tabIndex="0"
              hidden={activeTab === "tab-3" ? false : true}
            >
              <h2 className="destination__name">Europa</h2>
              <p className="destination__description wrapper">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
              <div className="destination__extra-info">
                <div className="destination__distance">
                  <h3 className="destination__distance-title">Avg. distance</h3>
                  <p className="destination__distance-value">628 mil. km</p>
                </div>
                <div className="destination__travel">
                  <h3 className="destination__travel-title">
                    Est. travel time
                  </h3>
                  <p className="destination__travel-value">3 years</p>
                </div>
              </div>
            </div>
            {/* Titan */}
            <div
              id="titan"
              role="tabpanel"
              aria-labelledby="tab-4"
              tabIndex="0"
              hidden={activeTab === "tab-4" ? false : true}
            >
              <h2 className="destination__name">Titan</h2>
              <p className="destination__description wrapper">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>
              <div className="destination__extra-info">
                <div className="destination__distance">
                  <h3 className="destination__distance-title">Avg. distance</h3>
                  <p className="destination__distance-value">1.6 bil. km</p>
                </div>
                <div className="destination__travel">
                  <h3 className="destination__travel-title">
                    Est. travel time
                  </h3>
                  <p className="destination__travel-value">7 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;

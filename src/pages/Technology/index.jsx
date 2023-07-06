import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import launchVehicle_landscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehicle_portrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsule_landscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import spaceCapsule_portrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import spacePort_landscape from "../../assets/technology/image-spaceport-landscape.jpg";
import spacePort_portrait from "../../assets/technology/image-spaceport-portrait.jpg";

const Technology = () => {
  useEffect(() => {
    document.body.classList.add("technology-page");
    return () => document.body.classList.remove("technology-page");
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section className="technology">
      <h1>
        <span>03</span> Space launch 101
      </h1>
      <div>
        <Swiper
          modules={[Pagination, A11y]}
          pagination={pagination}
          slidesPerView={1}
          grabCursor="true"
          keyboard={{ enabled: true }}
        >
          <SwiperSlide>
            <section className="technology__item">
              <div className="technology__img">
                <picture>
                  <source
                    media="(min-width:68.75em)"
                    srcSet={launchVehicle_portrait}
                  />
                  <img src={launchVehicle_landscape} alt="Launch Vehicle" />
                </picture>
              </div>
              <div className="technology__text wrapper">
                <h2>
                  <strong className="technology__subtitle">
                    The terminology...
                  </strong>
                  <strong className="technology__title">Launch vehicle</strong>
                </h2>
                <p className="technology__description">
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the launch pad!
                </p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="technology__item">
              <div className="technology__img">
                <picture>
                  <source
                    media="(min-width:68.75em)"
                    srcSet={spacePort_portrait}
                  />
                  <img src={spacePort_landscape} alt="Space Port" />
                </picture>
              </div>
              <div className="technology__text wrapper">
                <h2>
                  <strong className="technology__subtitle">
                    The terminology...
                  </strong>
                  <strong className="technology__title">Spaceport</strong>
                </h2>
                <p className="technology__description">
                  A spaceport or cosmodrome is a site for launching (or
                  receiving) spacecraft, by analogy to the seaport for ships or
                  airport for aircraft. Based in the famous Cape Canaveral, our
                  spaceport is ideally situated to take advantage of the Earth’s
                  rotation for launch.
                </p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="technology__item">
              <div className="technology__img">
                <picture>
                  <source
                    media="(min-width:68.75em)"
                    srcSet={spaceCapsule_portrait}
                  />
                  <img src={spaceCapsule_landscape} alt="Space Capsule" />
                </picture>
              </div>
              <div className="technology__text wrapper">
                <h2>
                  <strong className="technology__subtitle">
                    The terminology...
                  </strong>
                  <strong className="technology__title">Space capsule</strong>
                </h2>
                <p className="technology__description">
                  A space capsule is an often-crewed spacecraft that uses a
                  blunt-body reentry capsule to reenter the Earth's atmosphere
                  without wings. Our capsule is where you'll spend your time
                  during the flight. It includes a space gym, cinema, and plenty
                  of other activities to keep you entertained.
                </p>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Technology;

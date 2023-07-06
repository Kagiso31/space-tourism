import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";
import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";

const Crew = () => {
  useEffect(() => {
    document.body.classList.add("crew-page");
    return () => document.body.classList.remove("crew-page");
  }, []);

  return (
    <section className="crew | wrapper">
      <h1 className="crew__title">
        <span>02</span> Meet your crew
      </h1>

      <Swiper
        modules={[Pagination, A11y]}
        slidesPerView={1}
        keyboard={{ enabled: true }}
        grabCursor="true"
        pagination={{ clickable: true }}
        a11y={{ enabled: true }}
      >
        <SwiperSlide>
          <div className="crew__member">
            <div>
              <h2>
                <strong className="crew__role">Commander</strong>
                <strong className="crew__name">Douglas Hurley</strong>
              </h2>
              <p className="crew__bio">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>
            <div className="crew__img">
              <img src={douglas} alt="Picture of Douglas" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="crew__member">
            <div>
              <h2>
                <strong className="crew__role">Flight Engineer</strong>
                <strong className="crew__name">Anousheh Ansari</strong>
              </h2>
              <p className="crew__bio">
                Anousheh Ansari is an Iranian American engineer and co-founder
                of Prodea Systems. Ansari was the fourth self-funded space
                tourist, the first self-funded woman to fly to the ISS, and the
                first Iranian in space.
              </p>
            </div>
            <div className="crew__img">
              <img src={anousheh} alt="Picture of Anousheh" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="crew__member">
            <div>
              <h2>
                <strong className="crew__role">Pilot</strong>
                <strong className="crew__name">Victor Glover</strong>
              </h2>
              <p className="crew__bio">
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18.He was a crew member of
                Expedition 64, and served as a station systems flight engineer.
              </p>
            </div>
            <div className="crew__img">
              <img src={victor} alt="Picture of Victor" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="crew__member">
            <div>
              <h2>
                <strong className="crew__role">Mission Specialist</strong>
                <strong className="crew__name">Mark Shuttleworth</strong>
              </h2>
              <p className="crew__bio">
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            </div>
            <div className="crew__img">
              <img src={mark} alt="Picture of Mark" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Crew;

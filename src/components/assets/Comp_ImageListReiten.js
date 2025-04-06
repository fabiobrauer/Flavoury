import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'aos/dist/aos.css';

import gallery1 from '../../assets/images/Reint5.jpeg';
import gallery2 from '../../assets/images/Pferd.jpeg';
import gallery3 from '../../assets/images/Adessa.jpeg';
import gallery4 from '../../assets/images/reiten3 1.png';
import gallery5 from '../../assets/images/folen.png';

const Weslider = {
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 10,
        speed: 1000,
        easing: 'linear',
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 10,
        speed: 1000,
        easing: 'linear',
      },
    },
  ],
};

export default function ReitenCustomImageList() {
  return (
    <>
      <div className="row_inner_am who_we_section who_version_two">
        <div className="container">
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500}>
            <span className="sub_text">Reitbetrieb & Ponys</span>
            <h2>
              Ponie-Reiten & ländliche Erlebnisse für Kinder, Familien und Pferdeliebhaber.
            </h2>
          </div>
        </div>

        <div className="gallery_slider">
          <Slider
            className="Slider-Who"
            id="gallery_flow_right"
            data-aos="fade-in"
            data-aos-duration={1500}
            {...Weslider}
            slidesToShow={11.5}
            arrows={false}
            autoplay={true}
            autoplaySpeed={10000}
            easing="linear"
          >
            <div className="item">
              <div className="img">
                <img src={gallery1} alt="Ponie Reiten" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery2} alt="Pferd" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery3} alt="Fohlen" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery4} alt="Kind mit Ponie" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery5} alt="Kind mit Ponie" />
              </div>
            </div>
            {/* Du kannst hier beliebig oft durchrotieren */}
            <div className="item">
              <div className="img">
                <img src={gallery1} alt="Ponie Reiten" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery2} alt="Pferd" />
              </div>
            </div>
          </Slider>
        </div>

        <div className="text-center mt-4" data-aos="fade-in" data-aos-duration={1500}>
          <Link to="https://ponyreitschuleknot.wixsite.com/pony-club" className="btn btn_primary">
            Mehr zum Reiten
          </Link>
        </div>
      </div>
    </>
  );
}

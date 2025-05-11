import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Weimg from '../../assets/images/who_we.png'
import Wechef from '../../assets/images/who_chef.png'
import gallery01 from '../../assets/images/ProduktBild-103.jpg'
import gallery02 from '../../assets/images/ProduktBild-104.png'
import gallery03 from '../../assets/images/ProduktBild-105.png'
import gallery04 from '../../assets/images/ProduktBild-106.png'
import gallery05 from '../../assets/images/ProduktBild-107.png'
import gallery06 from '../../assets/images/ProduktBild-108.png'
import gallery07 from '../../assets/images/ProduktBild-109.png'
import gallery08 from '../../assets/images/ProduktBild-110.png'

const Whoslider = {
  infinite: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 10,
        autoplaySpeed: 2000,
        easing: "linear"
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        autoplaySpeed: 2000,
        easing: "linear"
      },
    },
  ],
}

function WhoWe() {
  return (
    <>
      <div className="row_am who_we_section bg_white_textcher">
        <div className="sider_shape" data-aos="fade-in" data-aos-duration={1500}>
        </div>
        <div className="container">
          <div className="section_title d-flex justify-content-center align-items-start" data-aos="fade-up" data-aos-duration={1500} >
            <div className="icon">
{/*               <img src={WeIcon} alt="img" /> */}
            </div>
            <div className="text">
              <span className="sub_text">Über uns</span>
              <h2>
                Genießen Sie die idyllische Landatmosphäre und lassen Sie sich von uns verwöhnen.
              </h2>
            </div>
          </div>
          <div className="row row_am">
            <div className="col-md-6">
              <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                <img className="img-fluid radius_img" src={Weimg} alt="img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="who_We_text">
                <p data-aos="fade-up" data-aos-duration={1500}>
                Wir freuen uns immer, Sie in unserem sanierten Bauernhaus aus dem 16. Jahrhundert als Gast empfangen zu dürfen. Ein erfahrenes Küchenteam rund um Frank Schiffner kocht täglich für Sie – ob die bereits bekannten und beliebten Klassiker der Hofküche (auch mit Fleisch von den hofeigenen Rindern) oder neuartige Kreationen mit einem Mix aus Elementen der mediterranen und japanischen Küche, inspiriert von Axel Henkel. Wichtig sind uns dabei die frischen Produkte, mit denen neue Ideen auf der regelmäßig wechselnden Karte umgesetzt werden. Essen soll, davon sind wir überzeugt, generationenübergreifend Spaß machen!
                </p>
                <div className="chef_block d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration={1500} >
                  <img className="chef_img radius_img" src={Wechef} alt="img" />
                </div>
                <div className="action_block" data-aos="fade-up" data-aos-duration={1500} >
                  <ul className="social_media d-flex align-content-center">
                    <li>
                      <Link to="https://www.facebook.com/hofundgut/">
                        <i className="icofont-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/hofundgutjesteburg/">
                        <i className="icofont-instagram" />
                      </Link>
                    </li>
                  </ul>
                  <Link to="/kontakt" className="btn btn_primary">
                    Get direction <i className="icofont-location-pin" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery_direction_right gallery_slider">
          <Slider className="Slider-Who" {...Whoslider} id="gallery_flow_right" data-aos="fade-in" data-aos-duration={1500} slidesToShow={11.5} arrows={false} autoplay={true} autoplaySpeed={7000}>
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
          </Slider>
          <Slider className='Slider-Who'{...Whoslider} id="gallery_flow_left" data-aos="fade-in" data-aos-duration={1500}  rtl={true} slidesToShow={11.5} arrows={false} autoplay={true} autoplaySpeed={7000} >
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default WhoWe
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'aos/dist/aos.css';
import '../../assets/css/slick.css';


import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';



import Slide1 from '../../assets/images/Reint5.jpg';
import Slide2 from '../../assets/images/Pferd.jpg';
import Slide3 from '../../assets/images/Adessa.jpg';
import Slide4 from '../../assets/images/reiten3 1.png';
import Slide5 from '../../assets/images/folen.jpg';
import Slide6 from '../../assets/images/pfohlen.jpg';
import Slide7 from '../../assets/images/ausblick.jpg';



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

    <div className='mt-5'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 25.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container text-center"
        >
          <SwiperSlide>
            <a>
            <img src={Slide1} alt="img" className='radius_img_hofladen smaller_image'/>
            </a>
          </SwiperSlide>
          
          <SwiperSlide>
            <a >
              <img src={Slide2} alt="img" className='radius_img_hofladen smaller_image'/>
            </a>          
          </SwiperSlide>
          
          <SwiperSlide>
            <a>
            <img src={Slide3} alt="img" className='radius_img_hofladen smaller_image'/>
            </a>
          </SwiperSlide>
          
          <SwiperSlide>
          <img src={Slide4} alt="img" className='radius_img_hofladen smaller_image'/>
          </SwiperSlide>
          
          <SwiperSlide>
            <a>
            <img src={Slide5} alt="img" className='radius_img_hofladen smaller_image'/>
            </a>
          </SwiperSlide>
        </Swiper>
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

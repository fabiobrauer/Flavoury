import React from 'react';
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Slide1 from '../../assets/images/ProduktBild-103.jpg'
import Slide2 from '../../assets/images/ProduktBild-106.jpg'
import Slide3 from '../../assets/images/ProduktBild-109.jpg'
import Slide4 from '../../assets/images/ProduktBild-111.jpg'
import Slide5 from '../../assets/images/ProduktBild-114.jpg'
import Slide6 from '../../assets/images/ProduktBild-115.jpg'
import Slide7 from '../../assets/images/ProduktBild-117.jpg'
import Slide8 from '../../assets/images/ProduktBild-120.jpg'
import Slide9 from '../../assets/images/ProduktBild-123.jpg'
import Slide10 from '../../assets/images/ProduktBild-125.jpg'
import Slide11 from '../../assets/images/ProduktBild-128.jpg'
import Slide12 from '../../assets/images/ProduktBild-130.jpg'
import Slide13 from '../../assets/images/ProduktBild-133.jpg'
import Slide14 from '../../assets/images/ProduktBild-137.jpg'

export default function Comp_Swiper() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Helmet>
        <title>Besuchen Sie unseren Onlineshop</title>
      </Helmet>
      
      <h2>Besuchen Sie unseren Onlineshop</h2>
      <p>
        Hier bieten wir nur unsere besten Produkte an, sowie griechisches Olivenöl, Produkte aus unserer Landwirtschaft und von uns ausgewählte Weine.
      </p>
      
      <div style={{ width: "80%", margin: "0 auto" }}>
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
          className="swiper_container"
        >
          <SwiperSlide>
            <a href="https://shop-hof-und-gut.de/collections/olivenol/products/olivenol">
            <img src={Slide1} alt="img" className='radius_img_hofladen smaller_image img-fluid'/>
            </a>
          </SwiperSlide>
          
          <SwiperSlide>
            <a href="https://shop-hof-und-gut.de/collections/olivenol/products/olivenol">
              <img src={Slide2} alt="img" className='radius_img_hofladen smaller_image img-fluid'/>
            </a>          
          </SwiperSlide>
          
          <SwiperSlide>
            <a href="https://shop-hof-und-gut.de/products/bulgarini-lugana">
            <img src={Slide3} alt="img" className='radius_img_hofladen smaller_image img-fluid'/>
            </a>
          </SwiperSlide>
          
          <SwiperSlide>
          <img src={Slide4} alt="img" className='radius_img_hofladen smaller_image img-fluid'/>
          </SwiperSlide>
          
          <SwiperSlide>
            <a href="https://shop-hof-und-gut.de/collections/weine/products/fabelhaft">
            <img src={Slide5} alt="img" className='radius_img_hofladen smaller_image img-fluid'/>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      
      <div style={{ marginTop: "20px" }}>
        <a href="https://shop-hof-und-gut.de/">
          <button className="btn btn_primary">Zum Shop</button>
        </a>
      </div>
    </div>
  );
}
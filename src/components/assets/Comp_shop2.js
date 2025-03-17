import React from 'react';
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

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
              <img src="ProduktBild-103.jpg" alt="Olivenöl" style={{ width: "250px", height: "450px", borderRadius: "10px" }} />
            </a>
          </SwiperSlide>
          
          <SwiperSlide>
            <img src="ProduktBild-106.jpg" alt="Eberbach Schäfer Champagner" style={{ width: "250px", height: "450px", borderRadius: "10px" }} />
          </SwiperSlide>
          
          <SwiperSlide>
            <a href="https://shop-hof-und-gut.de/products/bulgarini-lugana">
              <img src="ProduktBild-117.jpg" alt="Lugana Weißwein" style={{ width: "250px", height: "450px", borderRadius: "10px" }} />
            </a>
          </SwiperSlide>
          
          <SwiperSlide>
            <img src="ProduktBild-120.jpg" alt="Rose d`Anjou" style={{ width: "250px", height: "450px", borderRadius: "10px" }} />
          </SwiperSlide>
          
          <SwiperSlide>
            <a href="https://shop-hof-und-gut.de/collections/weine/products/fabelhaft">
              <img src="ProduktBild-147.jpg" alt="Fabelhaft Rotwein Nieport" style={{ width: "250px", height: "450px", borderRadius: "10px" }} />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      
      <div style={{ marginTop: "20px" }}>
        <a href="https://shop-hof-und-gut.de/">
          <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>Zum Shop</button>
        </a>
      </div>
    </div>
  );
}
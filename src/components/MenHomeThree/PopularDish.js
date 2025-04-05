import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import DishImg1 from '../../assets/images/chiken_side.png'
import DishImg2 from '../../assets/images/chiken_side2.png'
import Dish01 from '../../assets/images/SpargelScampi.jpeg'
import Dish02 from '../../assets/images/Nachtisch.jpeg'
import Dish03 from '../../assets/images/Dorade.jpeg'
import Dish04 from '../../assets/images/Entrecôte.jpg'

const Popular = {
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

function PopularDish() {
  return (
    <>
      <section className="row_inner_am popular_dish_section">
        <div className="side_shape">
          <img className="right_side" src={DishImg1} alt="img" />
          <img className="left_side" src={DishImg2} alt="img" />
        </div>
        <div className="container">
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
            <span className="sub_text">Genießen Sie unsere traditionelle & moderne Küche in unserem historischen Bauernhaus aus dem 16. Jahrhundert.</span>
            <h1>Speisen am Hof</h1>
          </div>
          <div id="popular_dish" className="dishList_slider" data-aos="fade-in" data-aos-duration={1500} >
            <Slider className="Slider-dishes" {...Popular} slidesToShow={4} arrows={false} margin={15} autoplay={true} autoplaySpeed={1000}>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src={Dish01} alt="img" />
                  </div>
                  <h3>Spargel Scampi</h3>
                </div>
              </div>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src={Dish02} alt="img" />
                  </div>
                  <h3>Dessert Sorbet</h3>
                </div>
              </div>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src={Dish03} alt="img" />
                  </div>
                  <h3>Dorade</h3>
                </div>
              </div>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src={Dish04} alt="img" />
                  </div>
                  <h3>Entrecôte Steak</h3>
                </div>
              </div>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src={Dish01} alt="img" />
                  </div>
                  <h3>Spargel Scampi</h3>
                </div>
              </div>
            </Slider>
          </div>
          <div className="text-center mb-md-4">                
            <Link to="https://cdn.shopify.com/s/files/1/0756/4568/2002/files/HuG_Karte-7_2.pdf?v=1740935225" className="btn btn_primary">
              Speisekarte
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default PopularDish
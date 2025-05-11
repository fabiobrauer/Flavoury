import React from 'react'
import { Link } from 'react-router-dom'
import DishImg from '../../assets/images/discount_dish.png'
import DishImg01 from '../../assets/images/Buffet1.jpeg'
import DishImg02 from '../../assets/images/FeierDiele.jpg'
import DishImg03 from '../../assets/images/Vorspeiseplatte.jpeg'

function DiscountSection() {
    return (
        <>
            <section className="discount_section bg_white_textcher row_inner_am">
                <div className="container">
                    <div className="section_title text-center"             data-aos="fade-up"
            data-aos-duration={1500}>
                        <span className="sub_text">Buchen Sie unser Abiente</span>
                        <h2>Sie können auch auf unserer Diele mit bis zu 75 Personen in attraktiven historischem Ambiente feiern und tagen.</h2>
                    </div>
                    <div className="dish_slides">
                        <div className="dishMain" data-30-top="position: sticky;" style={{ top: 230, position: "sticky" }}>
                            <div className="dish_block">
                                <div className="dish_text">
                                    <div className="text">
                                        <h3 className='Buffet'>Büffetbeispiel ab 20 Personen</h3>
                                        <ul className="list-group list-buffet">
                                            <li>Tomatensuppe mit Crème Fraîche</li>
                                            <li>Hof & Gut Anti-Pasti</li>
                                            <li>Rote Bete-Carpaccio</li>
                                            <li>Schweinefilet vom Bio-Schwein</li>
                                            <li>Crème Brulée mit Waldbeerenkompott</li>
                                        </ul>
                                        <Link to="/Kontakt" className="btn btn_primary m-3">
                                            jetzt Buchen
                                        </Link>
                                    </div>
                                </div>
                                <div className="dish_img">
                                    <img src={DishImg01} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="dishMain" data-30-top="position: sticky;" style={{ top: 260, position: "sticky" }}>
                            <div className="dish_block">
                                <div className="dish_text">
                                    <div className="text">
                                    <h3 className='Buffet'>Menübeispiele ab 20 Personen Menü 1</h3>
                                        <ul className="list-group list-buffet">
                                        <li>Karotten-Ingwer-Suppe</li>
                                        <li>Zanderfilet auf Rahmsauerkraut</li>
                                        <li>Schokoladenmousse mit Himbeer-Chilisauce</li>
                                        </ul>
                                        <Link to="/Kontakt" className="btn btn_primary m-3">
                                            jetzt Buchen
                                        </Link>
                                    </div>
                                </div>
                                <div className="dish_img">
                                    <img src={DishImg02} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="dishMain" data-30-top="position: sticky;" style={{ top: 290, position: "sticky" }}>
                            <div className="dish_block">
                                <div className="dish_text">
                                <div className="text">
                                    <h3 className='Buffet'>Menübeispiele ab 20 Personen Menü 2</h3>
                                        <ul className="list-group list-buffet">
                                        <li>Rote Bete–Carpaccio mit Trüffel-Limonendressing</li>
                                        <li>Kalbsvoltini mit Balsamico-Linsengemüse</li>
                                        <li>Käsebrett mit Weintrauben</li>
                                        </ul>
                                        <Link to="/Kontakt" className="btn btn_primary m-3">
                                            jetzt Buchen
                                        </Link>
                                    </div>
                                </div>
                                <div className="dish_img">
                                    <img src={DishImg03} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DiscountSection
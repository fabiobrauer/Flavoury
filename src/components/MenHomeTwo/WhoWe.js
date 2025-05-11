import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Icon01 from '../../assets/images/title_icon.png'
import Icon02 from '../../assets/images/who_icon.png'
import Icon03 from '../../assets/images/who_icon2.png'
import gallery1 from '../../assets/images/SpanischeGamba.jpg'
import gallery2 from '../../assets/images/Fisch.jpg'
import gallery3 from '../../assets/images/SchnitzelSpargel.jpg'
import gallery4 from '../../assets/images/Ziegenthaler.jpg'
import gallery5 from '../../assets/images/ProduktBild-141.jpg'
import gallery6 from '../../assets/images/SpargelScampi.jpeg'
import gallery7 from '../../assets/images/SpargelSteak.jpg'
import gallery8 from '../../assets/images/Dorade.jpeg'

const Weslider = {
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 9,
                speed: 1000,
                easing: "linear"
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 9,
                speed: 1000,
                easing: "linear"
            },
        },
    ],
}

function WhoWe() {

    return (
        <>
            <div className="row_inner_am who_we_section who_version_two light_texchur">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <div className="icon">
                            <img src={Icon01} alt="img" />
                        </div>
                        <span className="sub_text">Über unser Restaurant</span>
                        <h2>
                        Ein erfahrenes Küchenteam rund um Frank Schiffner kocht täglich für Sie – ob die beliebten Klassiker der Hofküche oder innovative Kreationen mit mediterranen und japanischen Einflüssen von Axel Henkel.
                        </h2>
                    </div>
                </div>
                <div className="gallery_slider">
                    <Slider className="Slider-Who mb-3" id="gallery_flow_right" data-aos="fade-in" data-aos-duration={1500} {...Weslider} slidesToShow={11.5} arrows={false} autoplay={true} autoplaySpeed={10000} easing='linear'>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery4} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery4} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery4} alt="img" />
                            </div>
                        </div>
                    </Slider>
                    <Slider className="Slider-Who" id="gallery_flow_left" data-aos="fade-in" data-aos-duration={1500} {...Weslider} rtl={true} slidesToShow={11.5} arrows={false} autoplay={true} autoplaySpeed={10000} easing='linear' >
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery8} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery8} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item d-flex justify-content-center">
                            <div className="img">
                                <img src={gallery8} alt="img" />
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="text-center" data-aos="fade-in" data-aos-duration={1500}>
                    <Link to="/UeberUns" className="btn btn_primary">
                        Mehr über Uns
                    </Link>
                </div>
            </div>
        </>
    )
}

export default WhoWe
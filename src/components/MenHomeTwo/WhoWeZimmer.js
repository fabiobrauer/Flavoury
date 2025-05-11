import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import gallery1 from '../../assets/images/Zimmer1.jpg'
import gallery2 from '../../assets/images/ZImmer1_1.jpg'
import gallery3 from '../../assets/images/Zimmer1_2.jpg'
import gallery4 from '../../assets/images/Zimmer1_3.jpg'
import gallery5 from '../../assets/images/Zimmer2.jpg'
import gallery6 from '../../assets/images/Zimmer2_1.jpg'
import gallery7 from '../../assets/images/Zimmer2_2.jpg'
import gallery8 from '../../assets/images/Zimmer2_3.jpg'
import gallery9 from '../../assets/images/Espresso2.jpg'
import gallery10 from '../../assets/images/Ferienwohnung1.jpg'
import gallery11 from '../../assets/images/Ferienwohnung2.jpg'
import gallery12 from '../../assets/images/Ferienwohnung3.jpg'
import gallery13 from '../../assets/images/Ferienwohnung4.jpg'
import gallery14 from '../../assets/images/thumbnail_IMG-20180220-WA0001.jpg'
import '../../assets/css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Weslider = {
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 10,
                speed: 1000,
                easing: "linear"
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 10,
                speed: 1000,
                easing: "linear"
            },
        },
    ],
}

function WhoWeZimmer() {


    useEffect(() => {
        AOS.init({ once: false });
        AOS.refresh(); // <- dieser Teil ist essenziell
      }, []);
    

    return (
        <>
            <div className="row_inner_am who_we_section who_version_two light_texchur2">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade2-up" data-aos-duration={1500} >
                    <span className="sub_text">Unsere Zimmer</span>
                    <h2>
                        Erholung im Schlaf unterm Reetdach!
                    </h2>
                    </div>
                </div>
                <div className="gallery_slider">
                    <Slider className="Slider-Who" id="gallery_flow_right" data-aos="fade-in" data-aos-duration={1500} {...Weslider} slidesToShow={11.5} arrows={false} autoplay={true} autoplaySpeed={10000} easing='linear'>
                        <div className="item">
                            <div className="img">
                                <img src={gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery4} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery4} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery4} alt="img" />
                            </div>
                        </div>
                    </Slider>
                    <Slider className="Slider-Who" id="gallery_flow_left" data-aos="fade-in" data-aos-duration={1500} {...Weslider} rtl={true} slidesToShow={11.5} arrows={false} autoplay={true} autoplaySpeed={10000} easing='linear' >
                        <div className="item">
                            <div className="img">
                                <img src={gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery8} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery8} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery8} alt="img" />
                            </div>
                        </div>
                    </Slider>
                    <Slider className="Slider-Who" id="gallery_flow_left" data-aos="fade-in" data-aos-duration={1500} {...Weslider} rtl={true} slidesToShow={11.5} arrows={false} autoplay={true} autoplaySpeed={10000} easing='linear' >
                        <div className="item">
                            <div className="img">
                                <img src={gallery10} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery11} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery12} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery13} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery10} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery11} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery12} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery13} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery10} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery11} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery8} alt="img" />
                            </div>
                        </div>
                    </Slider>
                </div>
        <div className="mb-4 p-4 border-0 container">
            <div className='row'>            
                <div className='col-xs-12 col-md-6'>          
                        <p>
                        Alle Zimmer sind mit einem Fernseher ausgestattet, aber noch schöner ist der Blick aus dem Fenster!
                        Internetzugang über Hotspot ist kostenlos verfügbar.
                    </p>
                    <p>
                        Anreise täglich ab 16 Uhr, am Wochenende ab 14 Uhr möglich. Bei früher oder später Anreise nach 22 Uhr bitte anrufen:
                        <br />
                        <a href='tel:04181 9199500'>04181 9199500</a> oder <a href='tel:0176 070671532'>0176 070671532</a>
                    </p>
                    <p>
                    Das Team von Hof & Gut wünscht eine geruhsame Nacht unterm Reetdach und ländliche Träume!
                    <br />
                    <b>Reservierungen per E-Mail an:</b>{" "}
                    <a href="mailto:info@hof-und-gut.de" className="text-primary-red">info@hof-und-gut.de</a>
                </p>
                </div>
                <div className='col-xs-12 col-md-6'>

                </div>
            </div>
            <div className="container mb-5">
                    <div className="section_title text-center" data-aos="fade2-up" data-aos-duration={1500} >
                    <span className="sub_text">Unsere Ferienwohnung</span>
                    <h2>
                        Fühlen Sie sich wie Zuhause
                    </h2>
                    </div>
            </div>
                <div className="img mb-5">
                    <img src={gallery14} className="img-fluid" alt="img" />
                </div>
            <div className='row'>
                <div className='col-xs-12 col-md-6'>
                        <h2>Preise</h2>
                        <p>
                            DZ 110 € | EZ 95 € | Apartment für 2 Personen 150 € | Apartment für 3 Personen 175 € | Apartment für 4 Personen 200 € | Zustellbett für ein Kind 25 €
                        </p>
                        <h2>Hof-Frühstück</h2>
                        <p>
                            Das Frühstück wird für unsere Hausgäste von 8 – 10:00 Uhr serviert.
                            <br />
                            Frühstück: 14.50 € p. P | Kinderfrühstück (3 – 7 Jahre) 8,00 € p.P.
                        </p>
                </div>
                <div className='col-xs-12 col-md-6'>

            <img src={gallery9} alt="img" className='smaller_image rect_img'/>
                </div>
            </div>




        </div>
            </div>
        </>
    )
}

export default WhoWeZimmer
import React from 'react'
import Slider from 'react-slick'
import Team02 from '../../assets/images/who_chef.png'
import Team03 from '../../assets/images/FamilieSpacie.jpg'
import Team04 from '../../assets/images/FamilieSpacie.jpg'

const Team = {
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
                slidesToShow: 2,
            },
        },
    ],
}

function OurTeam() {
    return (
        <>
            <section className="row_inner_am our_team_section light_texchur">

                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Unser Team</span>
                        <h2>Küche und Service</h2>
                    </div>
                    <div className="team_slider_wraper" data-aos="fade-in" data-aos-duration={1500} >
                        <Slider className="" id="team_slider" {...Team} slidesToShow={3} arrows={false}>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Team02}  alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>Frank Schiffner</h3>
                                        <span className="position">Chefkoch</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Team03} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>Miki Spachi</h3>
                                        <span className="position">Restaurantleiter</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Team04} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>Albina Spachi</h3>
                                        <span className="position">Restaurantleiterin</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam
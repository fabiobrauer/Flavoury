import React from 'react'
import { Link } from 'react-router-dom'

function Reservation() {
    return (
        <>
            <section className="resarvation_form rform_bg">
                <div className="container">
                    <div className="form_inner" data-aos="fade-in" data-aos-duration={1500} data-aos-delay={150} >
                        <div className="formBlock">
                            <div className="text-center">
                                <h2 className="mb-2">Online Reservieren</h2>
                                <p>
                                    Rufen Sie an unter <Link to="tel:+494181 9199500">+494181 9199500</Link> oder Reservieren Sie Online
                                </p>
                            </div>
                            <form netlify>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-group">
                                            <span className="icon">
                                                <i className="icofont-user-alt-7" />
                                            </span>
                                            <input type="text" className="form-control has_icon" placeholder="1 Person" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <span className="icon">
                                                <i className="icofont-calendar" />
                                            </span>
                                            <input type="date" className="form-control  flex-row-reverse" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <span className="icon">
                                                <i className="icofont-clock-time" />
                                            </span>
                                            <input type="time" className="form-control has_icon  flex-row-reverse pl-0" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Message" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn_primary w-100 ">Absenden</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="contact_block">
                            <h2>Schreiben sie Uns</h2>
                            <div className="booking">
                                <h3>Tisch Buchen</h3>
                                <Link to="tel:+494181 9199500">+494181 9199500</Link>
                            </div>
                            <ul>
                                <li>
                                    <h3>Standort</h3>
                                    <p>Itzenbütteler Sod 13, 
                                        <br />21266 Jesteburg
                                    </p>
                                </li>
                                <li>
                                    <h3>Öffnungszeiten</h3>
                                    <p>
                                        Mo - Fr warme Küche<br />
                                        17.00 Uhr - 22.00 Uhr
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Sa - So warme Küche<br />
                                        12.00 pm - 22.00 pm
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reservation
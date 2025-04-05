import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Main() {

  const [ytshow, setytShow] = useState(false);

  return (
    <>
      <footer>
        <div className="container">
          <div className="foote_widget contact_info">
            <div className="row py_50">
              <div className="col-md-7 direction_block">
                <p>
                  Itzenbütteler Sod 13, <br />
                  Jesteburg 21266<br />
                  Restaurant + Hotel : <Link to="tel:+49 4181 9199500">+49 4181 9199500</Link>
                </p>
                <Link to="/contact" className="btn_text">
                  get direction <i className="icofont-long-arrow-right" />
                </Link>
              </div>
              <div className="col-md-5 text-md-right timing_block">
                <p>
                  Mo - Fr : 17 - 22 Uhr <br />
                  Sa - So : 12 - 22 Uhr
                </p>
                <Link to="#" className="btn btn_primary mt-3" id="bookingForm_modelTitle" data-toggle="modal" data-target="#bookingForm_model" onClick={() => setytShow(true)}>
                  einen Tisch Buchen
                </Link>
              </div>
            </div>
          </div>
          <div className="foote_widget newsletter_block">
            <div className="row">
              <div className="col">
                <ul className="social_media">
                  <li>
                    <a href="https://www.facebook.com/hofundgut/" target='_blank' rel="noreferrer">Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/hofundgutjesteburg/" target='_blank' rel="noreferrer">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.booking.com/hotel/de/ubernachten-am-hof.de.html?aid=2405612&label=brave_nonbrand_organic_trigger_8e04a9f7-c7d3-4b3b-a255-3644144f3921_0&sid=c62ada237665a69bbf4984ab4510927c&dest_id=-1801836&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1737127013&srpvid=15856b6c24070260&type=total&ucfs=1&" target='_blank' rel="noreferrer">Booking.com</a>
                  </li>
                  <li>
                    <a href="https://shop-hof-und-gut.de/" target='_blank' rel="noreferrer">Online Shop</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="foote_widget menu_links">
            <div className="row">
              <div className="col-md-12">
                <ul className="links d-flex justify-content-center">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/menulist1">Menu 1</Link>
                  </li>
                  <li>
                    <Link to="/menulist2">Menu 2</Link>
                  </li>
                  <li>
                    <Link to="/menulist3">Menu 3</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/ourchef">Our chefs</Link>
                  </li>
                  <li>
                    <Link to="/bloglist">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy_right text-center">
              <p>
                © 2023 Restaurant. All Rights Reserved | Crafted by{" "}
                <Link to="https://themeforest.net/user/kalanidhithemes" target="blog-list" >
                  Kalanidhi Themes
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="go_top" id="Gotop">
          <span>
            <i className="icofont-rounded-up" />
          </span>
        </div>
      </footer>
      {ytshow &&
        <div className="modal fade booking_model show" id="bookingForm_model" tabIndex={-1} aria-labelledby="bookingForm_modelTitle" style={{ display: "block", paddingRight: 17 }} aria-modal="true" role="dialog" >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header text-center border-0 d-block p-0">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setytShow(false)}>
                  <span aria-hidden="true">
                    <i className="icofont-close-line" />
                  </span>
                </button>
                <h2 className="mb-2">Online Reservation</h2>
                <p>
                  Booking request <a href="tel:+88123123456">+88-123-123456</a> or fill
                  out the order form
                </p>
              </div>
              <div className="modal-body">
                <div className="booking_form">
                  <form>
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
                      <div className="col-md-4">
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
                          <input type="time" className="form-control has_icon  flex-row-reverse pl-0"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="btn btn_primary w-100 ">book a table</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Main
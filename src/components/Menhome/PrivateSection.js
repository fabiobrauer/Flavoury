import React from 'react'
import { Link } from 'react-router-dom'
import Img02 from '../../assets/images/private_event_01.png'
import Img03 from '../../assets/images/private_icon.png'
import Img04 from '../../assets/images/private_event_02.png'

function PrivateSection() {
  return (
    <>
      <section className="row_am privet_event_section bg_white_textcher position-relative">
        <div className="container">
          <div className="row py_50">
            <div className="col-md-6">
              <div className="privet_text" data-aos="fade-up" data-aos-duration={1500} >
                <div className="section_title">
                  <span className="sub_text">Private events</span>
                  <h2>
                    Buchen Sie unser Ambiente für Ihre Feier
                  </h2>
                </div>
                <img className="d-block ml-auto" src={Img02} alt="img"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="privet_info position-relative">
                <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                  <span className="side_icon">
                    <img src={Img03} alt="img" />
                  </span>
                  <img className="img-fluid radius_img" src={Img04} alt="img" />
                </div>
                <p data-aos="fade-up" data-aos-duration={1500}>
                    Bitte reservieren Sie rechtzeitig einen Tisch, besonders wenn Sie am Wochenende oder zum Abendessen kommen möchten… Sie können auch auf unserer Diele mit bis zu 75 Personen in attraktiv sanierter historischer Umgebung feiern und tagen. Wir besprechen gerne Anlass und passende Gerichte und Getränke.
                </p>
                <Link to="/kontakt" className="btn btn_primary" data-aos="fade-up" data-aos-duration={1500} >
                  Jetzt Buchen <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivateSection
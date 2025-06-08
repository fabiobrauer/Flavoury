import React from 'react'
import { Link } from 'react-router-dom'
import Img01 from '../../assets/images/banner_left_shap.png'
import Img02 from '../../assets/images/banner_right_shap.png'
import Img03 from '../../assets/images/b_img_01.png'
import Img06 from '../../assets/images/b_img_02.png'
import Img09 from '../../assets/images/b_img_03.png'
import img10 from '../../assets/images/BannerHomeMobile2.png'
import img11 from '../../assets/images/BannerHomeMobile4.png'
import img12 from '../../assets/images/BannerHomeMobile5.png'

function Banner() {
  return (
    <>
      <section className="banner_section">
        <div className="container">
          <div className="banner_inner ">
            <h1 data-aos="fade-up" data-aos-duration={1500}>
              Willkommen bei<br /> Hof&Gut Jesteburg
            </h1>
            <div className="banner_images ">
{/*               <div className="img disable_mobile" data-speed={100}>
                <img className="radius_img" src={Img03} alt="img" />
              </div>
              <div className="img disable_mobile" data-speed={100}>
                <img className="radius_img" src={Img06} alt="img" />
              </div>
              <div className="img disable_mobile" data-speed={100}>
                <img className="radius_img" src={Img09} alt="img" />
              </div> */}
              
              <div className='container'>
                <div className='row'>
                  <div className="img_mobile disable_mobile mx-auto" data-speed={100}>
                    <img src={img11} alt="img" className='img-fluid' />
                  </div>
                </div>  
                <div className='mobile_active row mobile_Off'>
                  <div className="img_mobile col-xs-12" data-speed={100}>
                    <img src={img12} alt="img" className='img-fluid' />
                  </div>
                </div>  

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
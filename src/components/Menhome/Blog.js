import React from 'react'
import { Link } from 'react-router-dom'
import Blog01 from '../../assets/images/blog_01.png'
import Blog02 from '../../assets/images/blog_02.png'
import Blog03 from '../../assets/images/blog_03.png'

function Blog() {
  return (
    <>
      <section className="row_am blog_section position-relative">
        <div className="container">
          <div className="section_title text-center py_50" data-aos="fade-up" data-aos-duration={1500} >
            <span className="sub_text">Weiteres bei Hof&Gut</span>
            <h2>Hofladen, Reiten und Landwirtschaft </h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="blog_post" data-aos="fade-up" data-aos-duration={1500}>
                <Link to="#" className="img">
                  <img src={Blog01} alt="img" className="img-fluid" />
                </Link>
                <div className="info">
                  <h3>
                    <Link to="/bloglist">
                      Melde dich jetzt an, um dir noch eine Fleischbox von unseren Rindern zu sichern.
                    </Link>
                  </h3>
                  <Link to="/bloglist" className="btn btn_text">
                    MEHR ERFAHREN <i className="icofont-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_post mx-auto" data-aos="fade-up" data-aos-duration={1500} >
                <Link to="#" className="img">
                  <img src={Blog02} alt="img" className="img-fluid" />
                </Link>
                <div className="info">
                  <h3>
                    <Link to="/bloglist">
                      Melden Sie Ihr Kind für einen Reitkurs an.
                    </Link>
                  </h3>
                  <Link to="/bloglist" className="btn btn_text">
                    MEHR ERFAHREN <i className="icofont-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_post ml-auto" data-aos="fade-up" data-aos-duration={1500} >
                <Link to="#" className="img">
                  <img src={Blog03} alt="img" className="img-fluid" />
                </Link>
                <div className="info">
                  <h3>
                    <Link to="/bloglist">
                      Ökologische Landwirtschaft bei Hof&Gut
                    </Link>
                  </h3>
                  <Link to="/bloglist" className="btn btn_text">
                    MEHR ERFAHREN <i className="icofont-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
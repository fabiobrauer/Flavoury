import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LandwiBanner from '../assets/Comp_LandwiBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/css/style.css';

import KueheImg from '../../assets/images/KüheNeu.jpeg';
import EUFoerderungImg from '../../assets/images/EU-ELER_CMYK1-271x300 1.png';
import HofplanImg from '../../assets/images/hofplan 1.png';

function OekologischeLandwirtschaft() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
 <>
      <Helmet>
        <title>Ökologische Landwirtschaft Hof&Gut Jesteburg</title>
        <meta name="description" content="Alles über unsere Tiere und die Landwirtschaft" />
        <link rel="canonical" href="/ÖkologischeLandwirtschaft" />
        <meta name="fragment" content="!" />
      </Helmet>
   <div className="index_wraper">
                      <div className="row_inner_am who_we_section who_version_two light_texchur2">
                        <div className="section_title text-center mb-5" data-aos="fade-up" data-aos-duration={1500}>
                          <span className="sub_text">Hof & Gut Jesteburg</span>
                          <h2>Ökologische Landwirtschaft</h2>
                        </div>


        <div className='container'>                 
        <div className='row'>
          <div className='col-lg-6' data-aos="fade-up" data-aos-duration={1500}></div>
            <div className='col-md-12 col-lg-6  mb-5 mt-5' >
                              <div className="row mb-5 ">
                                <div className="col-12 text-center ">
                                  <img src={KueheImg} alt="Kühe" className="img-fluid smaller_image mt-4 rect_img" />
                                </div>
                              </div>
            </div>

            <div className='col-lg-7 col-md-12 mb-5 mt-5' >
                  <div data-aos="fade-up" data-aos-duration={1500}>
                    <h3>Philosophie</h3>
                    <p>
                      Unser Ziel ist es, mit Hof&Gut einen Kreislauf (wieder)herzustellen, der Menschen in Lohn und Brot bringt
                      und alle Tiere des Hofes ernährt. Außerdem soll sich die historische Hofstelle zu einem Ort der Begegnung
                      entwickeln, an dem Kinder und Erwachsene als Gäste gerne verweilen, miteinander ihre Freizeit verbringen
                      und einen historischen Bauernhof erleben. Die Hofstelle umfasst eine Gesamtfläche von 85 Hektar, je hälftig
                      Forst- und Ackerflächen. Die Ackerflächen werden seit 2007 biologisch bewirtschaftet und jährlich von der
                      Gesellschaft für Ressourcenschutz mbH (GfRS) aus Göttingen zertifiziert. Die zum Hof gehörenden Rinder stehen
                      durch die extensiven Grünflächen auf eigener Futtergrundlage.
                    </p>

                </div>
            </div>

            <div className='col-4'></div>
            <div className='col-4'></div>

                <div className='col-lg-8 col-md-12 mb-5 mt-5' data-aos="fade-up" data-aos-duration={1500}>
                    <img src={HofplanImg} alt="Hofplan" className="img-fluid mb-3 rect_img" />
                    <p className=''>
                      <strong>Unsere Daten für die ökologische Bewirtschaftung:</strong><br />
                      Hof & Gut Jesteburg Agrar GmbH & Co. KG<br />
                      Betriebsnummer: 276033530200088<br />
                      ÖkokontrollNr. DE-NI-039-08263-
                    </p>
                </div>

      </div>

        <div className='row'>
              <div className='col-12 mb-5 mt-5' data-aos="fade-up" data-aos-duration={1500}>
                <div className='container'>
                <div className='row'>
                <div className='col-lg-3'>                                
                  <img src={EUFoerderungImg} alt="EU Förderung" className="img-fluid mb-3" style={{border:"5px solid"}}/>
                </div>
                      <div className='col-lg-4 col-md-12'><p>
                                        Hier investiert Europa in die ländlichen Gebiete mit „Agrarumwelt- und Klimaschutzmaßnahmen”.<br/> Mit diesen
                                        Maßnahmen werden landwirtschaftliche Betriebe bei der Erhaltung und Verbesserung der Umweltsituation
                                        unterstützt. Ziel ist eine nachhaltige und ressourcenschonende Bewirtschaftung in Bezug auf Artenvielfalt,
                                        Boden, Wasser und den Schutz des Klimas. <br />
                                        Siehe auch:{" "}
                                        <a href="https://www.eler.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="text-primary-red">
                                          www.eler.niedersachsen.de
                                        </a>
                                        </p>
                      </div>
                  </div>
                </div>
                                  
              </div>

        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default OekologischeLandwirtschaft;

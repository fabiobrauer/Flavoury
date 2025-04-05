import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Comp_Swiper from '../assets/Comp_shop2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/css/style.css';
import HofladenBild from '../../assets/images/Hofladen1.jpg'
import HofladenBild2 from '../../assets/images/Hofladen3.jpg'
import HofladenBild3 from '../../assets/images/Hofladen4.jpg'

function Hofladen() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="index_wraper">
      <Helmet>
        <title>Hofladen</title>
        <meta name="description" content="Der Hof und Gut Hofladen" />
        <link rel="canonical" href="/Hofladen" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div className="row_inner_am who_we_section who_version_two light_texchur2 mt-5">
        <div className="container mt-5">
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500}>
            <span className="sub_text">Unser Hofladen</span>
            <h2>Regionale Qualität direkt vom Hof</h2>
          </div>

          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-6 text-center">
              <img src={HofladenBild} alt="img" className='smaller_image mt-4 move_left radius_img'/>
            </div>
            <div className="col-6 text-center">
              <img src={HofladenBild2} alt="img" className='smaller_image mt-4 move_down_right radius_img_hofladen'/>
            </div>
          </div>

          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12">
              <h3>Der Hofladen</h3>
              <p>
                Unser kleiner Hofladen ist immer Dienstag abends und am Samstag von 11-15 Uhr geöffnet. Es gibt Fleisch,
                Wurst und Grillgut vom Hof&Gut Aubrac, Hühnchenfleisch und allerlei frische Salate und Saucen vom Hof
                Warnke, saisonales Gemüse und Bioeier von den Biohöfen Wurzelreich und Koch, sowie eine kleine Auswahl
                von italienischen Spezialitäten und Erlesenes aus dem Hof&Gut-Weinkeller. Für Hübsches sorgen Bea und Heike...
              </p>
            </div>
          </div>
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-xs-12 col-md-6">
            <img src={HofladenBild3} alt="img" className='smaller_image move_down_left radius_img_hofladen' />

            </div>
            <div className="col-xs-12 col-md-6">
              <h3>Verkauf von Rindfleisch und Gänsen</h3>
              <p>
                Wir verkaufen in regelmäßigen Abständen Rindfleisch aus eigener Produktion. Es kann jeweils in 10- oder
                20-kg-Paketen erworben werden (Preis 170,- bzw. 320,- Euro). Enthalten sind immer Rouladen, Hack, Braten,
                Gulasch, Beinscheibe, Suppenfleisch und Steaks. Außerdem können Sie bereits jetzt eine Weihnachtsgans 2024
                bestellen, solange der Vorrat reicht!
              </p>
              <p>
                <strong>Interesse?</strong> Dann schreiben Sie uns: <a href="mailto:info@hof-und-gut.de" className="text-primary-red">info@hof-und-gut.de</a>
              </p>
            </div>

          </div>
          <div className="row pt-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12">
              <Comp_Swiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hofladen;
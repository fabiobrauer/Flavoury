import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Comp_Swiper from '../assets/Comp_shop2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/css/style.css';
import HofladenBild from '../../assets/images/Hofladen1.jpg';
import HofladenBild2 from '../../assets/images/Hofladen3.jpg';
import HofladenBild3 from '../../assets/images/Hofladen4.jpg';

export default function Hofladen() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="index_wraper">
      <div className="row_inner_am who_we_section who_version_two light_texchur2 mt-5">
        <div className="container mt-5">
          {/* Titel */}
          <div
            className="section_title text-center mb-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <span className="sub_text">Unser Hofladen</span>
            <h2>Regionale Qualität direkt vom Hof</h2>
          </div>

          {/* 1. Abschnitt: zwei Bilder (links/rechts) */}
          <div
            className="row align-items-center mb-5 mt-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1">
              <h3>Der Hofladen</h3>
              <p>
                Unser kleiner Hofladen ist immer Dienstag abends und am Samstag von
                11–15 Uhr geöffnet. Es gibt Fleisch, Wurst und Grillgut vom Hof&Gut
                Aubrac, Hühnchenfleisch und frische Salate vom Hof Warnke, saisonales
                Gemüse und Bioeier von den Biohöfen Wurzelreich und Koch sowie eine
                Auswahl italienischer Spezialitäten und Weine.
              </p>

            </div>
            <div className="col-12 col-md-6 order-md-2 text-center">
              <img
                src={HofladenBild2}
                alt="Auslage im Hofladen"
                className="img-fluid rect_img"
              />
            </div>
          </div>

          {/* 2. Abschnitt: Textblock (rechts) */}
          <div
            className="row align-items-center mb-5 mt-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-2">              
              <h3>Verkauf von Rindfleisch und Gänsen</h3>
              <p>
                Wir verkaufen regelmäßig Rindfleisch aus eigener Produktion in
                10- oder 20-kg-Paketen (170 € bzw. 320 €). Enthalten sind Rouladen,
                Hack, Braten, Gulasch, Suppenfleisch und Steaks. Außerdem können Sie
                Weihnachtsgänse 2024 vorbestellen, solange der Vorrat reicht!
              </p>
            </div>
            <div className="col-12 col-md-6 order-md-1">
            <img
                src={HofladenBild}
                alt="Innenansicht Hofladen"
                className="img-fluid rect_img"
              />
            </div>
          </div>

          {/* 3. Abschnitt: Bild links, Text rechts */}
          <div
            className="row align-items-center mt-5 mb-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-8 order-md-2 text-center">
              <img
                src={HofladenBild3}
                alt="Rindfleisch-Pakete"
                className="img-fluid rect_img"
              />
            </div>
            <div className="col-12 col-md-4 order-md-1 text-right">
              <p>
                <strong>Interesse?</strong> Schreiben Sie uns:
                <br />
                <a href="mailto:info@hof-und-gut.de" className="text-primary-red">
                  info@hof-und-gut.de
                </a>
              </p>
            </div>
          </div>

          {/* 4. Abschnitt: Slider (vollbreite) */}
          <div
            className="row mt-5 mb-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12">
              <Comp_Swiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

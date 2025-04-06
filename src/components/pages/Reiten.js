import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../assets/css/style.css';

import ReitenBasicGrid from "../assets/Comp_Reiten";
import ReitenCustomImageList from "../assets/Comp_ImageListReiten";

export default function Reiten() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="index_wraper">
      <Helmet>
        <title>Reiten bei Carmen Knott</title>
        <meta name="description" content="Reiten und Ponniereiten in Jesteburg" />
        <link rel="canonical" href="/Reiten" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div className="row_inner_am who_we_section who_version_two light_texchur2 mt-5">
        <div className="container mt-5">
          {/* Titel */}
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500}>
            <span className="sub_text">Reitunterricht bei Hof & Gut</span>
            <h2>Reiten mit Herz & Verantwortung</h2>
          </div>

          {/* Reitbilder-Grid */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12">
              <ReitenBasicGrid />
            </div>
          </div>

          {/* Bildliste */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12">
              <ReitenCustomImageList />
            </div>
          </div>

          {/* Wöchentliches Angebot */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-xs-12 col-md-6">
              
                <h3>Unser wöchentliches Angebot</h3>
                <p>
                  Fortgeschrittenengruppen<br />
                  Longenunterricht<br />
                  Reitanfängergruppen ab dem 5. Lebensjahr<br />
                  Ponykindergarten regelmäßig samstags und sonntags
                </p></div>
                <div className="col-xs-12 col-md-6">
                  <p>
                    <a href="https://ponyreitschuleknot.wixsite.com/pony-club" target="_blank" rel="noopener noreferrer">
                      <button className="btn btn_primary">Hier Buchen</button>
                    </a>
                  </p>
{/*                   <a href="https://doodle.com/meeting/participate/id/b4zlwZ2e" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn_primary">Geführte Waldausritte</button>
                  </a> */}
            </div>
          </div>

          {/* Kontakt */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-xs-12 col-md-6">
              <div className="">
                <h3>Kontakt & Aktuelles</h3>
                <p>
                  Seit dem Sommer 2021 hat <strong>Carmen Knott</strong> den Reitbetrieb am Hof von Anne Strufe übernommen.
                  Sie und ihr Team freuen sich auf Euch!
                </p>
                <p>
                  Tel: <a href="tel:01633796966" className="text-primary-red">0163 3796966</a><br />
                  E-Mail: <a href="mailto:ponyreitschule.knott@gmx.de" className="text-primary-red">ponyreitschule.knott@gmx.de</a>
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="">
                <h3>Preisliste</h3>
                <p>
                  Kinder- und Jugendgruppen: <strong className="red_color">85,- €/Monat</strong><br />
                  Einzelstunde Kinder (30 Min.) inkl. Vorbereitung: <strong className="red_color">30 €</strong><br />
                  Einzelstunde Erwachsene (45 Min.) inkl. Schulpferd: <strong className="red_color">55 €</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Preise */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>

          </div>

        </div>
      </div>
    </div>
  );
}

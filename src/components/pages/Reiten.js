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
            <span className="sub_text">Reitunterricht am Hof & Gut</span>
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
            <div className="col-12">
              <div className="bg-dark text-white p-4 radius_img">
                <h3>Unser wöchentliches Angebot</h3>
                <p>
                  Fortgeschrittenengruppen<br />
                  Longenunterricht<br />
                  Reitanfängergruppen ab dem 5. Lebensjahr<br />
                  Ponykindergarten regelmäßig samstags und sonntags
                </p>
                <div className="mt-3 d-flex flex-wrap gap-3 justify-content-center">
                  <a href="https://doodle.com/meeting/participate/id/aOPWkxgb" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn_primary">Hier Buchen</button>
                  </a>
                  <a href="https://doodle.com/meeting/participate/id/b4zlwZ2e" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn_primary">Geführte Waldausritte</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kontakt */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12">
              <div className="bg-dark text-white p-4 radius_img">
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
          </div>

          {/* Preise */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12">
              <div className="bg-dark text-white p-4 radius_img">
                <h3>Preisliste</h3>
                <p>
                  Kinder- und Jugendgruppen: 85,- €/Monat<br />
                  Einzelstunde Kinder (30 Min.) inkl. Vorbereitung: 30 €<br />
                  Einzelstunde Erwachsene (45 Min.) inkl. Schulpferd: 55 €
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

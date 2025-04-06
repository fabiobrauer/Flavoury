import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/css/style.css";

import FirmenEvent from "../../assets/images/FirmenEvent.jpeg";
import AngebotFlyer from "../../assets/images/angebote 1.png";
import IhrEvent from "../../assets/images/ihr-event1 1.png";

export default function TeamtrainingFirmenevents() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="index_wraper">
      <Helmet>
        <title>Teamtraining und Firmenevents bei Hof&Gut in Jesteburg</title>
        <meta name="description" content="Teamtraining und Firmenevents bei Hof&Gut in der Nordheide" />
        <link rel="canonical" href="/TeamtrainingUndFirmenevents" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div className="row_inner_am who_we_section who_version_two light_texchur2 mt-5">
        <div className="container mt-5">

          {/* Titel */}
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500}>
            <span className="sub_text">Erlebnisse & Events</span>
            <h2>Teamtraining & Firmenevents</h2>
          </div>

          {/* Bild FirmenEvent */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 text-center">
              <img src={FirmenEvent} alt="Firmen Event" className="img-fluid radius_img smaller_image" />
            </div>
          </div>

          {/* Textblock Events */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 bg-dark text-white p-4 radius_img">
              <p>
                Events für jede Kragenweite. Hof & Gut ist und bleibt das Thema der Hofstelle Itzenbüttler Sod.
                Leckere, regionale Gerichte in der gemütlichen Atmosphäre des Restaurants Stub’n, Erfrischungen im
                Biergarten und die Hoffeste haben diesen Ort zu einem Geheimtipp in Sachen Gastlichkeit gemacht.
              </p>
              <p>
                Aber darauf ruhen wir uns nicht aus! Ab sofort bieten wir Ihnen ausgefallene Events.
                Natürlich in gewohnt hoher Qualität – mit Veranstaltungspaketen inklusive Genuss & Gut,
                Team & Gut oder Aktiv & Gut. Alles wird individuell auf Ihre Wünsche zugeschnitten!
              </p>
              <p>
                Bei uns gibt es weder im Restaurant noch bei Veranstaltungen etwas von der Stange!
              </p>
            </div>
          </div>

          {/* Angebot-Bild */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 text-center">
              <img src={AngebotFlyer} alt="Angebot" className="img-fluid radius_img smaller_image" />
            </div>
          </div>

          {/* Kontaktblock */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 bg-dark text-white p-4 radius_img">
              <h3>Sie haben Interesse?</h3>
              <p>
                Hof & Gut Jesteburg GmbH<br />
                Itzenbütteler Sod 13–15<br />
                21266 Jesteburg OT Itzenbüttel
              </p>
              <p>
                Rufen Sie uns an:<br />
                Mona Rickert: <a href="tel:015785600194" className="text-primary-red">0157-8560 0194</a><br />
                Marc Wollrab: <a href="tel:015786771150" className="text-primary-red">0157-8677 1150</a><br />
                Büro Hof & Gut: <a href="tel:041812170714" className="text-primary-red">04181-2170 714</a>
              </p>
              <p>
                Oder mailen Sie uns:<br />
                <a href="mailto:wollrab@hof-und-gut.de" className="text-primary-red">wollrab@hof-und-gut.de</a>
              </p>
              <p>
                Wir freuen uns auf Ihre Anfrage!<br />
                <b>Mona Rickert & Marc Wollrab</b>
              </p>
            </div>
          </div>

          {/* Ihr Event Bild */}
          <div className="row" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 text-center">
              <img src={IhrEvent} alt="Ihr Event Flyer" className="img-fluid radius_img smaller_image" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

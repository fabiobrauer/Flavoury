import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/css/style.css";

import SchmitzFoto from "../../assets/images/SchmitzFoto.jpg";
import Hoffest from "../../assets/images/20230501_123221.jpg";
import KinderKlassik from "../../assets/images/Kinder.png";

export default function VeranstaltungenKunstKultur() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="index_wraper">
      <div className="row_inner_am who_we_section who_version_two light_texchur2">
      <Helmet>
        <title>Veranstaltungen Kunst und Kultur bei Hof und Gut</title>
        <meta
          name="description"
          content="Veranstaltungen Kunst und Kultur bei Hof und Gut in Jesteburg"
        />
        <link rel="canonical" href="/VeranstaltungenKunstKultur" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div className="who_we_section light_texchur2 mt-5">
        <div className="container mt-5">

          {/* Titel */}
          <div
            className="section_title text-center mb-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <span className="sub_text">Kunst & Kultur</span>
            <h2>Veranstaltungen bei Hof & Gut</h2>
          </div>

          {/* 1. Abschnitt: Walter Schmitz (Bild links) */}
          <div
            className="row mb-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1 text-center">
              <img
                src={SchmitzFoto}
                alt="Walter Schmitz Ausstellung"
                className="img-fluid rect_img my-3"
              />
            </div>
            <div className="col-12 col-md-6 order-md-2">
              <h3>Fotografien von Walter Schmitz</h3>
              <p>
                Der berühmte Fotograf Walter Schmitz aus Hamburg hat rund um Hof &amp; Gut Bilder
                eingefangen und stellt sie im Restaurant Stub’n aus. Anschauen lohnt!
              </p>
            </div>
          </div>

          {/* 2. Abschnitt: Hoffest (Text links) */}
          <div
            className="row mb-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1">
              <h3>Hoffest</h3>
              <p>
                Am 1. Mai und am 3. Oktober feiern wir Hoffest. Am Vorabend wird getanzt –
                entweder in den Mai oder zünftig mit Dirndl und Lederhos’n ins Oktoberfest.
                Das nächste Hoffest findet am <b>1. Mai 2025</b> statt, und am <b>30. April ab 19 Uhr</b> ist
                Tanz in den Mai – mit DJ und Co.
              </p>
            </div>
            <div className="col-12 col-md-6 order-md-2 text-center">
              <img
                src={Hoffest}
                alt="Hoffest"
                className="img-fluid rect_img my-3"
              />
            </div>
          </div>

          {/* 3. Abschnitt: Fernsehen (Bild links) */}
          <div
            className="row mb-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1 text-center">
              {/* If there were an image, but this section is text-only per original */}
            </div>
            <div className="col-12 col-md-6 order-md-2">
              <h3>Hof &amp; Gut im Fernsehen</h3>
              <p>
                Am 13. Januar 2016 wurde im NDR in der Sendung “Mein Nachmittag” ein kurzer Film über Hof &amp; Gut
                und schöne Orte in der Umgebung ausgestrahlt. Live im Studio war Chefkoch Frank Schiffner, der ein
                Lieblingsgericht vorgestellt hat!
              </p>
              <p>
                <a
                  href="https://www.ndr.de/fernsehen/sendungen/mein_nachmittag/Mein-Nachmittag,meinnachmittag12852.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-red"
                >
                  Zur NDR-Sendung
                </a>
              </p>
            </div>
          </div>

          {/* 4. Abschnitt: Künstlerstuben (Text links) */}
          <div
            className="row mb-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1">
              <h3>Ausstellung von Karola Römermann</h3>
              <p>
                Karola Römermann stellt derzeit Werke ihres Schaffens aus 4 Jahrzehnten in den Künstlerstuben aus.
                Kommen Sie gerne zum Schauen und Staunen…
              </p>
            </div>
            <div className="col-12 col-md-6 order-md-2">
              {/* leer */}
            </div>
          </div>

          {/* 5. Abschnitt: Kinder spielen Klassik (Bild links) */}
          <div
            className="row mb-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1 text-center">
              <img
                src={KinderKlassik}
                alt="Kinder spielen Klassik"
                className="img-fluid rect_img my-3"
              />
            </div>
            <div className="col-12 col-md-6 order-md-2">
              <h3>Kinder spielen… Klassik</h3>
              <p>
                Musik im Allgemeinen und klassische Musik im Besonderen kann uns dort berühren, wo Worte
                nicht ankommen. Jedes Kind sollte die Möglichkeit bekommen, einmal oder öfter „Klassik
                selber zu machen“.
              </p>
              <p>
                Alle Informationen finden Sie unter:{" "}
                <a
                  href="https://www.kinder-spielen-klassik.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-red"
                >
                  www.kinder-spielen-klassik.de
                </a>
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

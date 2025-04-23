import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../assets/css/style.css';

import BauernhausAlt from '../../assets/images/60842f03bdc80b89a1408476bdd76460.jpeg';
import BauernhausNeu from '../../assets/images/Bauernhaus2010.jpeg';
import Kinderhaus from '../../assets/images/ReiterHaus.jpeg';

export default function Gebaeude() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="index_wraper">
      <Helmet>
        <title>Gebäude bei Hof & Gut Jesteburg</title>
        <meta name="description" content="Renoviertes Bauernhaus, umgebaute Scheune und zukünftige Projekte" />
        <link rel="canonical" href="/Gebäude" />
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
            <span className="sub_text">Unsere Gebäude</span>
            <h2>Historie & Moderne in Einklang</h2>
          </div>

          {/* 1. Abschnitt: Bauernhaus früher (Bild links, Text rechts) */}
          <div
            className="row mt-5 mb-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6">
              <h3>Das Bauernhaus früher</h3>
              <p>
                Die Hofstelle Itzenbütteler Sood 13 (Harmsbur) gehört zu den Hofstellen in Itzenbüttel, die auf das Mittelalter zurückgehen.
                Die Ursprünge des Hauptgebäudes liegen nach neuesten Erkenntnissen im 16. Jahrhundert. Anfang der 1990er Jahre wurden große Teile
                des Reetdachs des Hofgebäudes erneuert. In den Jahren 2003/2004 wurde das Bauernhaus mit Unterstützung von Mitteln aus der
                Dorferneuerung und aus dem ETLR-Fonds grundlegend saniert. Kleinere Sanierungsmaßnahmen erfolgten im Rahmen des Anschlusses
                an die Kanalisation.
              </p>
            </div>
            <div className="col-12 col-md-6 order-md-1 text-center">
              <img
                src={BauernhausAlt}
                alt="Foto Bauernhaus früher"
                className="img-fluid rect_img smaller_image mt-4"
                style={{ objectFit: 'cover', width: '100%' }}
              />
            </div>
          </div>

          {/* 2. Abschnitt: Bauernhaus heute (Text links, Bild rechts) */}
          <div
            className="row mb-5 mt-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-2">
              <h3>Das Bauernhaus heute</h3>
              <p>
                Im Jahr 2010 wurde das alte Bauernhaus auch im Inneren denkmalgerecht saniert und das historische Ständerwerk wiederhergestellt.
                Hofseitig und zur Straße hin erhielt das Gebäude neue Sprossenfenster und Gauben, die nun auch das Obergeschoss mit Licht versorgen.
                Eindrucksvoll lässt sich im Gastraum und auch im Küchenbereich das historische und teilweise wiederhergestellte Ständerwerk besichtigen.
                Bei der Renovierung wurden ausschließlich Eichen aus dem eigenen Itzenbütteler Wald verwendet. Die “neuen” Hölzer lassen sich gut von
                den historischen unterscheiden.
              </p>
            </div>
            <div className="col-12 col-md-6 order-md-1 text-center">
              <img
                src={BauernhausNeu}
                alt="Foto Bauernhaus 2010"
                className="img-fluid rect_img smaller_image"
                style={{ objectFit: 'cover', height: '550px', width: '100%' }}
              />
            </div>
          </div>

          {/* 3. Abschnitt: Kinderhaus (Bild links, Text rechts) */}
          <div
            className="row mt-5 mb-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1 text-center">

            </div>
            <div className="col-12 col-md-6 order-md-2">
              <img
                src={Kinderhaus}
                alt="Foto vom Kinderhaus"
                className="img-fluid rect_img smaller_image"
                style={{ objectFit: 'cover', height: '650px', width: '100%' }}
              />
              <p className="mt-3 text-center">
                Dies ist unser “Kinderhaus”, in dem die Reitkinder sich vor und nach dem Unterricht aufhalten können.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

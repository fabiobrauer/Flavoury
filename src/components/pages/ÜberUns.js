import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/css/style.css";
import BauernhausNeu2 from '../../assets/images/Hofvorgarten.jpg';
import espresso from '../../assets/images/Espresso.jpg';
import Reiten from '../../assets/images/Reint5.jpeg';
import Rinder from '../../assets/images/Rinder2017.jpg';
import ausstellung from '../../assets/images/bild-bulle-duette-437204.jpg';

export default function UeberUns() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="index_wraper">
      <div className="row_inner_am who_we_section who_version_two light_texchur2">
        <div className="container mt-5">
          {/* Titel */}
          <div
            className="section_title text-center mb-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <span className="sub_text">Willkommen auf Hof&Gut</span>
            <h2>Über uns</h2>
          </div>

          {/* 1. Abschnitt (Text links) */}
          <div
            className="row align-items-center mb-4"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1">
              <p>
                Unter dem Dach von Hof&Gut Jesteburg finden sich ökologische
                Landwirtschaft, ein Reitbetrieb, ein Einstellbetrieb,
                generationenübergreifendes Wohnen sowie Kunst und Kultur.
                Gastronomie und Gästezimmer am Hof werden betrieben unter der
                Marke „Speisen am Hof“ und „Übernachten am Hof“.
              </p>

              
            </div>
            <div className="col-12 col-md-6 order-md-2 text-center">
                <img
                src={BauernhausNeu2}
                alt="Foto Bauernhaus 2010"
                className="img-fluid rect_img"
  
              />
            </div>

          </div>

          {/* 2. Abschnitt (Text rechts) */}
          <div
            className="row align-items-center mb-4"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1">
            <img
                src={espresso}
                alt="Foto Bauernhaus 2010"
                className="img-fluid rect_img"
  
              />
            </div>
            <div className="col-12 col-md-6 order-md-2">
              <p>
                Die Hofstelle Itzenbütteler Sood 13–15 in 21266
                Jesteburg-Itzenbüttel ist das Zentrum und die „Keimzelle“ von
                Hof&Gut Jesteburg. Hier haben wir am 1. Oktober 2007 ein
                Projekt gestartet, um eine Hofstelle aus dem 16. Jahrhundert
                neu zu beleben und für die breite Öffentlichkeit erlebbar zu
                machen.
              </p>
            </div>
          </div>

          {/* 3. Abschnitt (Text links) */}
          <div
            className="row align-items-center mb-4"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1">
              <p>
                Wir haben unsere Hofstelle mit einem Reitbetrieb begonnen. Eine
                bunte Herde von insgesamt 40 Ponys und Pferden steht für den
                Unterricht und für Ausritte zur Verfügung. Kinder können
                professionell reiten lernen oder einfach Spaß am Zusammensein
                mit Pferden haben.
              </p>
            </div>
            <div className="col-12 col-md-6 order-md-2">
            <img
                src={Reiten}
                alt="Foto Bauernhaus 2010"
                className="img-fluid rect_img"
  
              />
            </div>
          </div>

          {/* 4. Abschnitt (Text rechts) */}
          <div
            className="row align-items-center mb-4"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1">
            <img
                src={Rinder}
                alt="Foto Bauernhaus 2010"
                className="img-fluid rect_img"
  
              />
            </div>
            <div className="col-12 col-md-6 order-md-2">
              <p>
                Zudem haben wir die hofeigenen Ackerflächen auf biologischen
                Anbau umgestellt und züchten inzwischen Aubrac-Rinder mit
                einer Herde von 40 Tieren. Das Bauernhaus wurde 2010
                denkmalgerecht saniert und ist seitdem mit unserer
                Gastronomie für die Öffentlichkeit zugänglich. Seit 2012
                bietet der Hof auch schöne Gästezimmer unter dem Reetdach.
              </p>
            </div>
          </div>

          {/* 5. Abschnitt (Text links) */}
          <div
            className="row align-items-center mb-4"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1">
              <p>
                Kunst und Kultur werden mit verschiedenen Projekten und
                wechselnden Ausstellungen in den Gaststuben gefördert. Schaut
                gerne vorbei, um zu sehen, was auf unserem Hof passiert!
              </p>
            </div>
            <div className="col-12 col-md-6 order-md-2">
            <img
                src={ausstellung}
                alt="Foto Bauernhaus 2010"
                className="img-fluid rect_img"
  
              />
            </div>
          </div>

          {/* 6. Abschnitt (Text rechts klein) */}
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1" />
            <div className="col-12 col-md-6 order-md-2">
              <p style={{ fontSize: "small" }}>
                Johanna Coleman und Axel Brauer, Hella Meyer-Alber und Nicolas
                Feltgen, Alexander Meyer-Alber und Annette Meyer-Alber mit dem
                „Hof&Gut-Team“, sowie das Team von „Speisen und Übernachten am
                Hof“, Familie Spaqi, Frank Schiffner und das Küchenteam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

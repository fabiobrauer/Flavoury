import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/css/style.css";

export default function Links() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="index_wraper">
      <Helmet>
        <title>Links... mit Hof&Gut in Zusammenarbeit</title>
        <meta name="description" content="Mit Hof&Gut in Zusammenarbeit" />
        <link rel="canonical" href="/Links" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div className="who_we_section light_texchur2 mt-5 row_inner_am">
        <div className="container mt-5">

          {/* Titel */}
          <div
            className="section_title text-center mb-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <span className="sub_text">Partner & Inspiration</span>
            <h2>Links & Empfehlungen</h2>
          </div>

          {/* 1. Abschnitt: Regionale Links (links) */}
          <div
            className="row mb-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            {/* Links-Block */}
            <div className="col-12 col-md-6 order-md-1">
              <div className="">
                <h3>Weitere interessante Links in Jesteburg und Umgebung:</h3>
                <p>
                  <a
                    href="https://www.bossard.de/"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kunststätte Bossard
                  </a>
                  <br />
                  <a
                    href="https://www.brockshus-sprung.de/"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verena Brockshus-Sprung (Fotografie)
                  </a>
                  <br />
                  <a
                    href="https://www.kunsthaus-jesteburg.de/"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kunsthaus Jesteburg
                  </a>
                  <br />
                  <a
                    href="https://www.schraegundgut.de/"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kunstraum Schräg & Gut
                  </a>
                  <br />
                  <a
                    href="http://www.physio-jesteburg.de"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Physiotherapie Knupper-Papendorf & Vandersee
                  </a>
                  <br />
                  <a
                    href="http://www.naturheilpraxis-wiehe.de"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Naturheilpraxis Wiehe
                  </a>
                  <br />
                  <a
                    href="http://www.reiten-mit-wohlgefuehl.de"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reiten mit Wohlgefühl
                  </a>
                  <br />
                  <a
                    href="https://www.hlgc-hittfeld.de/"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Golfclub Hittfeld
                  </a>
                </p>
              </div>
            </div>
            {/* leere Spalte */}
            <div className="col-12 col-md-6 order-md-2"></div>
          </div>

          {/* 2. Abschnitt: Lieferanten (rechts) */}
          <div
            className="row mb-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            {/* leere Spalte */}
            <div className="col-12 col-md-6 order-md-2"></div>
            {/* Lieferanten-Block */}
            <div className="col-12 col-md-6 order-md-1">
              <div className="">
                <h3>Diese Unternehmen beliefern unser Hofrestaurant:</h3>
                <p>
                  <a
                    href="http://www.bienenlustwelt.de/honig-aus-jesteburg/"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bienenlustwelt – Honig aus Jesteburg
                  </a>
                  <br />
                  <a
                    href="http://www.wilkenshoff.de"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wilkenshoff (Ochtmannsbruch)
                  </a>
                  <br />
                  <a
                    href="http://www.hofwoerme.de"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hof Wörme
                  </a>
                  <br />
                  <a
                    href="http://www.arpshof.de"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Arpshof
                  </a>
                  <br />
                  <a
                    href="https://www.schmidt-weingut.de/index.html"
                    className="text-primary-red"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Weingut Richard Schmidt (Kaiserstuhl)
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

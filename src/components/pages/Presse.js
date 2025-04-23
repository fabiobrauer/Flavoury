import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/css/style.css";

import Zeitung1 from "../../assets/images/Zeitung1.jpeg";
import Zeitung4 from "../../assets/images/Zeitung4.png";
import Schleppjagd from "../../assets/images/schleppjagt.jpeg";

export default function Presse() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="index_wraper">
      <Helmet>
        <title>Hof&Gut Presse und Zeitungsartikel</title>
        <meta name="description" content="Auftritt von Hof & Gut in der Presse" />
        <link rel="canonical" href="/Presse" />
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
            <span className="sub_text">Berichterstattung</span>
            <h2>Hof & Gut in der Presse</h2>
          </div>

          {/* 1. Abschnitt: Zeitung4 (Bild links) */}
          <div
            className="row mb-5 mt-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-2 text-center">
              <img
                src={Zeitung4}
                alt="Zeitungsartikel"
                className="img-fluid rect_img"
              />
            </div>
            <div className="col-12 col-md-6 order-md-1" />
          </div>



          {/* 3. Abschnitt: Textblock (Text links) */}
          <div
            className="row mb-5 mt-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 display-flex flex-direction-column">
              <img
                src={Schleppjagd}
                alt="Schleppjagd"
                className="img-fluid rect_img mb-3"
              />
              <p>
                Der Hamburger Schleppjagdverein veranstaltet regelmäßig beeindruckende Schleppjagden bei Hof & Gut.
              </p>
              <h3>Hof & Gut im Hamburger Abendblatt</h3>
              <p>
                Dass in Itzenbüttel Feuer im Kamin brennt, ist Johanna Coleman und Axel Brauer zu verdanken. Auf einer
                geerbten Hofstelle starteten sie ein Projekt, das weit über einen Restaurantbetrieb hinausgeht. Die Ursprünge
                der Anlage gehen zurück bis ins 16. Jahrhundert. Immer schon spielten Pferde hier eine wichtige Rolle. Deswegen
                begann man 2007 mit der Eröffnung einer Reitschule. 15 Ponys und Pferde stehen für Unterricht, Ausritte und
                Kindergeburtstage im Stall.
              </p>
              <p>
                In der ehemaligen Korn- und Kartoffelscheune verwirklichten die Betreiber ein Wohnprojekt, in dem Kinder und
                Erwachsene ein modernes Zuhause auf dem Land gefunden haben. Das Herz der Anlage ist das alte Bauernhaus. Sein
                Innenleben wurde saniert, bis zum vorläufigen Höhepunkt der Hofgeschichte: die Eröffnung des Restaurants Stub’n im
                Herbst vorigen Jahres.
              </p>
            </div>
          </div>
                    {/* 2. Abschnitt: Zeitung1 (Bild rechts) */}
          <div
            className="row mb-5 mt-5 align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1" />
            <div className="col-12 col-md-6 order-md-2 text-center">
              <img
                src={Zeitung1}
                alt="Bauernhaus Artikel"
                className="img-fluid rect_img"
                style={{ maxHeight: "770px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

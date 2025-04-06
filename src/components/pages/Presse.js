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

      <div className="row_inner_am who_we_section who_version_two light_texchur2 mt-5">
        <div className="container mt-5">

          {/* Titel */}
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500}>
            <span className="sub_text">Berichterstattung</span>
            <h2>Hof & Gut in der Presse</h2>
          </div>

          {/* Zeitungsbild 1 */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 text-center">
              <img src={Zeitung4} alt="Zeitungsartikel" className="img-fluid radius_img smaller_image" />
            </div>
          </div>

          {/* Zeitungsbild 2 */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 text-center">
              <img src={Zeitung1} alt="Bauernhaus Artikel" className="img-fluid radius_img smaller_image" style={{ maxHeight: "770px" }} />
            </div>
          </div>

          {/* Textblock */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 bg-dark text-white p-4 radius_img">
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
              <p>
                <a href="#" className="text-primary-red">Artikel im Abendblatt</a>
              </p>
            </div>
          </div>

          {/* Schleppjagd */}
          <div className="row" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 bg-dark text-white p-4 radius_img">
              <img src={Schleppjagd} alt="Schleppjagd" className="img-fluid radius_img mb-3" />
              <p>
                Der Hamburger Schleppjagdverein veranstaltet regelmäßig beeindruckende Schleppjagden bei Hof & Gut.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

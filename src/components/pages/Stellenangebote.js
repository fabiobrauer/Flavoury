import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../assets/css/style.css';

import BildKöche from '../../assets/images/Köche.png';
import BildSpeisen from '../../assets/images/Speisen1.jpeg';

export default function Stellenangebote() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="index_wraper">
      <Helmet>
        <title>Stellenangebote bei Hof und Gut in Jesteburg</title>
        <meta name="description" content="Arbeitsplätze bei Hof und Gut in Jesteburg" />
        <link rel="canonical" href="/Stellenangebote" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div className="row_inner_am who_we_section who_version_two light_texchur2 mt-5">
        <div className="container mt-5">

          {/* Titel */}
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500}>
            <span className="sub_text">Jobs & Ausbildung</span>
            <h2>Wir suchen Verstärkung!</h2>
          </div>

          {/* Bild 1 */}
          <div className="row mb-5 mt-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 text-right">
              <img src={BildKöche} alt="Chefkoch und Azubis" className="img-fluid smaller_image radius_img" style={{ maxHeight: '540px' }} />
            </div>
          </div>

          {/* Stelle 1 */}
          <div className="row mb-4" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-xs-12 col-md-6 p-4">
              <h3>Auszubildende/r Koch/in</h3>
              <p>
                Wir suchen zum nächstmöglichen Zeitpunkt einen Kochauszubildenden. Bisher haben wir auf Hof&Gut bereits zwei
                Kochauszubildende sehr erfolgreich zur Prüfung geführt. Ab sofort suchen wir einen motivierten neuen
                Auszubildenden, der das Kochhandwerk lernen möchte.
              </p>
              <h3>Koch/in oder Küchenhelfer/in</h3>
              <p>
                Küchenhilfe / Koch in Voll- oder Teilzeit gesucht. Unser Restaurant ist unter der Woche ab 17 Uhr geöffnet,
                am Wochenende durchgehend ab 12 Uhr. Teamfähigkeit und Freude an der Arbeit sind uns wichtig.
              </p>


              <p><b>Bewerbung an: <a href="mailto:info@hof-und-gut.de" className="text-primary-red">info@hof-und-gut.de</a></b></p>
            </div>
          </div>


          {/* Bild 2 */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 text-right">
              <img src={BildSpeisen} alt="Dinner" className="img-fluid smaller_image radius_img" style={{ maxHeight: '540px' }} />
            </div>
          </div>


          {/* Stelle 4 */}
          <div className="row mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-12 p-4">
              <h3>Servicekraft</h3>
              <p>
                Servicekräfte in Voll- oder Teilzeit gesucht. Unser Restaurant ist unter der Woche ab 17 Uhr geöffnet,
                am Wochenende durchgehend ab 12 Uhr. Teamfähigkeit und Freude an der Arbeit sind uns wichtig.
              </p>
              <h3>Auszubildende/r im Restaurantfach</h3>
              <p>
                Wir suchen zum nächstmöglichen Zeitpunkt eine/n Auszubildende/n im Restaurantfach. Wichtig sind bei uns Teamfähigkeit und Freude an der Arbeit. Ein professionelles Service-Team erwartet Euch. Bewerbungen bitte schriftlich, am besten per Mail, an
              </p>
              
              <p><b>Bewerbung an: <a href="mailto:info@hof-und-gut.de" className="text-primary-red">info@hof-und-gut.de</a></b></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

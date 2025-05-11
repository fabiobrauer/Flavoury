import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/css/style.css";
import KontaktBild from '../../assets/images/20230720_115823_resized.jpg';

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://path-to-reservation-widget.js"; // ← hier ggf. echten Pfad einfügen
    script.async = true;
    script.dataset.resmioButton = "hof-gut-jesteburg";
    script.dataset.resmioFontsize = "14px";
    script.dataset.resmioFontcolor = "%23FFFFFF";
    script.dataset.resmioButtontext = "Jetzt reservieren";
    script.dataset.resmioButtoncolor = "%23c41500";
    script.dataset.resmioWidgetWidth = "275";
    script.dataset.resmioWidgetHeight = "400";
    document.body.appendChild(script);
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
            <span className="sub_text">Kontakt & Anfahrt</span>
            <h2>So erreichst du Hof &amp; Gut</h2>
          </div>

          {/* 1. Abschnitt: Öffnungszeiten & Kontakt (links) */}
          <div
            className="row align-items-start mb-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1">
              <h3 className="mb-4">Öffnungszeiten</h3>
              <p>
                Montag – Freitag: 17:00 – 22:00 Uhr (warme Küche)
                <br />
                Samstag, Sonntag und Feiertag: 12:00 – 22:00 Uhr (warme Küche)
              </p>
              <h4 className="mt-4">Kontakt</h4>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@hof-und-gut.de"
                  className="text-primary-red"
                >
                  info@hof-und-gut.de
                </a>
                <br />
                Tel: 04181 9199500
                <br />
                Mobil: 0176 70671532
              </p>
              <a
                href="https://cdn.shopify.com/s/files/1/0756/4568/2002/files/Aktuelle_Speisekarte.pdf?v=1724086530"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn_primary mt-3">
                  Aktuelle Speisekarte
                </button>
              </a>
              <div className="mt-3 mb-3">
                <a
                  href="//app.resmio.com/hof-gut-jesteburg/widget?from_button=true&amp;source=hof-und-gut-jesteburg.com&amp;comment=&amp;utm_source=button&amp;resourceGroup=&amp;resourceGroupName=&amp;source=&amp;date=&amp;height=400&amp;width=275&amp;fontSize=14px&amp;backgroundColor=%23ffffff&amp;color=%23555555&amp;linkBackgroundColor=%23c83f46&amp;facebookLogin=true&amp;newsletterSignup=true"
                  className="btn btn_primary"
                >
                  <strong>Jetzt reservieren</strong>
                </a>
              </div>
              <p className="mt-2 mb-0">
                Falls „Jetzt reservieren“ nicht erscheint, bitte Seite neu
                laden.
              </p>
            </div>
            <div className="col-12 col-md-6 order-md-2" />
          </div>

          {/* 2. Abschnitt: Anfahrt (rechts) */}
          <div
            className="row align-items-center mb-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1" />
            <div className="col-12 col-md-6 order-md-2">
              <h3>Anfahrt</h3>
              <iframe
                title="Navigiere zu Hof&Gut Jesteburg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.221622002947!2d9.933264077093998!3d53.32138507659057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1bd89bb3a0267%3A0x23876e66af16eac5!2sHof%20%26%20Gut%20Jesteburg!5e0!3m2!1sen!2sde!4v1693483721231!5m2!1sen!2sde"
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>

          {/* 3. Abschnitt: Kontaktdetails & Bild (links) */}
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-xs-12 col-md-6 order-md-1">
              <div className="erreichenSection">
                <h3>So erreichst Sie uns:</h3>
                <p>
                  Hof &amp; Gut Jesteburg GmbH bildet das Dach für die
                  angesiedelten Betriebe.
                  <br />
                  <strong>Büroadresse:</strong> Hauptstr. 3 – 21266 Jesteburg
                </p>

                <h3>Reitbetrieb Knott</h3>
                <p>
                  Reitgruppeneinteilung: Carmen Knott
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:ponyreitschule.knott@gmx.de"
                    className="text-primary-red"
                  >
                    ponyreitschule.knott@gmx.de
                  </a>
                  <br />
                  Tel: 0163 3796966
                </p>

                <h3>Speisen &amp; Übernachten am Hof</h3>
                <p>
                  Inhaber: Familie Spaqi
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:info@hof-und-gut.de"
                    className="text-primary-red"
                  >
                    info@hof-und-gut.de
                  </a>
                  <br />
                  Tel: 04181 9199500
                  <br />
                  Mobil: 0176 70671532
                </p>

                <h3>Landwirtschaft</h3>
                <p>
                  Hof &amp; Gut Jesteburg Agrar GmbH &amp; Co. KG
                  <br />
                  Büroadresse: Itzenbütteler Sod 15, 21266 Jesteburg
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:buchhaltung@hof-und-gut.de"
                    className="text-primary-red"
                  >
                    buchhaltung@hof-und-gut.de
                  </a>
                  <br />
                  Tel: 04183 9759994
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 order-md-2 text-center">
            </div>
          </div>
          <div
            className="row mb-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="col-12 col-md-6 order-md-1">
              <div style={{ maxWidth: "350px" }}>
                
              </div>
            </div>
            <div className="col-12 col-md-6 order-md-2 text-center">
              <img
                src={KontaktBild}
                alt="Kontakt zu Hof &amp; Gut"
                className="img-fluid rect_img"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

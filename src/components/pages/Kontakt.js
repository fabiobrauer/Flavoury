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
      <Helmet>
        <title>Anreise und Kontakt zu Hof&Gut Jesteburg</title>
        <meta name="description" content="Öffnungszeiten Kontakt Anreise Hof&Gut Jesteburg" />
        <link rel="canonical" href="/Kontakt" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div className="row_inner_am who_we_section who_version_two light_texchur2 mt-5">
        <div className="container mt-5">
          {/* Titel */}
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500}>
            <span className="sub_text">Kontakt & Anfahrt</span>
            <h2>So erreichst du Hof & Gut</h2>
          </div>

          {/* Öffnungszeiten + Kontakt */}
          <div className="row mt-5 mb-5" data-aos="fade-up" data-aos-duration={1500}>
            <div className="col-xs-12 col-md-6">
              <h3 className="mb-5">Öffnungszeiten</h3>
              <p>
                Montag – Freitag: 17:00 – 22:00 Uhr (warme Küche)<br />
                Samstag, Sonntag und Feiertag: 12:00 – 22:00 Uhr (warme Küche)
              </p>
              <h4>Kontakt</h4>
              <p>
                E-Mail: <a href="mailto:info@hof-und-gut.de" className="text-primary-red">info@hof-und-gut.de</a><br />
                Tel: 04181 9199500<br />
                Mobil: 0176 70671532
              </p>
              <a
                href="https://cdn.shopify.com/s/files/1/0756/4568/2002/files/Aktuelle_Speisekarte.pdf?v=1724086530"
                target="_blank" rel="noopener noreferrer"
              >
                <button className="btn btn_primary mt-3">Aktuelle Speisekarte</button>
              </a>
              <div class="mt-3 mb-3"><a href="//app.resmio.com/hof-gut-jesteburg/widget?from_button=true&amp;source=hof-und-gut-jesteburg.com&amp;comment=&amp;utm_source=button&amp;resourceGroup=&amp;resourceGroupName=&amp;source=&amp;date=&amp;height=400&amp;width=275&amp;fontSize=14px&amp;backgroundColor=%23ffffff&amp;color=%23555555&amp;linkBackgroundColor=%23c83f46
&amp;facebookLogin=true&amp;newsletterSignup=true" class="btn btn_primary">          <strong>Jetzt reservieren</strong>        </a></div>
              <script type="text/javascript" data-resmio-fontsize="14px" data-resmio-fontcolor="%23FFFFFF" data-resmio-buttontext="Jetzt%20reservieren" data-resmio-bordercolor="%23FFFFFF" data-resmio-borderwidth="0" data-resmio-buttoncolor="%23c41500" data-resmio-buttonshadow="true" data-resmio-widget-color="%23555555" data-resmio-widget-width="275" data-resmio-widget-height="400" data-resmio-widget-fontsize="14px" data-resmio-widget-facebooklogin="true" data-resmio-widget-backgroundcolor="%23ffffff" data-resmio-widget-commentsdisabled="false" data-resmio-widget-newslettersignup="true" data-resmio-widget-linkbackgroundcolor="%23c83f46
"></script>
              <p className="mt-2 mb-0">Falls „Jetzt reservieren“ nicht erscheint, bitte Seite neu laden.</p>
            </div>
                      {/* Anfahrt (Google Maps Embed) */}
            <div className="col-xs-12 col-md-6">
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
              <div className="container ">
                <div className="row ">
                  <div className="col-md-5 col-xs-12" >
                    <div className="Kontakt_max_width" style={{maxWidth:"350px"}}>
                      <h3 data-aos="fade-up" data-aos-duration={1500}>So erreichen Sie uns:</h3>
                      <p data-aos="fade-up" data-aos-duration={1500}>
                        Hof & Gut Jesteburg GmbH bildet das Dach für die angesiedelten Betriebe.<br />
                        <strong>Büroadresse:</strong> Hauptstr. 3 – 21266 Jesteburg
                      </p>

                      <h3 data-aos="fade-up" data-aos-duration={1500}>Reitbetrieb Knott</h3>
                      <p data-aos="fade-up" data-aos-duration={1500}>
                        Reitgruppeneinteilung: Carmen Knott<br />
                        E-Mail: <a href="mailto:ponyreitschule.knott@gmx.de" className="text-primary-red">ponyreitschule.knott@gmx.de</a><br />
                        Tel: 0163 3796966
                      </p>
                      <h3 data-aos="fade-up" data-aos-duration={1500}>Speisen & Übernachten am Hof</h3>
                      <p data-aos="fade-up" data-aos-duration={1500}>
                        Inhaber: Familie Spaqi<br />
                        E-Mail: <a href="mailto:info@hof-und-gut.de" className="text-primary-red">info@hof-und-gut.de</a><br />
                        Tel: 04181 9199500<br />
                        Mobil: 0176 70671532
                      </p>
                      <h3 data-aos="fade-up" data-aos-duration={1500}>Landwirtschaft: Hof & Gut Jesteburg Agrar GmbH & Co. KG</h3>
                      <p data-aos="fade-up" data-aos-duration={1500}>
                        Büroadresse: Itzenbütteler Sod 15, 21266 Jesteburg<br />
                        E-Mail: <a href="mailto:buchhaltung@hof-und-gut.de" className="text-primary-red">buchhaltung@hof-und-gut.de</a><br />
                        Tel: 04183 9759994
                      </p>
                      </div>
                  </div>
                  <div className="col-xs-12 col-md-7 mt-5">
                    <img data-aos="fade-up" data-aos-duration={1500} src={KontaktBild} alt="KontaktBild" className="img-fluid smaller_image radius_img " />
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

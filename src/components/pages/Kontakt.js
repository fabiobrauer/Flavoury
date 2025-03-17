import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://path-to-reservation-widget.js"; // Adjust with the actual script path
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
    <div style={{ marginTop: "10px" }}>
      <Helmet>
        <title>Anreise und Kontakt zu Hof&Gut Jesteburg</title>
        <meta name="description" content="Öffnungszeiten Kontakt Anreise Hof&Gut Jesteburg" />
        <link rel="canonical" href="/Kontakt" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div style={{ padding: "10px" }}>
        <h2>Öffnungszeiten:</h2>
        <p>
          Montag - Freitag: 17:00 - 22:00 Uhr (warme Küche)
          <br />
          Samstag, Sonntag und Feiertag: 12:00 - 22:00 Uhr (warme Küche)
        </p>
        <h3>Kontakt:</h3>
        <p>
          E-Mail: info@hof-und-gut.de
          <br />
          Tel: 04181 9199500
          <br />
          Mobil: 0176 70671532
        </p>
        <a href="https://cdn.shopify.com/s/files/1/0756/4568/2002/files/Aktuelle_Speisekarte.pdf?v=1724086530">
          <button style={{ margin: "15px", padding: "10px", backgroundColor: "#c41500", color: "white", border: "none", cursor: "pointer" }}>
            Aktuelle Speisekarte
          </button>
        </a>
        <p>Falls "Jetzt reservieren" nicht erscheint, bitte neu laden</p>
      </div>

      <div style={{ padding: "10px" }}>
        <h2>So erreichen Sie uns:</h2>
        <p>Hof & Gut Jesteburg GmbH bildet das Dach für die angesiedelten Betriebe</p>
        <p>Büroadresse: Hauptstr.3 - 21266 Jesteburg</p>
      </div>

      <div style={{ padding: "10px" }}>
        <h3>Reitbetrieb Knott:</h3>
        <p>
          Reitgruppeneinteilung Carmen Knott
          <br />
          E-Mail: ponyreitschule.knott@gmx.de
          <br />
          Tel: 01633796966
        </p>
      </div>

      <div style={{ padding: "10px" }}>
        <h3>Speisen und Übernachten am Hof:</h3>
        <p>
          Inhaber Familie Spaqi
          <br />
          E-Mail: info@hof-und-gut.de
          <br />
          Tel: 04181 9199500
          <br />
          Mobil: 0176 70671532
        </p>
      </div>

      <div style={{ padding: "10px" }}>
        <h3>Landwirtschaft: Hof & Gut Jesteburg Agrar GmbH & Co. KG</h3>
        <p>
          Büroadresse: Itzenbütteler Sod 15, 21266 Jesteburg
          <br />
          E-Mail: buchhaltung@hof-und-gut.de
          <br />
          Tel.: 04183 9759994
        </p>
      </div>

      <div style={{ padding: "10px" }}>
        <h2>Anfahrt</h2>
        <iframe
          title="Navigiere zu Hof&Gut Jesteburg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.221622002947!2d9.933264077093998!3d53.32138507659057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1bd89bb3a0267%3A0x23876e66af16eac5!2sHof%20%26%20Gut%20Jesteburg!5e0!3m2!1sen!2sde!4v1693483721231!5m2!1sen!2sde"
          width="100%"
          height="700px"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
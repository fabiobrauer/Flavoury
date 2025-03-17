import { Helmet } from "react-helmet-async";

export default function UebernachtenAmHof() {
  return (
    <div style={{ marginTop: "15px", textAlign: "center" }}>
      <Helmet>
        <title>Übernachten am Hof</title>
        <meta name="description" content="Übernachten bei Hof und Gut in Jesteburg" />
        <link rel="canonical" href="/ÜbernachtenAmHof" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div style={{ padding: "15px", backgroundColor: "#333", color: "white" }}>
        <h2>Erholung im Schlaf unterm Reetdach!</h2>
        <p>
          Alle Zimmer sind mit einem Fernseher ausgestattet, aber noch schöner ist der Blick aus dem Fenster!
          Internetzugang über Hotspot ist kostenlos verfügbar.
        </p>
        <p>
          Anreise täglich ab 16 Uhr, am Wochenende ab 14 Uhr möglich. Bei früher oder später Anreise nach 22 Uhr bitte anrufen:
          <br />
          <b>04181 9199500</b> oder <b>0176 070671532</b>
        </p>
        <p>
          Das Team von Hof & Gut wünscht eine geruhsame Nacht unterm Reetdach und ländliche Träume!
          <br />
          <b>Reservierungen per E-Mail an:</b> <a href="mailto:info@hof-und-gut.de">info@hof-und-gut.de</a>
        </p>
      </div>

      <div style={{ marginTop: "15px", backgroundColor: "#444", color: "white", padding: "15px" }}>
        <h2>Preise</h2>
        <p>
          DZ 110 € | EZ 95 € | Apartment für 2 Personen 150 € | Apartment für 3 Personen 175 € | Apartment für 4 Personen 200 € | Zustellbett für ein Kind 25 €
        </p>
      </div>

      <div style={{ marginTop: "15px" }}>
        <h2>Hof-Frühstück</h2>
        <p>
          Das Frühstück wird für unsere Hausgäste von 8 – 10:00 Uhr serviert.
          <br />
          Frühstück: 14.50 € p. P | Kinderfrühstück (3 – 7 Jahre) 8,00 € p.P.
        </p>
        <img src="Frühstück.jpg" alt="Frühstück" style={{ width: "100%" }} />
      </div>

      <div style={{ marginTop: "15px" }}>
        <h2>Ferienwohnung</h2>

      </div>

      <div style={{ marginTop: "15px" }}>
        <h2>Zimmer</h2>

      </div>
    </div>
  );
}
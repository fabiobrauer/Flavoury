import { Helmet } from "react-helmet-async";

export default function TeamtrainingFirmenevents() {
  return (
    <div style={{ marginTop: "15px", textAlign: "center" }}>
      <Helmet>
        <title>Teamtraining und Firmenevents bei Hof&Gut in Jesteburg</title>
        <meta name="description" content="Teamtraining und Firmenevents bei Hof&Gut in der Nordheide" />
        <link rel="canonical" href="/TeamtrainingUndFirmenevents" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div style={{ marginBottom: "15px" }}>
        <img src="FirmenEvent.jpeg" alt="Firmen Event" style={{ width: "100%" }} />
      </div>
      <div>
        <img src="angebote 1.png" alt="Angebot" style={{ width: "100%" }} />
      </div>

      <div style={{ padding: "15px", backgroundColor: "#333", color: "white", marginTop: "15px" }}>
        <h2>Teamtraining und Firmenevents</h2>
        <p>
          Events für jede Kragenweite. Hof & Gut ist und bleibt das Thema der Hofstelle Itzenbüttler Sod. Leckere, regionale
          Gerichte in der gemütlichen Atmosphäre des Restaurants Stub’n, Erfrischungen im Biergarten und die Hoffeste haben
          diesen Ort zu einem Geheimtipp in Sachen Gastlichkeit gemacht und erfreuen sich großer Beliebtheit.
        </p>
        <p>
          Aber darauf ruhen wir uns nicht aus! Ab sofort bieten wir Ihnen ausgefallene Events. Natürlich in gewohnt hoher
          Qualität. Veranstaltungspakete mit gutem Essen und ausgesuchten Aktionen (Genuss & Gut), Teamtrainings für Firmen,
          Vereine und Schulen (Team & Gut) und auf Sie passend zugeschnittene Team-Sport-Events (Aktiv & Gut).
        </p>
        <p>
          Alle Angebote stimmen wir natürlich individuell auf Ihre Bedürfnisse ab. Bei uns gibt es weder im Restaurant, noch
          bei Veranstaltungen etwas von der Stange!
        </p>
      </div>

      <div style={{ padding: "15px", backgroundColor: "#333", color: "white", marginTop: "15px" }}>
        <h3>Sie haben Interesse? Möchten mehr Informationen?</h3>
        <p>
          Hof & Gut Jesteburg GmbH <br />
          Itzenbütteler Sod 13-15 <br />
          21266 Jesteburg OT Itzenbüttel
        </p>
        <p>
          Rufen Sie uns an! <br />
          Mona Rickert: 0157-8560 0194 <br />
          Marc Wollrab: 0157-8677 1150 <br />
          Büro Hof & Gut: 04181-2170 714
        </p>
        <p>
          Mailen Sie uns! <br />
          <a href="mailto:wollrab@hof-und-gut.de" style={{ color: "#FFD700" }}>wollrab@hof-und-gut.de</a>
        </p>
        <p>Wir freuen uns auf Ihre Anfragen! <br /> Mona Rickert & Marc Wollrab</p>
      </div>

      <div style={{ marginTop: "15px" }}>
        <img src="ihr-event1 1.png" alt="Flyer" style={{ width: "100%" }} />
      </div>
    </div>
  );
}
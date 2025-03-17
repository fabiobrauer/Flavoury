import { Helmet } from "react-helmet-async";
import ReitenBasicGrid from "../assets/Comp_Reiten";
import ReitenCustomImageList from "../assets/Comp_ImageListReiten";

export default function Reiten() {
  return (
    <div style={{ marginTop: "15px", textAlign: "center" }}>
      <Helmet>
        <title>Reiten bei Carmen Knott</title>
        <meta name="description" content="Reiten und Ponniereiten in Jesteburg" />
        <link rel="canonical" href="/Reiten" />
        <meta name="fragment" content="!" />
      </Helmet>

      <ReitenBasicGrid />

      <div style={{ marginTop: "15px" }}>
        <ReitenCustomImageList />
      </div>

      <div style={{ marginTop: "15px", padding: "15px", backgroundColor: "#333", color: "white" }}>
        <h2>Unser wöchentliches Angebot</h2>
        <p>
          Fortgeschrittenengruppen<br />
          Longenunterricht<br />
          Reitanfängergruppen ab dem 5. Lebensjahr<br />
          Ponykindergarten regelmäßig samstags und sonntags<br />
        </p>
        <p>
          <a href="https://doodle.com/meeting/participate/id/aOPWkxgb">
            <button style={{ backgroundColor: "#c41500", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>Hier Buchen</button>
          </a>
          <a href="https://doodle.com/meeting/participate/id/b4zlwZ2e" style={{ marginLeft: "10px" }}>
            <button style={{ backgroundColor: "#c41500", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>Geführte Waldausritte</button>
          </a>
        </p>
      </div>

      <div style={{ marginTop: "15px", padding: "15px", backgroundColor: "#333", color: "white" }}>
        <h2>Kontakt und Aktuelles</h2>
        <p>
          Seit dem Sommer 2021 hat Carmen Knott den Reitbetrieb am Hof von Anne Strufe übernommen. Sie und ihr Team freuen sich auf Euch!
        </p>
        <p>
          Carmen Knott:<br />
          Tel. 0163 3796966<br />
          Mail: ponyreitschule.knott@gmx.de
        </p>
      </div>

      <div style={{ marginTop: "15px", padding: "15px", backgroundColor: "#333", color: "white" }}>
        <h2>Preisliste</h2>
        <p>
          Kinder und Jugendgruppen: 85,- €/Monat<br />
          Einzelstunde Kinder (30 Min.) inkl. Vorbereitung Pony: 30 €<br />
          Einzelstunde Erwachsene (45 Min.) inkl. Schulpferd: 55 €<br />
        </p>
      </div>
    </div>
  );
}

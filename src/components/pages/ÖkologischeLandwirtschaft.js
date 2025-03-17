import { Helmet } from "react-helmet-async";
import LandwiBanner from "../assets/Comp_LandwiBanner";

export default function OekologischeLandwirtschaft() {
  return (
    <div style={{ marginTop: "15px" }}>
      <LandwiBanner />

      <Helmet>
        <title>Ökologische Landwirtschaft Hof&Gut Jesteburg</title>
        <meta name="description" content="Alles über unsere Tiere und die Landwirtschaft" />
        <link rel="canonical" href="/ÖkologischeLandwirtschaft" />
        <meta name="fragment" content="!" />
      </Helmet>

      {/* Main Content with Images */}
      <div style={{ padding: "10px", textAlign: "center" }}>
        <h2>Ökologische Landwirtschaft</h2>
        <img src="KüheNeu.jpeg" alt="Kühe" style={{ width: "100%", maxHeight: "520px", objectFit: "cover" }} />
      </div>

      {/* Sidebar */}
      <div style={{ padding: "10px", textAlign: "center" }}>
        <img src="EU-ELER_CMYK1-271x300 1.png" alt="EU Förderung" style={{ width: "100%" }} />
        <p>
          Hier investiert Europa in die ländlichen Gebiete mit „Agrarumwelt- und Klimaschutzmaßnahmen”. Mit diesen
          Maßnahmen werden landwirtschaftliche Betriebe bei der Erhaltung und Verbesserung der Umweltsituation
          unterstützt. Ziel ist eine nachhaltige und ressourcenschonende Bewirtschaftung in Bezug auf Artenvielfalt,
          Boden, Wasser und den Schutz des Klimas. Siehe auch:
          <a href="https://www.eler.niedersachsen.de" target="_blank" rel="noopener noreferrer">
            www.eler.niedersachsen.de
          </a>
        </p>
      </div>

      {/* Philosophy Section */}
      <div style={{ padding: "10px" }}>
        <h3>Philosophie</h3>
        <p>
          Unser Ziel ist es, mit Hof&Gut einen Kreislauf (wieder)herzustellen, der Menschen in Lohn und Brot bringt und
          alle Tiere des Hofes ernährt. Außerdem soll sich die historische Hofstelle zu einem Ort der Begegnung
          entwickeln, an dem Kinder und Erwachsene als Gäste gerne verweilen, miteinander ihre Freizeit verbringen und
          einen historischen Bauernhof erleben. Die Hofstelle umfasst eine Gesamtfläche von 85 Hektar, je hälftig
          Forst- und Ackerflächen. Die Ackerflächen werden seit 2007 biologisch bewirtschaftet und jährlich von der
          Gesellschaft für Ressourcenschutz mbH (GfRS) aus Göttingen zertifiziert. Die zum Hof gehörenden Rinder stehen
          durch die extensiven Grünflächen auf eigener Futtergrundlage.
        </p>
      </div>

      {/* Map and Details Section */}
      <div style={{ padding: "10px", textAlign: "center" }}>
        <img src="hofplan 1.png" alt="Hofplan" style={{ width: "100%" }} />
        <p>
          Unsere Daten für die ökologische Bewirtschaftung:<br />
          Hof & Gut Jesteburg Agrar GmbH & Co. KG<br />
          Betriebsnummer: 276033530200088<br />
          ÖkokontrollNr. DE-NI-039-08263-
        </p>
      </div>
    </div>
  );
}

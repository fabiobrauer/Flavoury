import { Helmet } from "react-helmet-async";

export default function Links() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <Helmet>
        <title>Links... mit Hof&Gut in Zusammenarbeit</title>
        <meta name="description" content="Mit Hof&Gut in Zusammenarbeit" />
        <link rel="canonical" href="/Links" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div style={{ backgroundColor: "#333", color: "white", padding: "15px", margin: "5px", maxWidth: "800px", width: "100%" }}>
        <h2>Weitere interessante Links in Jesteburg und Umgebung:</h2>
        <p>
          Kunststätte Bossard: <a href="https://www.bossard.de/">https://www.bossard.de/</a><br />
          Fotos von Verena Brockshus-Sprung: <a href="https://www.brockshus-sprung.de/">https://www.brockshus-sprung.de/</a><br />
          Kunsthaus Jesteburg: <a href="https://www.kunsthaus-jesteburg.de/">https://www.kunsthaus-jesteburg.de/</a><br />
          Kunstraum Schräg & Gut: <a href="https://www.schraegundgut.de/">https://www.schraegundgut.de/</a><br />
          Physiotherapie Knupper-Papendorf & Vandersee: <a href="http://www.physio-jesteburg.de">www.physio-jesteburg.de</a><br />
          Naturheilpraxis Wiehe: <a href="http://www.naturheilpraxis-wiehe.de">www.naturheilpraxis-wiehe.de</a><br />
          Reiten mit Wohlgefühl: <a href="http://www.reiten-mit-wohlgefuehl.de">www.reiten-mit-wohlgefuehl.de</a><br />
          Hamburger Land-und Golfclub Hittfeld: <a href="https://www.hlgc-hittfeld.de/">https://www.hlgc-hittfeld.de/</a><br />
        </p>
      </div>

      <div style={{ backgroundColor: "#333", color: "white", padding: "15px", margin: "5px", maxWidth: "800px", width: "100%" }}>
        <h2>Diese Unternehmen aus der Region & deutschlandweit beliefern uns mit Produkten für das Hofrestaurant:</h2>
        <p>
          Wir sind begeisterte Anhänger von “Bienenlustwelt” - Honig von diesen Künstlerinnen und aus unserem Ort gibt’s im Hofrestaurant:
          <a href="http://www.bienenlustwelt.de/honig-aus-jesteburg/">www.bienenlustwelt.de/honig-aus-jesteburg/</a><br />
          Wilkenshoff in Ochtmannsbruch: <a href="http://www.wilkenshoff.de">www.wilkenshoff.de</a><br />
          Hof Wörme: <a href="http://www.hofwoerme.de">www.hofwoerme.de</a><br />
          Arpshof: <a href="http://www.arpshof.de">www.arpshof.de</a><br />
          Weingut Richard Schmidt, Kaiserstuhl, erster Biowinzer in Deutschland: <a href="https://www.schmidt-weingut.de/index.html">https://www.schmidt-weingut.de/index.html</a>
        </p>
      </div>
    </div>
  );
}

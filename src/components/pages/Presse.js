import { Helmet } from "react-helmet-async";

export default function Presse() {
  return (
    <div style={{ marginTop: "10px", textAlign: "center" }}>
      <Helmet>
        <title>Hof&Gut Presse und Zeitungsartikel</title>
        <meta name="description" content="Auftritt von Hof & Gut in der Presse" />
        <link rel="canonical" href="/Presse" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div style={{ marginBottom: "10px" }}>
        <img src="Zeitung4.png" alt="Zeitungsartikel" style={{ width: "100%" }} />
      </div>
      <div>
        <img src="Zeitung1.jpeg" alt="Foto Bauernhaus früher" style={{ width: "100%", maxHeight: "770px" }} />
      </div>

      <div style={{ padding: "15px", backgroundColor: "#333", color: "white", marginTop: "15px" }}>
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
          <a href="#">Artikel im Abendblatt</a>
        </p>
      </div>

      <div style={{ padding: "15px", backgroundColor: "#333", color: "white", marginTop: "15px" }}>
        <img src="schleppjagt.jpeg" alt="Schleppjagd" style={{ width: "100%" }} />
        <p>Hamburger Schleppjagdverein veranstaltet Schleppjagd bei Hof und Gut.</p>
      </div>
    </div>
  );
}

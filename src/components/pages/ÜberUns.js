import { Helmet } from "react-helmet-async";

export default function UeberUns() {
  return (
    <div style={{ margin: "20px auto", padding: "20px", maxWidth: "800px", backgroundColor: "#333", color: "white", borderRadius: "10px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
      <Helmet>
        <title>Über Hof&Gut Jesteburg</title>
        <meta name="description" content="Wissenswertes über Hof und Gut Jesteburg" />
        <link rel="canonical" href="/ÜberUns" />
        <meta name="fragment" content="!" />
      </Helmet>

      <h2>Über uns</h2>
      <p>
        Unter dem Dach von Hof&Gut Jesteburg finden sich ökologische Landwirtschaft, ein Reitbetrieb, ein Einstellbetrieb,
        generationenübergreifendes Wohnen sowie Kunst und Kultur. Gastronomie und Gästezimmer am Hof werden betrieben unter
        der Marke „Speisen am Hof“ und „Übernachten am Hof“.
      </p>
      <hr />
      <p>
        Die Hofstelle Itzenbütteler Sod 13-15 in 21266 Jesteburg-Itzenbüttel ist das Zentrum und die „Keimzelle“ von Hof&Gut Jesteburg.
        Hier haben wir am 1. Oktober 2007 ein Projekt gestartet, um eine Hofstelle aus dem 16. Jahrhundert neu zu beleben und für die
        breite Öffentlichkeit erlebbar zu machen.
      </p>
      <hr />
      <p>
        Wir haben unsere Hofstelle mit einem Reitbetrieb begonnen. Eine bunte Herde von insgesamt 40 Ponys und Pferden steht für den Unterricht
        und für Ausritte zur Verfügung. Kinder können professionell reiten lernen oder einfach Spaß am Zusammensein mit Pferden haben.
      </p>
      <hr />
      <p>
        Zudem haben wir die hofeigenen Ackerflächen auf biologischen Anbau umgestellt und züchten inzwischen Aubrac-Rinder mit einer Herde
        von 40 Tieren. Das Bauernhaus wurde 2010 denkmalgerecht saniert und ist seitdem mit unserer Gastronomie für die Öffentlichkeit zugänglich.
        Seit 2012 bietet der Hof auch schöne Gästezimmer unter dem Reetdach.
      </p>
      <hr />
      <p>
        Kunst und Kultur werden mit verschiedenen Projekten und wechselnden Ausstellungen in den Gaststuben gefördert. Schaut gerne vorbei,
        um zu sehen, was auf unserem Hof passiert!
      </p>
      <hr />
      <p style={{ fontSize: "small" }}>
        Johanna Coleman und Axel Brauer, Hella Meyer-Alber und Nicolas Feltgen, Alexander Meyer-Alber und Annette Meyer-Alber mit dem „Hof&Gut-Team“,
        sowie das Team von „Speisen und Übernachten am Hof“, Familie Spaqi, Frank Schiffner und das Küchenteam.
      </p>
    </div>
  );
}
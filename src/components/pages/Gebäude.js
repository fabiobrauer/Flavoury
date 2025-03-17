import { Helmet } from "react-helmet-async";

export default function Gebaeude() {
  return (
    <div style={{ marginTop: '10px' }}>
      <Helmet>
        <title>Gebäude bei Hof & Gut Jesteburg</title>
        <meta name="description" content="Renoviertes Bauernhaus, umgebaute Scheune und zukünftige Projekte" />
        <link rel="canonical" href="/Gebäude" />
        <meta name="fragment" content="!" />
      </Helmet>

      {/* Bauernhaus früher */}
      <div style={{ padding: '10px' }}>
        <div>
          <img
            src="60842f03bdc80b89a1408476bdd76460.jpeg"
            alt="Foto Bauernhaus früher"
            style={{ objectFit: 'cover', objectPosition: 'bottom', width: '100%' }}
          />
        </div>
      </div>

      {/* Text about the Bauernhaus früher */}
      <div style={{ padding: '10px' }}>
        <div>
          <h2>Das Bauernhaus früher</h2>
          <p>
            Die Hofstelle Itzenbütteler Sood 13 (Harmsbur) gehört zu den Hofstellen in Itzenbüttel, die auf das Mittelalter zurückgehen. Die Ursprünge des Hauptgebäudes liegen nach neuesten Erkenntnissen im 16. Jahrhundert. Anfang der 1990er Jahre wurden große Teile des Reetdachs des Hofgebäudes erneuert. In den Jahren 2003/2004 wurde das Bauernhaus mit Unterstützung von Mitteln aus der Dorferneuerung und aus dem ETLR-Fonds grundlegend saniert. Kleinere Sanierungsmaßnahmen erfolgten im Rahmen des Anschlusses an die Kanalisation.
          </p>
        </div>
      </div>

      {/* Bauernhaus heute */}
      <div style={{ padding: '10px' }}>
        <div>
          <h2>Das Bauernhaus heute</h2>
          <p>
            Im Jahr 2010 wurde das alte Bauernhaus auch im Inneren denkmalgerecht saniert und das historische Ständerwerk wiederhergestellt. Hofseitig und zur Straße hin erhielt das Gebäude neue Sprossenfenster und Gauben, die nun auch das Obergeschoss mit Licht versorgen. Eindrucksvoll lässt sich im Gastraum und auch im Küchenbereich das historische und teilweise wiederhergestellte Ständerwerk besichtigen. Bei der Renovierung wurden ausschließlich Eichen aus dem eigenen Itzenbütteler Wald verwendet. Die “neuen” Hölzer lassen sich gut von den historischen unterscheiden.
          </p>
        </div>
      </div>

      {/* Image of Bauernhaus today */}
      <div style={{ padding: '10px' }}>
        <div>
          <img
            src="Bauernhaus2010.jpeg"
            alt="Foto Bauernhaus 2010"
            style={{ width: '100%', height: '550px' }}
          />
        </div>
      </div>

      {/* Kinderhaus */}
      <div style={{ padding: '10px' }}>
        <div>
          <img
            src="ReiterHaus.jpeg"
            alt="Foto vom Kinderhaus"
            style={{ width: '100%', height: '650px' }}
          />
          <p>
            Dies ist unser “Kinderhaus”, in dem die Reitkinder sich vor und nach dem Unterricht aufhalten können.
          </p>
        </div>
      </div>
    </div>
  );
}

import { Helmet } from "react-helmet-async";

export default function VeranstaltungenKunstKultur() {
  return (
    <div style={{ marginTop: "15px", textAlign: "center" }}>
      <Helmet>
        <title>Veranstaltungen Kunst und Kultur bei Hof und Gut</title>
        <meta name="description" content="Veranstaltungen Kunst und Kultur bei Hof und Gut in Jesteburg" />
        <link rel="canonical" href="/VeranstaltungenKunstKultur" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div style={{ padding: "15px", backgroundColor: "#333", color: "white" }}>
        <h2>Fotografien von Walter Schmitz</h2>
        <img src="SchmitzFoto.jpg" alt="Fotografien von Walter Schmitz" style={{ width: "100%" }} />
        <p>
          Der berühmte Fotograf Walter Schmitz aus Hamburg hat rund um Hof&Gut Bilder eingefangen und stellt sie im Restaurant Stub’n aus. Anschauen lohnt!
        </p>
      </div>

      <div style={{ padding: "15px", backgroundColor: "#444", color: "white", marginTop: "15px" }}>
        <h2>Hoffest</h2>
        <img src="20230501_123221.jpg" alt="Hoffest" style={{ width: "100%" }} />
        <p>
          Am 1. Mai und am 3. Oktober feiern wir Hoffest. Am Vorabend wird getanzt, entweder in den Mai oder im Oktober zünftig mit Dirndl und Lederhos’n ins Oktoberfest. Das nächste Hoffest findet am <b>1. Mai 2025</b> statt und am <b>30. April ab 19 Uhr</b> ist Tanz in den Mai, DJ und Co.
        </p>
      </div>

      <div style={{ padding: "15px", backgroundColor: "#333", color: "white", marginTop: "15px" }}>
        <h2>Hof&Gut im Fernsehen</h2>
        <p>
          Am 13. Januar 2016 wurde im NDR in der Sendung “Mein Nachmittag” ein kurzer Film über Hof&Gut und schöne Orte in der Umgebung ausgestrahlt. Live im Studio war Chefkoch Frank Schiffner, der ein Lieblingsgericht vorgestellt hat! Hier der Link zur Sendung:
          <a href="https://www.ndr.de/fernsehen/sendungen/mein_nachmittag/Mein-Nachmittag,meinnachmittag12852.html" target="_blank" rel="noopener noreferrer">NDR Mein Nachmittag</a>.
        </p>
      </div>

      <div style={{ padding: "15px", backgroundColor: "#444", color: "white", marginTop: "15px" }}>
        <h2>Ausstellung von Karola Römermann in den “Künstlerstuben”</h2>
        <p>
          Karola Römermann stellt derzeit Werke ihres Schaffens aus 4 Jahrzehnten in den Künstlerstuben aus. Kommen Sie gerne zum Schauen und Staunen…
        </p>
      </div>

      <div style={{ padding: "15px", backgroundColor: "#333", color: "white", marginTop: "15px" }}>
        <h2>Kinder spielen… Klassik: “Alcina” von Georg Friedrich Händel</h2>
        <img src="Kinder.png" alt="Kinder spielen Klassik" style={{ width: "100%" }} />
        <p>
          Musik im Allgemeinen und klassische Musik im Besonderen kann uns dort berühren, wo Worte nicht ankommen. Jedes Kind sollte im besten Falle die Möglichkeit bekommen, einmal oder öfter “Klassik selber zu machen”.
        </p>
        <p>
          Alle Informationen finden Sie unter:
          <a href="https://www.kinder-spielen-klassik.de" target="_blank" rel="noopener noreferrer">https://www.kinder-spielen-klassik.de</a>.
        </p>
      </div>
    </div>
  );
}
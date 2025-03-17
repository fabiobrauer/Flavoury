import { Helmet } from "react-helmet-async";

export default function Stellenangebote() {
  return (
    <div style={{ marginTop: "15px", textAlign: "center" }}>
      <Helmet>
        <title>Stellenangebote bei Hof und Gut in Jesteburg</title>
        <meta name="description" content="Arbeitsplätze bei Hof und Gut in Jesteburg" />
        <link rel="canonical" href="/Stellenangebote" />
        <meta name="fragment" content="!" />
      </Helmet>

      <div style={{ padding: "15px", backgroundColor: "#333", color: "white" }}>
        <h2>Wir suchen Verstärkung!</h2>
      </div>

      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <img src="Köche.png" alt="Chefkoch und Azubis" style={{ width: "100%", maxHeight: "540px" }} />
      </div>

      <div style={{ padding: "15px", backgroundColor: "#444", color: "white", marginTop: "15px" }}>
        <h3>Auszubildende/r Koch/in</h3>
        <p>
          Wir suchen zum nächstmöglichen Zeitpunkt einen Kochauszubildenden. Bisher haben wir auf Hof&Gut bereits zwei
          Kochauszubildende sehr erfolgreich zur Prüfung geführt. Ab sofort suchen wir einen motivierten neuen
          Auszubildenden, der das Kochhandwerk lernen möchte. Bewerbungen an:
        </p>
        <p><b>info@hof-und-gut.de</b></p>
      </div>

      <div style={{ padding: "15px", backgroundColor: "#444", color: "white", marginTop: "15px" }}>
        <h3>Koch/in oder Küchenhelfer/in</h3>
        <p>
          Küchenhilfe/ Koch in Voll- oder Teilzeit gesucht. Unser Restaurant ist unter der Woche ab 17 Uhr geöffnet und am
          Wochenende durchgehend ab 12 Uhr. Teamfähigkeit und Freude an der Arbeit sind uns wichtig. Bewerbungen an:
        </p>
        <p><b>info@hof-und-gut.de</b></p>
      </div>

      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <img src="Speisen1.jpeg" alt="Dinner" style={{ width: "100%", maxHeight: "540px" }} />
      </div>

      <div style={{ padding: "15px", backgroundColor: "#444", color: "white", marginTop: "15px" }}>
        <h3>Auszubildende/r im Restaurantfach</h3>
        <p>
          Wir suchen zum nächstmöglichen Zeitpunkt eine/n Auszubildende/n im Restaurantfach. Teamfähigkeit und Freude an der
          Arbeit sind uns wichtig. Bewerbungen an:
        </p>
        <p><b>info@hof-und-gut.de</b></p>
      </div>

      <div style={{ padding: "15px", backgroundColor: "#444", color: "white", marginTop: "15px" }}>
        <h3>Servicekraft</h3>
        <p>
          Servicekräfte in Voll- oder Teilzeit gesucht. Unser Restaurant ist unter der Woche ab 17 Uhr geöffnet und am
          Wochenende durchgehend ab 12 Uhr. Teamfähigkeit und Freude an der Arbeit sind uns wichtig. Bewerbungen an:
        </p>
        <p><b>info@hof-und-gut.de</b></p>
      </div>
    </div>
  );
}
import { Helmet } from 'react-helmet-async';
import Comp_Swiper from '../assets/Comp_shop2';

export default function Hofladen() {
  return (
    <div style={{ marginTop: '15px' }}>
      <Helmet>
        <title>Hofladen</title>
        <meta name="description" content="Der Hof und Gut Hofladen" />
        <link rel="canonical" href="/Hofladen" />
        <meta name="fragment" content="!" />
      </Helmet>

      {/* Image and description section */}
      <div style={{ padding: '10px' }}>
        <img
          src="Hofladen1.jpg"
          alt="Hofladen Bild"
          style={{ objectFit: 'cover', objectPosition: 'bottom', width: '100%', maxHeight: '420px', minHeight: '410px' }}
        />
      </div>

      <div style={{ padding: '10px' }}>
        <h2>Der Hofladen</h2>
        <p>
          Unser kleiner Hofladen ist immer Dienstag abends und am Samstag von 11-15 Uhr geöffnet. Es gibt Fleisch, Wurst und Grillgut vom Hof&Gut Aubrac, Hühnchenfleisch und allerlei frische Salate und Saucen vom Hof Warnke, saisonales Gemüse und Bioeier von den Biohöfen Wurzelreich und Koch, sowie eine kleine Auswahl von italienischen Spezialitäten und Erlesenes aus dem Hof&Gut-Weinkeller. Für Hübsches sorgen Bea und Heike...
        </p>
      </div>

      <div style={{ padding: '10px' }}>
        <img
          src="Produktauswahlt.jpg"
          alt="Produktauswahl"
          style={{ objectFit: 'cover', objectPosition: 'bottom', width: '100%', maxHeight: '420px', minHeight: '410px' }}
        />
      </div>

      {/* Rindfleisch and Gänse sales section */}
      <div style={{ padding: '10px' }}>
        <h3>Verkauf von Rindfleisch aus ökologischer Haltung (Rindfleisch und Gänse)</h3>
        <p>
          Wir verkaufen in regelmäßigen Abständen Rindfleisch aus eigener Produktion. Es kann jeweils in 10- oder 20-kg-Paketen erworben werden (Preis 170,- bzw. 320,- Euro). Enthalten sind immer Rouladen, Hack, Braten, Gulasch, Beinscheibe, Suppenfleisch und Steaks. Außerdem können Sie bereits jetzt eine Weihnachtsgans 2024 bestellen, solange der Vorrat reicht! Bitte melden Sie sich bei Interesse gerne unter info@hof-und-gut.de, damit wir ein Paket Fleisch oder eine Gans für Sie reservieren!
        </p>
      </div>

      {/* Additional images */}
      <div style={{ padding: '10px' }}>
        <img
          src="Gemuese.jpg"
          alt="Gemüse"
          style={{ objectFit: 'cover', objectPosition: 'bottom', width: '100%', maxHeight: '550px', minHeight: '540px' }}
        />
      </div>

      <div style={{ padding: '10px' }}>
        <img
          src="Produkte2.jpg"
          alt="Produkte"
          style={{ objectFit: 'cover', objectPosition: 'bottom', width: '100%', maxHeight: '550px', minHeight: '540px' }}
        />
      </div>

      {/* Swiper component */}
      <div style={{ padding: '10px' }}>
        <Comp_Swiper />
      </div>
    </div>
  );
}

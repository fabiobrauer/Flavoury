import React from 'react';
import BildReiten from '../../assets/images/ReitenSeite.png';

export default function ReitenBasicGrid() {
  return (
    <div>
        <div className="mt-5">

          {/* Titel */}
          <div
            className="section_title text-center mb-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <span className="sub_text">Ponyreitschule</span>
            <h2>Aktuelle Angebote & Workshops</h2>
          </div>

          {/* Einziger Abschnitt: Text (links) und Bild (rechts) */}
          <div
            className="row align-items-center gap-4 mt-4"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            {/* Text-Spalte */}
            <div className="col-12 col-md-6 order-md-1">
              <h2 className="mb-3">Unsere aktuellen Angebote im Reitbetrieb zum Herunterladen</h2>
              <p className="mb-4">Hier findet Ihr alle Angebote der Reitschule, einfach anklicken:</p>
              <p>
                <a href="Tages.Ponyferien.Information.AKTUELL1.pdf" className="d-block mb-2">
                  Tages-Ponyferien
                </a>
                <a href="Jahresprogramm-2024.aktuell.pdf" className="d-block mb-2">
                  Jahresprogramm 2024
                </a>
                <a href="Reitschulvertrag01.23 (1).pdf" className="d-block mb-2">
                  Reitschulvertrag 01.23
                </a>
                <a href="Info.Ponygeburtstagsfeiern (1).pdf" className="d-block">
                  Ponygeburtstagsfeiern
                </a>
              </p>

              <a href="https://ponyreitschuleknot.wixsite.com/pony-club">
                <button className="btn btn_primary mt-4">
                  Zur Ponyreitschuleknott Webseite
                </button>
              </a>

              <div className="mt-5">
                <h2 className="mb-3">Reitworkshops</h2>
                <p>
                  Wir bieten in den Ferien Reitworkshops für Kinder ab 6 Jahren an, 
                  sowie auch Programme für Kindergeburtstage.
                </p>
                <p>Weitere Angebote für Kinder:</p>
                <a href="https://ponyreitschuleknot.wixsite.com/pony-club/book-online">
                  <button className="btn btn_primary mt-2">Hier buchen</button>
                </a>
              </div>
            </div>

            {/* Bild-Spalte */}
            <div className="col-12 col-md-6 order-md-2 text-center">
              <h3 className="mb-3">Zur Seite der Reitschule auf den Kasten Klicken</h3>
              <a href="https://ponyreitschuleknot.wixsite.com/pony-club">
                <img
                  src={BildReiten}
                  alt="Reitschule Knott"
                  className="img-fluid rect_img"
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </a>
            </div>
          </div>

        </div>
      </div>
  );
}

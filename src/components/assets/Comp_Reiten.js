import React from 'react';
import BildReiten from '../../assets/images/ReitenSeite.png'

export default function ReitenBasicGrid() {
  return (
    <div className="row_inner_am who_we_section who_version_two">
      <div className="container">
        <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500}>
          <span className="sub_text">Ponyreitschule</span>
          <h2>Aktuelle Angebote & Workshops</h2>
        </div>

        <div className="row mt-4 gap-4 justify-content-center">
          {/* Linke Seite mit Angeboten */}
          <div className="col-12 col-md-6 text-center" data-aos="fade-up" data-aos-duration={1500}>
            <h2 className="mb-3">Unsere aktuellen Angebote im Reitbetrieb zum Herunterladen</h2>
            <p className="mb-4">Hier findet Ihr alle Angebote der Reitschule, einfach anklicken:</p>
            <p>
              <a href="Tages.Ponyferien.Information.AKTUELL1.pdf" className=" d-block mb-2">Tages-Ponyferien</a>
              <a href="Jahresprogramm-2024.aktuell.pdf" className=" d-block mb-2">Jahresprogramm 2024</a>
              <a href="Reitschulvertrag01.23 (1).pdf" className=" d-block mb-2">Reitschulvertrag 01.23</a>
              <a href="Info.Ponygeburtstagsfeiern (1).pdf" className=" d-block">Ponygeburtstagsfeiern</a>
            </p>

            <a href="https://ponyreitschuleknot.wixsite.com/pony-club">
              <button className="btn btn_primary mt-4">Zur Ponyreitschuleknott Webseite</button>
            </a>

            <div className="mt-5">
              <h2 className="mb-3">Reitworkshops</h2>
              <p>
                Wir bieten in den Ferien Reitworkshops für Kinder ab 6 Jahren an, sowie auch Programme für Kindergeburtstage.
              </p>
              <p>Weitere Angebote für Kinder:</p>
              <a href="https://ponyreitschuleknot.wixsite.com/pony-club/book-online">
                <button className="btn btn_primary mt-2">Hier buchen</button>
              </a>
            </div>
          </div>

          {/* Rechte Seite mit Bild */}
          <div className="col-12 col-md-6  overflow-hidden " data-aos="fade-up" data-aos-duration={1500}>
            <h3>Zur Seite der Reitschule auf den Kasten Klicken</h3>
            <a href="https://ponyreitschuleknot.wixsite.com/pony-club">
              <img src={BildReiten} alt="img" style={{height:"400px"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function ReitenBasicGrid() {
  return (
    <div style={{ width: '100%', marginTop: '5px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        
        {/* Left Section with Download Links */}
        <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#222', color: '#fff', padding: '20px', textAlign: 'center' }}>
          <h2>Unsere aktuellen Angebote im Reitbetrieb zum Herunterladen</h2>
          <p>Hier findet Ihr alle Angebote der Reitschule, einfach anklicken:</p>
          <p>
            <a href="Tages.Ponyferien.Information.AKTUELL1.pdf" style={{ color: '#FFD700' }}>Tages-Ponyferien</a> <br />
            <a href="Jahresprogramm-2024.aktuell.pdf" style={{ color: '#FFD700' }}>Jahresprogramm 2024</a> <br />
            <a href="Reitschulvertrag01.23 (1).pdf" style={{ color: '#FFD700' }}>Reitschulvertrag 01.23</a> <br />
            <a href="Info.Ponygeburtstagsfeiern (1).pdf" style={{ color: '#FFD700' }}>Ponygeburtstagsfeiern</a>
          </p>
          
          <a href="https://ponyreitschuleknot.wixsite.com/pony-club">
            <button style={{ marginTop: '15px', padding: '10px 15px', backgroundColor: '#FFD700', border: 'none', cursor: 'pointer' }}>
              Zur Ponyreitschuleknott Webseite
            </button>
          </a>

          <div style={{ marginTop: '40px' }}>
            <h2>Reitworkshops</h2>
            <p>
              Wir bieten in den Ferien Reitworkshops für Kinder ab 6 Jahren an, sowie auch Programme für Kindergeburtstage.
            </p>
            <p>Weitere Angebote für Kinder</p>
            <a href="https://ponyreitschuleknot.wixsite.com/pony-club/book-online">
              <button style={{ marginTop: '10px', padding: '10px 15px', backgroundColor: '#FFD700', border: 'none', cursor: 'pointer' }}>
                Hier buchen
              </button>
            </a>
          </div>
        </div>

        {/* Right Section with Image */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'center', backgroundColor: '#222' }}>
          <a href="https://ponyreitschuleknot.wixsite.com/ponyreitschule-carme">
            <img src="PoniesReiten.jpeg" alt="Kinder beim Poniereiten auf dem Hof" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
          </a>
        </div>

      </div>
    </div>
  );
}

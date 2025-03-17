import React from 'react';

export default function Comp_SpeisenAmHof() {
  return (
    <div style={{ marginTop: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        
        <div style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center', flex: '1', minWidth: '250px' }}>
          <h2>Öffnungszeiten</h2>
          <p>
            Montag - Freitag: 17:00 - 22:00 Uhr (warme Küche)
            <br />
            Samstag, Sonntag und Feiertag: 12:00 - 22:00 Uhr (warme Küche)
          </p>
          <h3>Kontakt</h3>
          <p>
            <a href="mailto:info@hof-und-gut.de" style={{ color: 'white' }}>E-Mail: info@hof-und-gut.de</a>
            <br />
            <a href="tel:04181 9199500" style={{ color: 'white' }}>Tel: 04181 9199500</a>
            <br />
            <a href="tel:0176 70671532" style={{ color: 'white' }}>Tel mobil: 0176 70671532</a>
          </p>
          <a href='https://cdn.shopify.com/s/files/1/0756/4568/2002/files/HuG_Karte-7_2.pdf?v=1740935225'>
            <button style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}>Aktuelle Speisekarte</button>
          </a>
          <p style={{ fontSize: 'small' }}>Falls "Jetzt reservieren" nicht erscheint, bitte neu laden</p>
        </div>
        
        <div style={{ flex: '2', minWidth: '250px' }}>
          <img src="Entrecôte.jpg" alt="Entrecôte" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        <div style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center', flex: '1', minWidth: '250px' }}>
          <h2>Anfahrt</h2>
          <iframe
            title='Navigiere zu Hof&Gut Jesteburg'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.221622002947!2d9.933264077093998!3d53.32138507659057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1bd89bb3a0267%3A0x23876e66af16eac5!2sHof%20%26%20Gut%20Jesteburg!5e0!3m2!1sen!2sde!4v1693483721231!5m2!1sen!2sde"
            width="100%" height="400px" allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
}

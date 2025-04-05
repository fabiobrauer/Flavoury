import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Main() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = (menuName) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
    setMenuOpen(true);
  };

  const handleMenuItemClick = () => {
    closeMenu();
  };

  return (
    <>
      <header className={`fixed ${menuOpen ? 'menu-open' : ''}`}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="image" />
            </Link>
            <button className={`navbar-toggler ${menuOpen ? 'open' : ''}`} type="button" onClick={toggleMenu}>
              <span className="navbar-toggler-icon">
                <span className={`toggle-wrap ${menuOpen ? "active" : ""}`}>
                  <span className="toggle-bar"></span>
                </span>
              </span>
            </button>
            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                
                {/* Home Dropdown */}
                <li className="nav-item has_dropdown">
                  <Link className="nav-link" to="#" onClick={() => toggleDropdown('home')}>Home</Link>
                  <div className={`sub_menu ${openDropdowns['home'] ? 'open' : ''}`}>
                    <ul>
                      <li><Link to="/" onClick={handleMenuItemClick}>Startseite</Link></li>
                      <li><Link to="/home2" onClick={handleMenuItemClick}>Home Slider Hero</Link></li>
                      <li><Link to="/home3" onClick={handleMenuItemClick}>Home Dish List</Link></li>
                    </ul>
                  </div>
                </li>

                {/* Restaurant & Unterkunft */}
                <li className="nav-item has_dropdown">
                  <Link className="nav-link" to="#" onClick={() => toggleDropdown('restaurant')}>Restaurant & Unterkunft</Link>
                  <div className={`sub_menu ${openDropdowns['restaurant'] ? 'open' : ''}`}>
                    <ul>
                      <li><Link to="/SpeisenAmHof" onClick={handleMenuItemClick}>Speisen am Hof</Link></li>
                      <li><Link to="/uebernachtenAmHof" onClick={handleMenuItemClick}>Übernachten am Hof</Link></li>
                      <li><Link to="/Stellenangebote" onClick={handleMenuItemClick}>Stellenangebote</Link></li>
                      <li><Link to="/Kontakt" onClick={handleMenuItemClick}>Kontakt & Anfahrt</Link></li>
                    </ul>
                  </div>
                </li>

                {/* Hof & Gut + Landwirtschaft */}
                <li className="nav-item has_dropdown">
                  <Link className="nav-link" to="#" onClick={() => toggleDropdown('hof')}>Hof & Gut & Landwirtschaft</Link>
                  <div className={`sub_menu ${openDropdowns['hof'] ? 'open' : ''}`}>
                    <ul>
                      <li><Link to="/Hofladen" onClick={handleMenuItemClick}>Hofladen</Link></li>
                      <li><Link to="/ÜberUns" onClick={handleMenuItemClick}>Über Uns</Link></li>
                      <li><Link to="/gebaeude" onClick={handleMenuItemClick}>Gebäude</Link></li>
                      <li><Link to="/oekologischeLandwirtschaft" onClick={handleMenuItemClick}>Ökologische Landwirtschaft</Link></li>
                      <li><Link to="/Links" onClick={handleMenuItemClick}>Partner & Links</Link></li>
                      <li><Link to="/Presse" onClick={handleMenuItemClick}>Presse</Link></li>
                      <li><Link to="/TeamtrainingUndFirmenevents" onClick={handleMenuItemClick}>Teamtraining & Firmenevents</Link></li>
                      <li><Link to="/VeranstaltungenKunstKultur" onClick={handleMenuItemClick}>Veranstaltung Kunst & Kultur</Link></li>
                    </ul>
                  </div>
                </li>

                {/* Reiten */}
                <li className="nav-item">
                  <Link className="nav-link" to="/Reiten" onClick={handleMenuItemClick}>Reiten</Link>
                </li>

                {/* Buchung */}
                <li className="nav-item">
                  <Link className="nav-link btn btn_primary" to="/Kontakt" onClick={handleMenuItemClick}>
                    Tisch Reservieren
                  </Link>
                </li>

              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Main;

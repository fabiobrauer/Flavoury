import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
/* import MenuImg from '../../assets/images/right_menu_table.png'; */

function Main() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    closeMenu();
    setIsDropdownOpen(!isDropdownOpen);
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
                  <Link className="nav-link" to="#" onClick={handleMenuItemClick}>Home</Link>
                  <div className={`sub_menu ${isDropdownOpen ? 'open' : ''}`}>
                    <ul>
                      <li><Link to="/">Startseite</Link></li>
                      <li><Link to="/home2">Home Slider Hero</Link></li>
                      <li><Link to="/home3">Home Dish List</Link></li>
                    </ul>
                  </div>
                </li>

                {/* Restaurant & Unterkunft */}
                <li className="nav-item has_dropdown">
                  <Link className="nav-link" to="#" onClick={handleMenuItemClick}>Restaurant & Unterkunft</Link>
                  <div className="sub_menu">
                    <ul>
                      <li><Link to="/SpeisenAmHof">Speisen am Hof</Link></li>
                      <li><Link to="/uebernachtenAmHof">Übernachten am Hof</Link></li>
                      <li><Link to="/Stellenangebote">Stellenangebote</Link></li>
                      <li><Link to="/Kontakt">Kontakt & Anfahrt</Link></li>
                    </ul>
                  </div>
                </li>

                {/* Hof & Gut + Landwirtschaft */}
                <li className="nav-item has_dropdown">
                  <Link className="nav-link" to="#" onClick={handleMenuItemClick}>Hof & Gut & Landwirtschaft</Link>
                  <div className="sub_menu">
                    <ul>
                      <li><Link to="/Hofladen">Hofladen</Link></li>
                      <li><Link to="/ÜberUns">Über Uns</Link></li>
                      <li><Link to="/gebaeude">Gebäude</Link></li>
                      <li><Link to="/oekologischeLandwirtschaft">Ökologische Landwirtschaft</Link></li>
                      <li><Link to="/Links">Partner & Links</Link></li>
                      <li><Link to="/Presse">Presse</Link></li>
                      <li><Link to="/TeamtrainingUndFirmenevents">Teamtraining & Firmenevents</Link></li>
                      <li><Link to="/VeranstaltungenKunstKultur">Veranstaltung Kunst & Kultur</Link></li>
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

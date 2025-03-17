import React, {useEffect} from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import PopularDish from '../MenHomeThree/PopularDish'
import Menulist from '../MenHomeTwo/Menulist'
import VideoTwo from '../MenHomeTwo/VideoTwo'
import MenuSection from '../MenHomeTwo/MenuSection'
import DiscountSection from '../MenHomeTwo/DiscountSection'
import WhoWe from '../MenHomeTwo/WhoWe'
import Testimonial from '../MenHomeTwo/Testimonial'
import OurTeam from '../MenHomeTwo/OurTeam'
import Reservation from '../MenHomeTwo/Reservation'
import Blog from '../MenHomeTwo/Blog'
import Aos from 'aos'
import { Helmet } from "react-helmet-async";

function Main() {
 
    useEffect(() => {
      Aos.init();
      Aos.refresh();
    }, []);

  return (
    <>        
    <Header />
      <div className='index_wraper'>
      <section class="banner_section">
    <div className="container mt-5">
      
      <Helmet>
        <title>Speisen am Hof</title>
        <link rel="canonical" href="/SpeisenAmHof" />
        <meta name="description" content="Süddeutsche Küche in Jesteburg, Restaurant Jesteburg" />
        <meta name="fragment" content="!" />
      </Helmet> 
      

      {/* Page Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Speisen am Hof</h2>
        <p className="lead">
          Genießen Sie unsere traditionelle & moderne Küche in unserem historischen Bauernhaus aus dem 16. Jahrhundert.
        </p>
      </div>

      {/* Main Content in Grid Layout */}
      <div className="row g-4">
        {/* Left Section */}
        <div className="col-md-6">
          <div className="shadow-sm p-3">
            <h4>Über unser Restaurant</h4>
            <p>
              Ein erfahrenes Küchenteam rund um Frank Schiffner kocht täglich für Sie – ob die beliebten Klassiker der Hofküche
              oder innovative Kreationen mit mediterranen und japanischen Einflüssen von Axel Henkel.
            </p>
          </div>
          <div className="shadow-sm p-3 mt-3">
            <h4>Reservierung</h4>
            <p>
              Bitte reservieren Sie rechtzeitig, besonders für Wochenenden oder Abendessen.
              Feiern für bis zu 75 Personen sind auf unserer Diele möglich.
            </p>
            <a href='https://cdn.shopify.com/s/files/1/0756/4568/2002/files/HuG_Karte-7_2.pdf?v=1740935225' /* download={'Speisekarte07.09.2023.pdf'} */ className="btn m-3">Aktuelle Speisekarte</a>                    
                    
                    <script
                    type="text/javascript" 
                    data-resmio-button="hof-gut-jesteburg" 
                    data-resmio-fontsize="14px" 
                    data-resmio-fontcolor="%23FFFFFF" 
                    data-resmio-buttontext="Jetzt%20reservieren" 
                    data-resmio-bordercolor="%23FFFFFF" 
                    data-resmio-borderwidth="0" 
                    data-resmio-buttoncolor="%23c41500" 
                    data-resmio-buttonshadow="true" 
                    data-resmio-widget-color="%23555555" 
                    data-resmio-widget-width="275" 
                    data-resmio-widget-height="400" 
                    data-resmio-widget-fontsize="14px" 
                    data-resmio-widget-facebooklogin="true" 
                    data-resmio-widget-backgroundcolor="%23ffffff" 
                    data-resmio-widget-commentsdisabled="false" 
                    data-resmio-widget-newslettersignup="true" 
                    data-resmio-widget-linkbackgroundcolor="%23c40e07"> 
                    </script >
                    <div>
                      <a href="//app.resmio.com/hof-gut-jesteburg/widget?from_button=true&amp;source=hof-und-gut-jesteburg.com&amp;comment=&amp;utm_source=button&amp;resourceGroup=&amp;resourceGroupName=&amp;source=&amp;date=&amp;height=400&amp;width=275&amp;fontSize=14px&amp;backgroundColor=%23ffffff&amp;color=%23555555&amp;linkBackgroundColor=%23c40e07&amp;facebookLogin=true&amp;newsletterSignup=true" class="btn m-3">          
                        <strong>Jetzt reservieren</strong>        
                      </a>
                    </div>
                 </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <div className="shadow-sm p-3">
            <h4>Büffetbeispiel ab 20 Personen</h4>
            <ul className="list-group">
              <li>Tomatensuppe mit Crème Fraîche</li>
              <li>Hof & Gut Anti-Pasti</li>
              <li>Rote Bete-Carpaccio</li>
              <li>Schweinefilet vom Bio-Schwein</li>
              <li>Crème Brulée mit Waldbeerenkompott</li>
            </ul>
          </div>
        </div>

        {/* Menü Section - Full Width */}
        <div className="col-12">
          <div className="shadow-sm p-3">
            <h4>Menübeispiele ab 20 Personen</h4>
            <div className="row">
              <div className="col-md-6">
                <h5>Menü 1</h5>
                <ul className="list-group">
                  <li>Karotten-Ingwer-Suppe</li>
                  <li>Zanderfilet auf Rahmsauerkraut</li>
                  <li>Schokoladenmousse mit Himbeer-Chilisauce</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Menü 2</h5>
                <ul className="list-group">
                  <li>Rote Bete–Carpaccio mit Trüffel-Limonendressing</li>
                  <li>Kalbsvoltini mit Balsamico-Linsengemüse</li>
                  <li>Käsebrett mit Weintrauben</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

        <PopularDish />
        <Menulist />
        <VideoTwo />
        <MenuSection />
        <DiscountSection />
        <WhoWe />
        <Testimonial />
        <OurTeam />
        <Reservation />
        <Blog />
        <Footer />
      </div>
    </>
  )
}

export default Main
import React, {useEffect} from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import PopularDish from '../MenHomeThree/PopularDish'
/* import Menulist from '../MenHomeTwo/Menulist'
import VideoTwo from '../MenHomeTwo/VideoTwo' */
import MenuSection from '../MenHomeTwo/MenuSection'
import DiscountSection from '../MenHomeTwo/DiscountSection'
import WhoWe from '../MenHomeTwo/WhoWe'
/* import Testimonial from '../MenHomeTwo/Testimonial' */
import OurTeam from '../MenHomeTwo/OurTeam'
import Reservation from '../MenHomeTwo/Reservation'
/* import Blog from '../MenHomeTwo/Blog' */
import Aos from 'aos'
import { Helmet } from "react-helmet-async";
import '../../assets/css/style.css';


function Main() {
 
    useEffect(() => {
      Aos.init();
      Aos.refresh();
    }, []);

  return (
    <>        
    <Header />
    <div className='index_wraper'>
      <Helmet>
        <title>Speisen am Hof</title>
        <link rel="canonical" href="/SpeisenAmHof" />
        <meta name="description" content="Süddeutsche Küche in Jesteburg, Restaurant Jesteburg" />
        <meta name="fragment" content="!" />
      </Helmet> 
        <PopularDish />

        <MenuSection />
        <DiscountSection />       
        <WhoWe />
        <OurTeam />
        <Reservation />
{/* Instagram embed maybe         <Blog /> */}
        {/*         <div className='testom'>
        <Testimonial />
        </div> */}
        <Footer />
      </div>
    </>
  )
}

export default Main
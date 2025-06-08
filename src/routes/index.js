import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Main';
import HomeTwo from '../components/HomeTwo/Main';
import HomeThree from '../components/HomeThree/Main';
import MenuList1 from '../components/MenuList1/Main';
import MenuList2 from '../components/MenuList2/Main';
import MenuList3 from '../components/MenuList3/Main';
import About from '../components/About/Main';
import Reserv1 from '../components/Reserv1/Main';
import Resrv2 from '../components/Resrv2/Main';
import Reviews from '../components/Reviews/Main';
import OurChef from '../components/OurChef/Main';
import Contact from '../components/Contact/Main';
import BlogList from '../components/BlogList/Main';
import BlogDetail from '../components/BlogDetail/Main';
import Gallery from '../components/Gallery/Main';
import Disclaimer from '../components/pages/Disclaimer';
import Gebaeude from '../components/pages/Gebäude';
import Hofladen from '../components/pages/Hofladen';
import Kontakt from '../components/pages/Kontakt';
import Links from '../components/pages/Links';
import Presse from '../components/pages/Presse';
import Reiten from '../components/pages/Reiten';
import SpeisenAmHof from '../components/pages/SpeisenAmHof';
import Stellenangebote from '../components/pages/Stellenangebote';
import VeranstaltungenKunstKultur from '../components/pages/VeranstaltungenKunstKultur';
import OekologischeLandwirtschaft from '../components/pages/ÖkologischeLandwirtschaft';
import UebernachtenAmHof from '../components/pages/ÜbernachtenAmHof';
import UeberUns from '../components/pages/ÜberUns';
import Header from '../../src/components/Header/Main'
import Footer from '../../src/components/Footer/Main'
import ScrollToTop from "../../src/components/ScrollTop/scrollTop";

function Index() {
  return (
    <>
          <Header/>
      <ScrollToTop />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<HomeTwo />} />
        <Route path="/home3" element={<HomeThree />} />
        <Route path="/menulist1" element={<MenuList1 />} />
        <Route path="/menulist2" element={<MenuList2 />} />
        <Route path="/menulist3" element={<MenuList3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation1" element={<Reserv1 />} />
        <Route path="/reservation2" element={<Resrv2 />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/ourchef" element={<OurChef />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/gebaeude" element={<Gebaeude />} />
        <Route path="/hofladen" element={<Hofladen />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/links" element={<Links />} />
        <Route path="/presse" element={<Presse />} />
        <Route path="/reiten" element={<Reiten />} />
        <Route path="/speisenamHof" element={<SpeisenAmHof />} />
        <Route path="/stellenangebote" element={<Stellenangebote />} />
        <Route path="/veranstaltungenkunstKultur" element={<VeranstaltungenKunstKultur />} />
        <Route path="/oekologischelandwirtschaft" element={<OekologischeLandwirtschaft />} />
        <Route path="/uebernachtenamhof" element={<UebernachtenAmHof />} />
        <Route path="/ueberuns" element={<UeberUns />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default Index;
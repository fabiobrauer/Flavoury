import React, { useEffect } from 'react'

import Banner from '../Menhome/Banner'
import Deliciousmenu from '../Menhome/Deliciousmenu'
import PrivateSection from '../Menhome/PrivateSection'
import Review from '../Menhome/Review'
import Blog from '../Menhome/Blog'
import WhoWe from '../Menhome/WhoWe'
import MenuList from '../Menhome/MenuList'
import Aos from 'aos'


function Main() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className='page_wrapper'>
      <Banner />
      <Deliciousmenu />
      <WhoWe />
{/*       <Review /> */}
      <PrivateSection />
      <Blog />
    </div>
  )
}


export default Main
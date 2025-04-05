import { Helmet } from "react-helmet-async";

import WhoWeZimmer from '../MenHomeTwo/WhoWeZimmer'
import '../../assets/css/style.css';

export default function UebernachtenAmHof() {
  return (
    <>
    <div className='index_wraper row_inner_am mt-3'>
      <Helmet>
        <title>Übernachten am Hof</title>
        <meta name="description" content="Übernachten bei Hof und Gut in Jesteburg" />
        <link rel="canonical" href="/ÜbernachtenAmHof" />
        <meta name="fragment" content="!" />
      </Helmet>
      <WhoWeZimmer/>
      </div>
        


    </>
  );
}

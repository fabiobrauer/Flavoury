import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // ✅ Import HelmetProvider
import Routing from './routes';
import '../src/assets/css/icofont.min.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/css/owl.carousel.min.css';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/aos.css';
import '../src/assets/css/style.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/lightbox.css';
import '../src/assets/css/slick.css';



function App() {
  return (
    <>
      <HelmetProvider>  {/* ✅ Hier den HelmetProvider hinzufügen */}
        <Router>
          <Routing />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;

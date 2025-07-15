import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import HeroSection from './components/HeroSection/HeroSection';
import Highlights from './components/Highlights/Highlights';
import PricingSection from './components/PricingSection/PricingSection';
import AmentitiesSection from './components/AmentitiesSection/AmentitiesSection';
import LocationSection from './components/LocationSection/LocationSection';
import FloorPlans from './components/FloorPlans/FloorPlans';
import GallerySection from './components/GallerySection/GallerySection';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Disclaimer from './components/Disclaimer/Disclaimer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/disclaimer" element={<Disclaimer />} />

        <Route
          path="/"
          element={
            <>
              <div className="text-3xl text-green-600 font-bold text-center mt-10">
                <HeroSection />
                <AboutSection />
                <Highlights />
                <PricingSection />
                <AmentitiesSection />
                <LocationSection />
                <FloorPlans />
                <GallerySection />
                {/* <ContactForm />
                <Footer /> */}
              </div>
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;

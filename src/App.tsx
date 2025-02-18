import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Family from './pages/Family'; 
import Maternity from './pages/Maternity';
import Corporate from './pages/Corporate';
import Headshot from './pages/Headshot';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/portfolio/family" element={<Family />} />
          <Route path="/portfolio/maternity" element={<Maternity />} />
          <Route path="/portfolio/headshot" element={<Headshot />} />
          <Route path="/portfolio/corporate" element={<Corporate />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;

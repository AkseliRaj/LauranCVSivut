import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NavigationMenu from './components/navigationMenu';
import About from './components/about';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Footer from './components/footer';
import GalleryItemPage from './components/galleryItemPage';
import './App.css';
import './css/pageTransition.css';


function AppRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (location.pathname !== displayLocation.pathname) {
      // If navigation came from menu, wait for menu close animation (300ms) before starting fade
      const menuDelay = window.isMenuNavigation ? 300 : 0;
      if (window.isMenuNavigation) {
        window.isMenuNavigation = false;
      }

      let fadeInTimer;
      const fadeOutTimer = setTimeout(() => {
        setTransitionStage('fadeOut');
        fadeInTimer = setTimeout(() => {
          setDisplayLocation(location);
          setTransitionStage('fadeIn');
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }, 300);
      }, menuDelay);

      return () => {
        clearTimeout(fadeOutTimer);
        if (fadeInTimer) {
          clearTimeout(fadeInTimer);
        }
      };
    }
  }, [location, displayLocation.pathname]);

  return (
    <div className={`page-transition ${transitionStage}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/:projectSlug" element={<GalleryItemPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationMenu />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

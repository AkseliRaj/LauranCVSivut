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
      // If navigation came from the NavigationMenu, skip the fade transition
      if (window.skipPageTransition) {
        window.skipPageTransition = false;
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
        return;
      }

      setTransitionStage('fadeOut');
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation.pathname]);

  return (
    <div className={`page-transition ${transitionStage}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/GalleryItemPage" element={<GalleryItemPage />} />
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

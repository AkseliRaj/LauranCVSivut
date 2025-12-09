import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavigationMenu from './components/navigationMenu';
import About from './components/about';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

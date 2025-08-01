import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Visit from './pages/Visit';
import Exhibitions from './pages/Exhibitions';
import Collection from './pages/Collection';
import Education from './pages/Education';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visitar" element={<Visit />} />
          <Route path="/exposicoes" element={<Exhibitions />} />
          <Route path="/colecao" element={<Collection />} />
          <Route path="/educacao" element={<Education />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/o-museu" element={<About />} />
          <Route path="/contactos" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
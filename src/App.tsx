import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-terroso dark:bg-preto-bahia transition-colors duration-300">
            <Header />
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cardapio" element={<Menu />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
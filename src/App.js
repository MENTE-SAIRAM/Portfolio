import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/Pages/Home';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Navbar from './components/Navbar';
import './App.css'
import Projects from './components/Projects';
function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects/>}/>
        </Routes>

        <Footer />
     
    </Router>
  );
}

export default App;

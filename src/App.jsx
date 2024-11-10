import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
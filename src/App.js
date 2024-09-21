



import React from 'react';
import './App.css';
import Body from './pages/Body';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
      <header className=" bg-blue-900 p-1 text-white font-mono">
      <nav className="bg-blue-900 text-white p-4 flex justify-between">
        <div
        > <a href="#/" > WFS</a></div>
        <ul className="flex space-x-6">
            {/* <li><a href="#home">Home</a></li> */}
            <li><a href="#about">About Us</a></li>
            {/* <li><a href="#services">Services</a></li>
            <li><a href="#accommodation">Accommodation</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#partners">Partners</a></li> */}
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      </header>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;

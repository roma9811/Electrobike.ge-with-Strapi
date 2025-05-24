import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HeaderComponent } from './Components/HeaderComponent';
import { MainComponent } from './Components/MainComponent';
import { MainComponentTwo } from './Components/MainComponentTwo'; 
import { MainComponentThree } from './Components/MainComponentThree'; 
import { FooterComponent } from './Components/FooterComponent';
import { EBikePage } from './Pages/E-BikePage/EbikePage';
import { Navbar } from './Components/NavbarComponent/Navbar';
import Loading from "./Assets/loading.gif";

function App() {
  const [loading, setLoading] = useState(true);
  const headerRef = useRef(null);         
  const customersRef = useRef(null);      
  const aboutRef = useRef(null);        
  const contactRef = useRef(null);      

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <img src={Loading} alt="Loading..." className="loading-gif" />
        <h2 className="blinking-text">Please wait...</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar
        scrollToSections={{
          HOME: headerRef,
          CUSTOMERS: customersRef,
          ABOUT: aboutRef,
          CONTACT: contactRef,
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div ref={headerRef}>
                <HeaderComponent />
              </div>
              <MainComponent />
              <div ref={aboutRef}>
                <MainComponentTwo />
              </div>
              <div ref={customersRef}>
                <MainComponentThree />
              </div>
              <div ref={contactRef}>
                <FooterComponent />
              </div>
            </>
          }
        />
        <Route path="/catalog" element={<EBikePage />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrencyConverter from "./pages/Converter";
import Nav from './components/Layout/Navbar';
import ExchangeRate from './pages/ExchangeRate'; 
import Currency from './pages/Currency'; 
import Footer from './components/Layout/Footer';
import './App.css';
import { ThemeProvider } from "./context/ThemeContext";


function App () {
  return (
   <>
   <ThemeProvider>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<CurrencyConverter />} />
        <Route path="/exchange-rate" element={<ExchangeRate />} />
        <Route path="/currency" element={<Currency />} />
      </Routes>
    </Router>
    <Footer />
   </ThemeProvider>
   </>
  );
};

export default App;

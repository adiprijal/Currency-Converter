import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrencyConverter from "./components/pages/Converter";
import Nav from './components/Layout/Navbar';
import ExchangeRate from './components/pages/ExchangeRate'; 
import Currency from './components/pages/Currency'; 
import './App.css';

function App () {
  return (
   <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<CurrencyConverter />} />
        <Route path="/exchange-rate" element={<ExchangeRate />} />
        <Route path="/currency" element={<Currency />} />
      </Routes>
    </Router>
    <footer>@ Adip Rijal. Rights Reserved.</footer>
   </>
  );
};

export default App;

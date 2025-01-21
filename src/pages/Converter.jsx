import React, { useState, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import PageTransition from '../components/shared/PageTransition.jsx';
import SectionTitle from '../components/shared/SectionTitle.jsx';
import "./Converter.css";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NPR");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [exchangedValue, setExchangedValue] = useState(0);


  

  const API_URL = "https://v6.exchangerate-api.com/v6/a72dcf2c1bef2c85a0cf648e/latest";

  // Fetch exchange rates on initial load and currency change
  useEffect(() => {
    fetch(`${API_URL}/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(Object.keys(data.conversion_rates));
        setExchangeRate(data.conversion_rates[toCurrency]);
      })
      .catch((error) => console.error("Error fetching exchange rates:", error));
  }, [fromCurrency, toCurrency]);

  // Calculate exchanged value instantly
  useEffect(() => {
    setExchangedValue((amount * exchangeRate).toFixed(2));
  }, [amount, exchangeRate]);

  // Swap function
  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <PageTransition>
    <div className="converter-container">
      <h1>Currency Converter</h1>
      <div className="input-section">
        <input
          
          type="number"
          value={amount}
          onChange={(e) => {
            const value = Math.max(0, e.target.value);
            setAmount(value);
          }}
          min={0}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <button className="swap-button" onClick={swapCurrencies}>
          <FaExchangeAlt />
        </button>
      </div>

      <div className="output-section">
        <div className="exchanged-box">{exchangedValue} {toCurrency}</div>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
    </PageTransition>
  );
};

export default CurrencyConverter;

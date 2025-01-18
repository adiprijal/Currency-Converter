import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Converter.css';
import { FaExchangeAlt } from 'react-icons/fa';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('NPR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => {
        setCurrencies(Object.keys(response.data.rates));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const convertCurrency = () => {
    axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => {
        const rate = response.data.rates[toCurrency];
        setConvertedAmount((amount * rate).toFixed(2));
      })
      .catch(error => console.error('Conversion error:', error));
  };

  // Function to swap currencies
  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="converter-container">
      <h1>Currency Converter</h1>
      <div className="input-section">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <span>to</span>
    
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <button className="swap-button" onClick={swapCurrencies}>
           <FaExchangeAlt />
        </button>
      <button onClick={convertCurrency}>Convert</button>
      {convertedAmount && (
        <h2>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</h2>
      )}
    </div>
  );
};

export default CurrencyConverter;

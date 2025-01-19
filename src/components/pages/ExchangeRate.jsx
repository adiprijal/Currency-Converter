import React, { useState, useEffect } from "react";

const ExchangeRate = () => {
  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);

  // Fetch the exchange rates and available currencies
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        setRates(data.rates);
        setCurrencies(Object.keys(data.rates)); // Get all available currencies
      });
  }, [fromCurrency]);

  useEffect(() => {
    if (rates[toCurrency]) {
      setExchangeRate(rates[toCurrency]);
    }
  }, [toCurrency, rates]);

  return (
    <div>
      <h2>Exchange Rate</h2>

      {/* From Currency Dropdown */}
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      {/* To Currency Dropdown */}
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <p>
        1 {fromCurrency} = {exchangeRate} {toCurrency}
      </p>
    </div>
  );
};

export default ExchangeRate;

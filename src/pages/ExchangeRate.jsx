import React, { useState, useEffect } from "react";
import styles from "./ExchangeRate.module.css";
import { useTheme } from "../context/ThemeContext";

const ExchangeRate = () => {
    const [rates, setRates] = useState({});
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("NPR");
    const [exchangeRate, setExchangeRate] = useState(null);
    const { isDarkMode } = useTheme();

    // Fetch exchange rates when fromCurrency changes
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then((response) => response.json())
            .then((data) => {
                setRates(data.rates);
                setCurrencies(Object.keys(data.rates));
            });
    }, [fromCurrency]);

    // Update exchange rate when toCurrency or rates change
    useEffect(() => {
        if (rates[toCurrency]) {
            setExchangeRate(rates[toCurrency]);
        }
    }, [toCurrency, rates]);

    // Swap function to switch fromCurrency and toCurrency
    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div className={`${styles.exchangeRate} ${isDarkMode ? styles["exchangeRate--dark"] : ""}`}>
            <h2>Exchange Rate</h2>
            <div className={styles.dropdownContainer}>
                <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className={styles.exchangeRate__dropdown}
                >
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
                <button className={styles.swapButton} onClick={handleSwap} aria-label="Swap Currencies">
                    ⇄
                </button>
                <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className={styles.exchangeRate__dropdown}
                >
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <p className={styles.exchangeRate__text}>
                1 {fromCurrency} = {exchangeRate} {toCurrency}
            </p>
        </div>
    );
};

export default ExchangeRate;

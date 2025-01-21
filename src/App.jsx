import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrencyConverter from "./pages/Converter";
import Nav from "./components/Layout/Navbar";
import ExchangeRate from "./pages/ExchangeRate";
import Currency from "./pages/Currency";
import Footer from "./components/Layout/Footer";
import styles from "./App.module.css";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const isDarkMode = false;

  return (
    <ThemeProvider>
      <Router>
        <Nav />
        <div
          className={`${styles.app} ${isDarkMode ? styles["app--dark"] : ""}`}
        >
          <main className={styles.app__main}>

          <Routes>
            
            <Route path="/" element={<CurrencyConverter />} />
            <Route path="/exchange-rate" element={<ExchangeRate />} />
            <Route path="/currency" element={<Currency />} />

          </Routes>

          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

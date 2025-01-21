import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import logo from "../../images/logo.svg";
import styles from "./Navbar.module.css";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Converter" },
    { path: "/currency", label: "Currency" },
    { path: "/exchange-rate", label: "Exchange Rate" },
  ];

  return (
    <nav className={`${styles.navbar} ${isDarkMode ? styles['navbar--dark'] : ""}`}>
      <div className={styles.navbar__container}>
        <Link to="/" className={styles.navbar__brand}>
          {/* <img src={logo} className="App-logo" alt="logo" style={{ width: "90px", height: "auto" }} /> */}
          HeraPheri
        </Link>

        {/* Desktop Navigation */}
        <div
          className={`${styles.navbar__nav} ${
            isOpen ? styles["navbar__nav--visible"] : ""
          }`}
        >
          {navItems.map((item) => (
            <Link to={item.path} key={item.path} className={`${styles.navbar__link} ${location.pathname === item.path ? isDarkMode? styles["navbar__link--active-dark"] : 
            styles['navbar__link--active'] : 
            isDarkMode? 
            styles['navbar__link--dark'] : ''}`}>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className={`${styles.navbar__underline} ${ isDarkMode ? styles["navbar__underline--dark"] : ""}`}
                />
              )}
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme} className={`${styles.navbar__themeButton} ${isDarkMode ? styles["navbar__themeButton--dark"] : ""}`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Button*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.navbar__menuButton}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Menu*/}
      {isOpen && (
        <motion.div 
          initial = {{opacity: 0, y: -20 }} 
          animate = {{ opacity: 1, y: 0 }}
          exit = {{ opacity: 0, y: -20 }}
          className={`${styles.navbar__mobileMenu} ${isDarkMode ? styles["navbar__mobileMenu--dark"] : ""}`}
        >

          {navItems.map((item) => (
            <Link 
              to={item.path} 
              key={item.path} 
              className={`${styles.navbar__mpbilelink} ${location.pathname === item.path 
                ? isDarkMode 
                  ? styles["navbar__mobilelink--active-dark"] :  styles['navbar__mobilelink--active'] 
                : isDarkMode
                  ? styles['navbar__mpbilelink--dark'] : ''}`}
                  onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          </motion.div>
      )}
      
  
{/* 
        <h1>HeraPheri</h1>
        <div className="nav-buttons">
          <Link to="/" className="nav-link">
            Converter
          </Link>
          <Link to="/currency" className="nav-link">
            Currency
          </Link>
          <Link to="/exchange-rate" className="nav-link">
            Exchange Rate
          </Link> */}

       
    </nav>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../images/logo.svg";
import DarkModeToggle from "./DarkModeToggle"; // Import DarkModeToggle
import "./Navbar.css";

const Nav = () => {
  return (
    <nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: "90px", height: "auto" }} />
        <h1>HeraPheri</h1>
        <div className="nav-buttons">
          <Link to="/" className="nav-link">Converter</Link>
          <Link to="/currency" className="nav-link">Currency</Link>
          <Link to="/exchange-rate" className="nav-link">Exchange Rate</Link>
        </div>
        <DarkModeToggle /> {/* Dark mode toggle button */}
      </header>
    </nav>
  );
};

export default Nav;

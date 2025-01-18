import React from "react";
import logo from '../../images/logo.svg';
import './Navbar.css';

const Nav = () => {
  return (
    <nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>Currency Converter</h1>
      </header>
    </nav>
  );
}

export default Nav;
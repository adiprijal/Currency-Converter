import React from "react";
import logo from '../logo2.svg';  

const Nav = () => {
  return (
    <nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Currency Converter</h1>
    </nav>
  );
}

export default Nav;
import React from "react";
import logo from '../../images/logo.svg';
import './Navbar.css';

const Nav = () => {
  return (
    <nav>
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" style={ { width: '90px' , height : 'auto'}} />
      <h1>HeraPheri</h1>



      </header>
    </nav>
  );
}

export default Nav;
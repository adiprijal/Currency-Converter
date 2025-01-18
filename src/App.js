import React from 'react';
import CurrencyConverter from './components/Converter';
import './App.css';
import Nav from './components/nav';


function App() {
  return (
   <>
      <div className="Nav">
         <nav>
            <Nav />
         </nav>
      </div>
     <div className="App">
         <CurrencyConverter />
      </div>
   </>
  );
}

export default App;

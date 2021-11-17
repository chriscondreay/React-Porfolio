import React from 'react';
import Header from './components/Header.js';
import Footer from "./components/Footer.js";
// import Nav from './components/Nav.js';
import PortfolioContainer from './components/PortfolioContainer.js';



const App = () => {
  return (
    <div>
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  )
}

export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationComponent from './navigation/NavigationComponent';
import BlurbComponent from './blurb/BlurbComponent';
import FooterComponent from './footer/FooterComponent';
import PortfolioComponent from './portfolio/PortfolioComponent';
import AboutComponent from './about/AboutComponent';
import ContactComponent from './contact/ContactComponent';

function App() {
  return (
    <div className="container">
      <NavigationComponent></NavigationComponent>

      <Router>
          <Route exact path="/" component={BlurbComponent}/>
          <Route exact path="/portfolio" component={PortfolioComponent}/>
          <Route exact path='/about' component={AboutComponent}/>
          <Route exact path="/contact" component={ContactComponent}/>
      </Router>

      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;

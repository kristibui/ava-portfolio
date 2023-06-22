import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationComponent from './navigation/NavigationComponent';
import BlurbComponent from './blurb/BlurbComponent';
import FooterComponent from './footer/FooterComponent';
import AboutComponent from './about/AboutComponent';
import ContactComponent from './contact/ContactComponent';
import ReadComponent from './read/ReadComponent';
import ListenComponent from './listen/ListenComponent';
import GraphicsComponent from './graphics/GraphicsComponent';

function App() {

  return (
    <div className="container">
      <NavigationComponent></NavigationComponent>

      <Router>
          <Route exact path="/" component={BlurbComponent}/>
          <Route exact path="/read" component={ReadComponent}/>
          <Route exact path="/listen" component={ListenComponent}/>
          <Route exact path='/about' component={AboutComponent}/>
          <Route exact path="/contact" component={ContactComponent}/>
          <Route exact path="/graphics" component={GraphicsComponent}/>
      </Router>
      
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;

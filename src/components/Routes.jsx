import React, { Component } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Header from './Header';

class Routes extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>);
  }
}

export default Routes;

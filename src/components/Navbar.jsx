import React, { Component } from 'react';
import '../css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="header__navbar">
        <a className="selected" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>);
  }
}

export default Navbar;

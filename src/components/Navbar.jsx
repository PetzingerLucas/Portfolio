import React, { Component } from 'react';
import '../css/Navbar.css';

class Navbar extends Component {
  componentDidMount() {
    this.changeHeader();
  }

  changeSelected =({ target }) => {
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    target.classList.add('selected');
  }

  changeHeader =() => {
    const myNav = document.querySelector('#header');
    window.onscroll = () => {
      const n = 180;
      if (myNav) {
        if (document.body.scrollTop >= n) {
          myNav.classList.add('nav-colored');
          myNav.classList.remove('nav-transparent');
        } else {
          myNav.classList.add('nav-transparent');
          myNav.classList.remove('nav-colored');
        }
      }
    };
  }

  render() {
    return (
      <div className="header__navbar">
        <a className="selected" onClick={ this.changeSelected } href="#home">Home</a>
        <a onClick={ this.changeSelected } href="#about">About</a>
        <a onClick={ this.changeSelected } href="#portfolio">Portfolio</a>
        <a onClick={ this.changeSelected } href="#contact">Contact</a>
      </div>);
  }
}

export default Navbar;

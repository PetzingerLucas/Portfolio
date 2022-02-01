import React, { Component } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Navbar from './Navbar';
import '../css/Header.css';
import '../css/Default.css';

class Header extends Component {
  componentDidMount() {
    this.changeHeader();
  }

  changeHeader =() => {
    const myNav = document.querySelector('#header');
    window.onscroll = () => {
      const n = 150;
      if (myNav) {
        if (document.documentElement.scrollTop >= n) {
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
      <header id="header" className="app__header nav-transparent">
        <Navbar />
        <ul className="header__social_links">
          <li>
            {' '}
            <a
              href="https://www.linkedin.com/in/lucas-petzinger/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />

            </a>
          </li>
          <li>
            {' '}
            <a
              href="https://github.com/PetzingerLucas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

          </li>
          <li>
            <a
              href="https://www.instagram.com/lucaspetzinger/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />

            </a>
          </li>
        </ul>

      </header>);
  }
}

export default Header;

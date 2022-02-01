/* eslint-disable sonarjs/no-duplicate-string */
import React, { Component } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Navbar from './Navbar';
import '../css/Header.css';
import '../css/Default.css';

class Header extends Component {
  componentDidMount() {
    this.changeHeader();
  }

  removeClass = () => {
    const nav = document.querySelector('.header__navbar');
    if (nav.childNodes) {
      nav.childNodes.forEach((link) => {
        link.classList.remove('selected');
      });
    }
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
      const n1 = 699;
      const n2 = 700;
      const n3 = 1400;
      const n4 = 1401;
      const n5 = 2100;
      if (
        document.documentElement
          .scrollTop >= 0 && document.documentElement.scrollTop <= n1) {
        this.removeClass();
        document.querySelector('.header__navbar').children[0].classList.add('selected');
      }

      if (
        document.documentElement
          .scrollTop >= n2 && document.documentElement.scrollTop <= n3) {
        this.removeClass();
        document.querySelector('.header__navbar').children[1].classList.add('selected');
      }

      if (
        document.documentElement
          .scrollTop >= n4 && document.documentElement.scrollTop <= n5) {
        this.removeClass();
        document.querySelector('.header__navbar').children[2].classList.add('selected');
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

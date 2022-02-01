/* eslint-disable import/order */
/* eslint-disable max-len */
import React, { Component } from 'react';
import AboutNav from '../components/AboutNav';
import logo from '../assets/images/sem-título.png';
import '../css/About.css';
import { FaAngleDoubleDown } from 'react-icons/fa';

class About extends Component {
  render() {
    return (
      <section className="section__about">
        <div id="about" className="about__page">

          <div className="img-container">
            <img src={ logo } alt="" />
          </div>
          <div className="skills-container">
            <h1 style={ { fontSize: '60px', color: '#fff' } }>About Me</h1>
            <p
              style={ { fontSize: '25px',
                fontWeight: '300',
                lineHeight: '30px',
                color: 'gray' } }
            >
              I am a Brazilian student of web development. I am 24 years old and always looking to learn and evolve!

            </p>
            <AboutNav />
          </div>
        </div>
        <div className="scrollDown2">
          <a href="#portfolio">
            <FaAngleDoubleDown />

          </a>
        </div>
      </section>);
  }
}

export default About;

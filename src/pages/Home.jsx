/* eslint-disable sonarjs/no-duplicate-string */
import React, { Component } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import '../css/Home.css';

const currentPharse = ['Front End Developer', 'Full Stack Development Student'];
class Home extends Component {
  constructor() {
    super();
    this.state = {
      change: true,
      index: 0,
    };
  }

setTitle = () => {
  this.setState((state) => ({
    change: true,
    index: (state.index + 1) % 2,

  }));
}

render() {
  const { change, index } = this.state;
  return (
    <div id="home" className="home__page home">
      <div>
        <span style={ { width: '100%' } }>WELCOME TO MY WORLD</span>
        <h1 style={ { width: '100%' } }>
          Hi, I’m Lucas Petzinger
        </h1>
        <h1
          onAnimationEnd={ () => {
            const ml = 250;
            this.setState({ change: false });
            setTimeout(() => { this.setTitle(); }, ml);
          } }
          className={ ` currentTitle1 ${change && 'currentTitle2'}` }
        >
          {currentPharse[index]}
        </h1>
        <h1
          style={ { width: '100%' } }
        >
          based in Brazil.

        </h1>
        <div className="scrollDown">
          <a href="#about">
            <FaAngleDoubleDown />

          </a>

        </div>
      </div>
    </div>);
}
}

export default Home;

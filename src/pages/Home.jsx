import React, { Component } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import '../css/Home.css';

class Home extends Component {
  constructor() {
    const DEFAULT_TITLE = 'Front End Developer';
    super();
    this.state = {
      currentTitle: DEFAULT_TITLE,
    };
  }

  componentDidMount() {
    const ANIMATION_TIME = 2500;
    setInterval(this.setTitle, ANIMATION_TIME);
  }

  componentDidUpdate() {
  }

setTitle = () => {
  const DEFAULT_TITLE = 'Front End Developer';
  const { currentTitle } = this.state;
  if (currentTitle === DEFAULT_TITLE) {
    this.setState({ currentTitle: 'Full Stack Development Student' });
  } if (currentTitle === 'Full Stack Development Student') {
    this.setState({ currentTitle: DEFAULT_TITLE });
  }
}

render() {
  const { currentTitle } = this.state;
  return (
    <div id="home" className="home__page home">
      <div>
        <span style={ { width: '100%' } }>WELCOME TO MY WORLD</span>
        <h1 style={ { width: '100%' } }>
          Hi, I’m Lucas Petzinger
        </h1>
        <h1 className="currentTitle">
          {currentTitle}
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

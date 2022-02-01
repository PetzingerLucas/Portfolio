import './css/Default.css';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

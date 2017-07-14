import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='overlay'></div>
        <div className='container'>
          <div className='heading'>
            <h1>#<span className='year'>365</span>-Designer-Challenge</h1>
            <h3>Design a <b>Logo</b> for an <b>Artest</b> !</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

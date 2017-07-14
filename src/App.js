import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typing from 'react-typing-animation'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='overlay'></div>
        <div className='container'>
          <div className='heading'>
            <h1>#<span className='year'>365</span>-Designer-Challenge</h1>
            <Typing>
              <h3>Get shit done everyday for a whole year...</h3>
            </Typing>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

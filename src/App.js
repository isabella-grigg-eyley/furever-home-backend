import React, { Component } from 'react';
import { connect } from 'react-redux'
import kitty from '../src/kitty.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FurEver Home</h1>
          <img src={kitty} className="App-logo" alt="logo" />

        </header>
        <p className="App-intro">
          Help a fluffy critter find theirs.
        </p>
      </div>
    );
  }
}

export default connect()(App);
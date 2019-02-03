import React, { Component } from 'react';
import LoginFormView from './views/LoginFormView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginFormView/>
      </div>
    );
  }
}

export default App;

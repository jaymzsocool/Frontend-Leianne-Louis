import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import LoginFormView from './views/LoginFormView';
import SignUpFormView from './views/SignUpFormView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to='/login'>Login</NavLink>
        <br />
        <NavLink to='signUp'>Sign Up</NavLink>

        <Route path='/login' component={LoginFormView} />
        <Route path='/signUp' component={SignUpFormView} />
      </div>
    );
  }
}

export default App;

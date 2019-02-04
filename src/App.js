import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import LoginFormView from './views/LoginFormView';
import SignUpFormView from './views/SignUpFormView';
import DonationListView from './views/DonationListView';
import DonationView from './views/DonationView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to='/login'>Login</NavLink>
        <br />
        <NavLink to='/signUp'>Sign Up</NavLink>
        <br />
        <NavLink to='/donations'>Donations</NavLink>

        <Route path='/login' component={LoginFormView} />
        <Route path='/signUp' component={SignUpFormView} />
        <Route exact path='/donations' component={DonationListView}/>
        <Route path='/donations/:id' component={DonationView}/>

      </div>
    );
  }
}

export default App;

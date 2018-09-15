import React, { Component } from 'react';
import Logo from '../src/components/Logo/Logo';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Pets from './components/Pets/Pets'
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Pets} />
        <Route path='/profile' component={Profile} />
        {/* <Route path='/matches' component={Matches} /> */}
        <Route path='/pets' component={Pets} />
        <Route path='/login' component={Login} />
      </div >
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Pets from './components/Pets/Pets'
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import NavigationBar from '../src/components/NavigationBar/NavigationBar';
import Matches from '../src/components/Matches/Matches';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Route path='/' component={Pets} />
        <Route path='/profile' component={Profile} />
        <Route path='/matches' component={Matches} />
        <Route path='/pets' component={Pets} />
        <Route path='/login' component={Login} />
      </div >
    );
  }
}

export default App;

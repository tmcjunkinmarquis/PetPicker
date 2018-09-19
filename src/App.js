import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Pets from './components/Pets/Pets';
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import NavigationBar from '../src/components/NavigationBar/NavigationBar';
import Matches from '../src/components/Matches/Matches';
import Welcome from './components/Welcome/Welcome';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Route exact path='/' component={Welcome} />
        <div className="container">
          <Route path='/profile' component={Profile} />
          <Route path='/matches' component={Matches} />
          <Route path='/pets' component={Pets} />
          <Route exact path='/login' component={Login} />
        </div>
      </div>
    );
  }
}

export default App;

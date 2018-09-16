import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

class NavigationBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <nav>
        <Logo />
        <NavLink to='/profile' className='nav'>Profile</NavLink>
        <NavLink to='/matches' className='nav'>Matches</NavLink>
        <NavLink to='/pets' className='nav'>Pets</NavLink>
        {/* <NavLink to='/signup' className='nav'>Sign Up</NavLink> */}
      </nav >
    );
  }
}

export default NavigationBar;
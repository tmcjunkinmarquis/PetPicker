import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';

class NavigationBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <nav>
        <Logo />

        {this.props.loggedIn &&
          <div>
            <NavLink to='/profile' className='nav'>Profile</NavLink>
            <NavLink to='/matches' className='nav'>Matches</NavLink>
            <NavLink to='/pets' className='nav'>Pets</NavLink>
            {/* <NavLink to='/logout' className='nav'>Log Out</NavLink> */}
          </div>}

      </nav >
    );
  }
}

export const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export const mapDispatchToProps = dispatch => ({
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
);
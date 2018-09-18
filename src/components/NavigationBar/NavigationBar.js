import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

class NavigationBar extends Component {
  constructor(props) {
    super();
  }

  handleLogOut = () => {
    this.props.resetStore();
    localStorage.clear();
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
            <NavLink exact to='/' className='nav' onClick={this.handleLogOut}>Logout</NavLink>
          </div>}

      </nav >
    );
  }
}

NavigationBar.propTypes = {
  loggedIn: PropTypes.bool,
  resetStore: PropTypes.func
};

export const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export const mapDispatchToProps = dispatch => ({
  resetStore: () => dispatch(actions.resetStore())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
);


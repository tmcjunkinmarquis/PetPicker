import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { toggleLogin, loadProfile } from '../../actions';
import { fetchFavoriteData } from '../../utils/fetchFavoriteData';
import './Header.css';
import Logo from './components/Logo/Logo';

export const Header = props => {
  const handleClickProfile = () => {
    console.log('handleClickProfile');
  };

  const showDefaultState = (
    <div className="userControls">
      <NavLink className="navLink" to="/login">
        <button className="loginButton"></button>
      </NavLink>
      <NavLink className="navLink" to="/signup">
        <button className="signUpButton"></button>
      </NavLink>
    </div>
  );

  const showLoggedInState = (
    <div className="userControls">
      <NavLink to='/Profile'>
        <button className="ProfileButton" onClick={handleClickProfile}></button>
      </NavLink>
      <NavLink to="/">
        <button className="logOutButton" onClick={props.toggleLogin}></button>
      </NavLink>
      <p>Welcome back, {props.name}</p>
    </div>
  );

  return (
    <header>
      <NavLink to="/">
        <Logo />
      </NavLink>
      {props.loggedIn ? showLoggedInState : showDefaultState}
    </header>
  );
};

export const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  name: state.user.name,
  userId: state.user.id
});

export const mapDispatchToProps = dispatch => ({
  toggleLogin: () => dispatch(toggleLogin()),
  loadProfile: ProfileArray => dispatch(loadProfile(ProfileArray))
});

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string,
  userId: PropTypes.number,
  toggleLogin: PropTypes.func.isRequired,
  loadProfile: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export class NavigationBar extends Component {
  constructor(props) {
    super();
  }

  handleLogOut = () => {
    this.props.resetStore();
    localStorage.clear();
  }

  render() {
    return (
      <div className="navbar-fixed ">
        <nav>
          <div className="container">
            <div className="Nav-wrapper red lighten-1">
              <h3 className="left nav-title-pp">Pet Picker</h3>
              {this.props.loggedIn &&
              <ul className="right">
                <li><NavLink to='/profile' className='nav'>Profile</NavLink></li>
                <li><NavLink to='/matches' className='nav'>Matches</NavLink></li>
                <li><NavLink to='/pets' className='nav'>Pets</NavLink></li>
                <li><NavLink exact to='/' className='nav' onClick={this.handleLogOut}>Logout</NavLink></li>
              </ul>}
            </div>
          </div>
        </nav >
      </div>
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

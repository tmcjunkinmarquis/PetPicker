import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export class MobileNav extends Component {
  constructor(props) {
    super();
    this.sideNav = React.createRef();
  }

  handleLogOut = () => {
    this.props.resetStore();
    localStorage.clear();
  }
  componentDidMount = () => {
    const M = window.M;
    console.log(M);
    console.log(this.sideNav.current);
    M.Sidenav.init(this.sideNav.current, {});
  }

  render() {
    return (
      <div>
      {this.props.loggedIn &&
        <ul className="sidnav" id="mobile-nav">
          <li><NavLink to='/profile' className='nav'>Profile</NavLink></li>
          <li><NavLink to='/matches' className='nav'>Matches</NavLink></li>
          <li><NavLink to='/pets' className='nav'>Pets</NavLink></li>
          <li><NavLink exact to='/' className='nav' onClick={this.handleLogOut}>Logout</NavLink></li>
        </ul>}
      </div>
    );
  }
}

MobileNav.propTypes = {
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
  connect(mapStateToProps, mapDispatchToProps)(MobileNav)
);

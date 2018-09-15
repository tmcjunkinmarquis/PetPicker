import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLoggedIn, storeUser } from '../../actions';
import './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    // const userData = await fetchUserData();
    // const foundUser = userData.data.find(
    //   user => user.username === this.state.username.toLowerCase()
    // );

    if (this.state.username === "") {
      alert('Please enter a username');
      // } else if (!foundUser) {
      //   alert('No such user');
      // } else if (foundUser.password === this.state.password) {
    } else if (this.state.password === "") {
      alert('Please enter a password');
    }
    else {
      this.props.toggleLoggedIn();
      this.props.storeUser(this.state.username);
      this.props.history.push('/');
      // } else {
      //   alert('Incorrect Password');
    }
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            className="inputField"
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            className="inputField"
          />
          <button className="loginButton" />
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
  toggleLoggedIn: () => dispatch(toggleLoggedIn()),
  storeUser: user => dispatch(storeUser(user)),
});

Login.propTypes = {
  // toggleLoggedIn: PropTypes.bool.isRequired,
  // storeUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

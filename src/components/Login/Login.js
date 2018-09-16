import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLoggedIn, storeUser } from '../../actions';
import './Login.css';
import { fetchUserData, fetchSignIn } from '../../api_calls/api-calls';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      newUsername: '',
      newUserPassword: '',
      status: '',
      description: '',
      pic: ''
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

    if (this.state.username === "") {
      alert('Please enter a username');
    } else if (this.state.password === "") {
      alert('Please enter a password');
    }
    else {
      const userData = await fetchUserData(this.state.username, this.state.password);
      console.log(userData)
      this.props.toggleLoggedIn();
      this.props.storeUser(userData);
      // this.props.history.push('/Pets');

      // } else {
      //   alert('Incorrect Password');
    }
  };

  handleSignUpSubmit = async (event) => {
    event.preventDefault();
    if (this.state.username === "") {
      alert('Please enter a username');
    } else if (this.state.password === "") {
      alert('Please enter a password');
    } else if (this.state.description === "") {
      alert('Please enter a description');
    } else if (this.state.url === "") {
      alert('Please enter a url path to an image');
    } else {
      const newUserData = await fetchSignIn(
        this.state.username,
        this.state.password,
        this.state.description,
        this.state.pic
      );
      this.props.toggleLoggedIn();
      this.props.storeUser(newUserData);
    }


  }

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
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
          <button
            name="submit"
            type="submit"
            className="loginButton"
          >Login</button>
        </form>

        <hr />

        <form onSubmit={this.handleSignUpSubmit}>
          <input
            type="text"
            placeholder="Choose Username"
            name="newUsername"
            value={this.state.newUsername}
            onChange={this.handleChange}
            className="inputField"
          />
          <input
            type="password"
            placeholder="Choose Password"
            name="newUserPassword"
            value={this.state.newPassword}
            onChange={this.handleChange}
            className="inputField"
          />
          <fieldset>
            <legend>Choose One</legend>
            <ul>
              <li>
                <label htmlFor="owner">
                  Owner:
                  <input type="radio" id="owner" name="status" value="Owner" onChange={this.handleChange} />
                </label>
              </li>
              <li>
                <label htmlFor="adopter">
                  Adopter:
                  <input type="radio" id="adopter" name="status" value="Adopter" onChange={this.handleChange} />
                </label>
              </li>
            </ul>
          </fieldset>
          <input
            placeholder="Enter Description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            className="inputField"
          />
          <input
            type="url"
            placeholder="Enter URL to image"
            name="pic"
            value={this.state.pic}
            onChange={this.handleChange}
            className="inputField"
          />
          <button
            name="submit"
            type="submit"
            className="signinButton"
          >Sign In</button>
        </form>

      </div>
    );
  }
}

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
  toggleLoggedIn: () => dispatch(toggleLoggedIn()),
  storeUser: user => dispatch(storeUser(user))
});

Login.propTypes = {
  toggleLoggedIn: PropTypes.func.isRequired,
  storeUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

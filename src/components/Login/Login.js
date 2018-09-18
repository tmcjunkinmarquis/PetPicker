import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.css';
import { fetchUserData, fetchSignUp, fetchMatches } from '../../api_calls/api-calls';
import { toggleLoggedIn, storeUser, storeMatches } from '../../actions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      newUsername: '',
      newPassword: '',
      role: '',
      description: '',
      pic: ''
    };
  }

  getMatches = async () => {
    const matches = await fetchMatches(this.props.userId);
    this.props.storeMatches(matches);
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
    } else {
      const userData = await fetchUserData(this.state.username, this.state.password);
      this.props.toggleLoggedIn();
      this.props.storeUser(userData);
      this.getMatches();
      this.props.history.push('/pets');

      // } else {
      //   alert('Incorrect Password');
    }
  };

  handleSignUpSubmit = async (event) => {
    event.preventDefault();
    if (this.state.newUsername === "") {
      alert('Please enter a username');
    } else if (this.state.newUserPassword === "") {
      alert('Please enter a password');
    } else if (this.state.role === "") {
      alert('Please enter a role');
    } else if (this.state.description === "") {
      alert('Please enter a description');
    } else if (this.state.url === "") {
      alert('Please enter a url path to an image');
    } else {
      const newUserData = await fetchSignUp(
        this.state.newUsername,
        this.state.newPassword,
        this.state.role,
        this.state.description,
        this.state.pic
      );

      this.props.toggleLoggedIn();
      this.props.storeUser(newUserData);
      this.props.history.push('/Pets');
    }
  }

  render() {
    return (
      <div className="login-signup-wrapper row">
      <div className="col s12 m6">
        <section className="login card">
          <h3 className="left">Login</h3>
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
              className="loginButton btn red lighten-1"
            >Login</button>
          </form>
        </section>
        </div>
        <div className="col s12 m6">
        <section className="sign-up card">
          <h3 className="left">Sign Up</h3>
          <form
            className="sign-up-form"
            onSubmit={this.handleSignUpSubmit}>
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
              name="newPassword"
              value={this.state.newPassword}
              onChange={this.handleChange}
              className="inputField"
            />
            <fieldset className="left">

                <label htmlFor="owner" className="owner-radio">
                  <input className="right" type="radio" id="owner" name="role" value="Owner" onChange={this.handleChange} />
                  <span>Owner</span>
                </label>


                <label htmlFor="adopter">
                  <input className="right" type="radio" id="adopter" name="role" value="Adopter" onChange={this.handleChange}/>
                  <span>Adopter </span>
                </label>


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
              className="signinButton btn red lighten-1"
            >Sign In</button>
          </form>
        </section>
        </div>
      </div >
    );
  }
}

export const mapStateToProps = state => ({
  userId: state.user.id
});

export const mapDispatchToProps = dispatch => ({
  toggleLoggedIn: () => dispatch(toggleLoggedIn()),
  storeUser: user => dispatch(storeUser(user)),
  storeMatches: matchesArray => dispatch(storeMatches(matchesArray))
});

Login.propTypes = {
  toggleLoggedIn: PropTypes.func.isRequired,
  storeUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  storeMatches: PropTypes.func.isRequired,
  userId: PropTypes.number
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

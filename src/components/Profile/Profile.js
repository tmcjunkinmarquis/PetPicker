import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      status: '',
      username: '',
      password: '',
      petName: '',
      petImageUrl: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <p> <button type="submit">Delete Account</button> </p>
        <section>

          <fieldset>
            <legend>Profile</legend>
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
          <p>
            <label htmlFor="name">
              <span>Name: </span>
            </label>
            <input type="text" id="name" name="username" onChange={this.handleChange} placeholder="username" />
          </p>
          <p>
            <label htmlFor="pwd">
              <span>Password: </span>
            </label>
            <input type="password" id="pwd" name="password" onChange={this.handleChange} placeholder="password" />
          </p>
          <p>
            <label htmlFor="pet-name">
              <span>Pet Name: </span>
            </label>
            <input type="pet-name" id="pet-name" name="petName" onChange={this.handleChange} placeholder="pet name" />
          </p>
          <p>
            <label htmlFor="pet-image-url">
              <span>Pet Image URL: </span>
            </label>
            <input type="pet-image-url" id="pet-image-url" name="petImageUrl" onChange={this.handleChange} placeholder="URL for pet picture" />
          </p>
        </section>
        <p> <button type="submit">Save Changes</button> </p>
      </form >

    );
  }

}

export const mapDispatchToProps = (dispatch) => ({
  // storeUserId: (userId) => dispatch(setUserId(userId)),
  // addFavorites: (favoriteMovies) => dispatch(addStoredFavorites(favoriteMovies))
});

export const mapStateToProps = (state) => ({
  // userId: state.userId
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
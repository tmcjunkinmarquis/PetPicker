import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDeleteAccount } from "../../api_calls/api-calls";
import PropTypes from "prop-types";

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      status: "",
      username: "",
      password: "",
      petName: "",
      petImageUrl: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount = () => {
    if (!this.props.loggedIn) {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <div className="card profile-card grey lighten-5">
        <form className="container">
          <section>
            <fieldset>
              <h5 className="left">Edit {this.props.user}</h5>
            </fieldset>
            <p>
              <label htmlFor="name" className="left">
                <span>Name: </span>
              </label>
              <input
                type="text"
                id="name"
                name="username"
                onChange={this.handleChange}
                placeholder={this.props.user}
              />
            </p>
            <p>
              <label htmlFor="description" className="left">
                <span>Description: </span>
              </label>
              <input
                type="text"
                id="description"
                name="username"
                onChange={this.handleChange}
                placeholder={this.props.description}
              />
            </p>

            <fieldset className="left">
              <label htmlFor="owner" className="owner-radio">
                <input
                  className="right"
                  type="radio"
                  id="owner"
                  name="role"
                  value="Owner"
                  onChange={this.handleChange}
                />
                <span>Owner</span>
              </label>

              <label htmlFor="adopter">
                <input
                  className="right"
                  type="radio"
                  id="adopter"
                  name="role"
                  value="Adopter"
                  onChange={this.handleChange}
                />
                <span>Adopter </span>
              </label>
              <br />
            </fieldset>
            <p>
              <label htmlFor="pet-name">
                <span>Pet Name: </span>
              </label>
              <input
                type="pet-name"
                id="pet-name"
                name="petName"
                onChange={this.handleChange}
                placeholder="pet name"
              />
            </p>
            <p>
              <label htmlFor="pet-image-url">
                <span>Pet Image URL: </span>
              </label>
              <input
                type="pet-image-url"
                id="pet-image-url"
                name="petImageUrl"
                onChange={this.handleChange}
                placeholder="URL for pet picture"
              />
            </p>
          </section>
          <p>
            <button className="btn-large red lighten-1" type="submit">
              Save Changes
            </button>
          </p>
        </form>

        <p>
          <button
            className="btn-small red darken-4"
            type="submit"
            onClick={fetchDeleteAccount}
          >
            Delete Account
          </button>
        </p>
      </div>
    );
  }
}

Profile.propTypes = {
  loggedIn: PropTypes.bool,
  history: PropTypes.object,
  user: PropTypes.string,
  description: PropTypes.string
};

export const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  user: state.user.name,
  description: state.user.description
});

export default connect(mapStateToProps)(Profile);

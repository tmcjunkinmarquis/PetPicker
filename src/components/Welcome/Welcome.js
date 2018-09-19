import React, { Component } from "react";
import { connect } from "react-redux";
import HaveWantPetButton from "../HaveWantPetButton/HaveWantPetButton";
import { fetchWelcomePet } from "../../api_calls/api-calls";
import PetImage from "../PetImage/PetImage";
import PropTypes from "prop-types";
import "./Welcome.css";
import { withRouter } from "react-router-dom";

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {},
      loggedIn: false
    };
  }

  loadWelcomePet = async () => {
    const pet = await fetchWelcomePet();
    this.setState({ pet });
  };

  makePet = pet => {
    return <PetImage pet={pet} />;
  };

  async componentDidMount() {
    if (this.props.loggedIn) {
      this.props.history.push("/pets");
    } else {
      await this.loadWelcomePet();
    }
  }

  render() {
    return (
      <div className="welcome valign-wrapper">
        <div className="nope-or-like">
          <HaveWantPetButton />
        </div>
      </div>
    );
  }
}

Welcome.propTypes = {
  loggedIn: PropTypes.bool,
  history: PropTypes.object,
  user: PropTypes.string,
  description: PropTypes.string
};

export const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default withRouter(connect(mapStateToProps)(Welcome));

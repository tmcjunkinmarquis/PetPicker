import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LikeButton.css';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { fetchLikePostPet } from '../../api_calls/api-calls';

export class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLikeClick = async () => {
    if (this.props.petsArray.length) {
      await fetchLikePostPet(this.props.userId, this.props.petsArray[0].id);
      this.props.updatePets();
    }
  };

  render() {
    return (
      <button
        className="waves-effect waves-light btn-large red lighten-1 nope-like-btn"
        onClick={this.handleLikeClick}
      >
        Like
      </button>
    );
  }
}

export const mapStateToProps = state => ({
  petsArray: state.pets.petsArray,
  userId: state.user.id
});

export const mapDispatchToProps = dispatch => ({
  storeAllPets: petsArray => dispatch(actions.petsArray(petsArray)),
  updatePets: () => dispatch(actions.updatePets())
});

LikeButton.propTypes = {
  petsArray: PropTypes.array,
  userId: PropTypes.number,
  storeAllPets: PropTypes.func,
  updatePets: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);

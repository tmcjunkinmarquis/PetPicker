import React from 'react';
import { connect } from 'react-redux';
import './LikeButton.css';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { fetchLikePostPet } from '../../api_calls/api-calls';

export const LikeButton = (props) => {
  const handleLikeClick = async () => {
    await fetchLikePostPet(props.userId, props.petsArray[0].id);
    props.updatePets();
  };

  return (
    <button
      className="button-xlarge pure-button"
      onClick={handleLikeClick}
    >Like</button>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
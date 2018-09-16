import React from 'react';
import { connect } from 'react-redux';
import './NopeButton.css';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { fetchDeletePet } from '../../api_calls/api-calls';

export const NopeButton = (props) => {
  const handleNopeClick = async () => {
    await fetchDeletePet(props.userId, props.petsArray[0].id);
    props.updatePets();

  }

  return (
    <button
      className="button-xlarge pure-button"
      onClick={handleNopeClick}
    >Nope
    </button>
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

NopeButton.propTypes = {
  petsArray: PropTypes.array,
  userId: PropTypes.number,
  storeAllPets: PropTypes.func,
  updatePets: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NopeButton);

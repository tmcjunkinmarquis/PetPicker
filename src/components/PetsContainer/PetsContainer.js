import React from 'react';
import PetImage from '../PetImage/PetImage';
import PropTypes from 'prop-types';

const PetsContainer = ({ petsArray, loggedIn }) => {

  const makePets = (petsArray) => {
    if (petsArray.length) {
      let petZero = petsArray[0];
      if (!loggedIn) {
        return (
          <PetImage pet={petZero} />
        );
      }
    }
  };

  return (
    <div className="pets-container">
      {makePets(petsArray)}
    </div>
  );
};

PetsContainer.propTypes = {
  petsArray: PropTypes.array,
  loggedIn: PropTypes.bool
};

export default PetsContainer;
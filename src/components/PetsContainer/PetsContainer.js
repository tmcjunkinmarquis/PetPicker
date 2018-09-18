import React from 'react';
// import './PetsContainer.css'
import PetImage from '../PetImage/PetImage';

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

export default PetsContainer;
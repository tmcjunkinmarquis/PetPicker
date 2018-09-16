import React, { Component } from 'react';
// import './PetsContainer.css'
import PetImage from '../PetImage/PetImage';

const PetsContainer = ({ petsArray, loggedIn }) => {

  const makeAllPets = (petsArray) => {
    return petsArray.map((pet, idx) => {
      // console.log('make all pets')
      if (idx === 0) {
        return (
          <PetImage
            key={idx}
            pet={pet}
            display={'show'}
          />
        );
      } else {
        return (
          <PetImage
            key={idx}
            pet={pet}
            display={'hidden'}
          />
        );
      }
    });
  };

  const makePets = (petsArray) => {
    if (petsArray.length) {
      let petZero = petsArray[0];
      if (!loggedIn) {
        return (
          <PetImage pet={petZero} />
        );
      }
      // else {
      //   return (
      //     makeAllPets(petsArray)
      //   );
      // }
    }
  };

  return (
    <div className="pets-container">
      {makePets(petsArray)}
    </div>
  );
};

export default PetsContainer;
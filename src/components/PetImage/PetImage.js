import React from 'react';
import './PetImage.css';
import PropTypes from 'prop-types';

const PetImage = (props) => {

  const petUrl = props.pet.pic;
  return (
    <div >
      <img className="responsive-img"
        src={petUrl}
        alt=''
      ></img>
    </div>
  );
};

export default PetImage;

PetImage.propTypes = {
  name: PropTypes.string,
<<<<<<< HEAD
  pic: PropTypes.string,
  display: PropTypes.string,
  pet: PropTypes.object
};
=======
  pic: PropTypes.string
};
>>>>>>> welcome page, petpicking pages, styled

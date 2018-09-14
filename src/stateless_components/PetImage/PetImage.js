import React, { Component } from 'react';
import './PetImage.css';
import PropTypes from 'prop-types';

const PetImage = (props) => {

  const petUrl = props.pet.pic;
  return (
    <img src={petUrl}></img>
  );
};

export default PetImage;

PetImage.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string
};
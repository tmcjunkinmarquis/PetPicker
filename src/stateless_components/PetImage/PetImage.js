import React, { Component } from 'react';
import './PetImage.css'

const PetImage = (props) => {

  const petUrl = props.pet.pic;
  return (
    <img src={petUrl}></img>
  )
}

export default PetImage;
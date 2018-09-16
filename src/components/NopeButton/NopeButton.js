import React, { Component } from 'react';
import './NopeButton.css';
import PropTypes from 'prop-types'

const NopeButton = (props) => {

  return(
    
    <button 
      className="button-xlarge pure-button"
      onClick={props.handleNopeClick}
    >Nope
    </button>
  
  );
};

export default NopeButton;

NopeButton.propTypes = {
  handleNopeClick: PropTypes.func
};
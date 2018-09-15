import React, { Component } from 'react';
import './NopeButton.css';

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
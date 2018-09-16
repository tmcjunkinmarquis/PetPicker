import React from 'react';
import './LikeButton.css';
import PropTypes from 'prop-types';

const LikeButton = (props) => {


  return (

    <button className="button-xlarge pure-button">Like</button>


  )
}

export default LikeButton;

LikeButton.propTypes = {
  handleLikeButton: PropTypes.func
};
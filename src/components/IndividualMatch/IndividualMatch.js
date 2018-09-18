import React from 'react';
import './IndividualMatch.css';
import PropTypes from 'prop-types';


const IndividualMatch = ({ match }) => {
  return (
    <li className='collection-item'>
      <img
        className="circle avatar-pic left"
        src={match.pic} alt=""
      />
      <span className="title left pet-title">{match.name}</span> <br />
      <p className="left-align">{match.description}</p>
    </li>
  );
};

IndividualMatch.propTypes = {
  match: PropTypes.object
};

export default IndividualMatch;

import React from 'react';
import './IndividualMatch.css';
import PropTypes from 'prop-types';


const IndividualMatch= ({match}) => {

  if(match.name){
    return (
      <div className='individual-match'>
        <img 
          className="picture"
          src={match.pic} alt=""/>
        <p>{match.name}</p>
        <p>{match.description}</p>
      </div>
    );
  }
};

export default IndividualMatch;

IndividualMatch.propTypes = {
  match: PropTypes.object
};
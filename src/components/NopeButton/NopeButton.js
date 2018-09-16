import React from 'react';
import { connect } from 'react-redux';
import './NopeButton.css';
import PropTypes from 'prop-types';


export const NopeButton = (props) => {

  const handleNopeClick = () => {
    console.log('howdy');
    // fetchDeletePet(userId, pet_id)
  }

  return (

    <button
      className="button-xlarge pure-button"
      onClick={handleNopeClick}
    >Nope
    </button>

  );
};

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
});

NopeButton.propTypes = {
  handleNopeClick: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NopeButton);

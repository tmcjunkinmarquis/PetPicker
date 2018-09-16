import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './HaveWantPetButton.css';

const HaveWantPetButton = () => {

  return (
    <NavLink
      to='/login'
      className="button-xlarge pure-button">Have Pet / Want Pet
    </NavLink>
  );
};

export default withRouter(HaveWantPetButton);
import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './HaveWantPetButton.css';

const HaveWantPetButton = () => {

  return (
    <NavLink
      to='/login'
      className="waves-effect waves-light btn-large red lighten-1"> Login / Logout
    </NavLink>
  );
};

export default withRouter(HaveWantPetButton);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NopeButton.css';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { fetchDeletePet } from '../../api_calls/api-calls';

export class NopeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleNopeClick = async () => {
    if (this.props.petsArray.length) {
      await fetchDeletePet(this.props.userId, this.props.petsArray[0].id);
      this.props.updatePets();
    }
  };


  render() {
    return (
      <button
        className="waves-effect waves-light btn-large red lighten-1 nope-like-btn hoverable"
        onClick={this.handleNopeClick}
      >
        Nope
      </button>
    );
  }
}


export const mapStateToProps = state => ({
  petsArray: state.pets.petsArray,
  userId: state.user.id
});

export const mapDispatchToProps = dispatch => ({
  storeAllPets: petsArray => dispatch(actions.petsArray(petsArray)),
  updatePets: () => dispatch(actions.updatePets())
});

NopeButton.propTypes = {
  petsArray: PropTypes.array,
  userId: PropTypes.number,
  storeAllPets: PropTypes.func,
  updatePets: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NopeButton);

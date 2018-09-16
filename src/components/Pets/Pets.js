import React, { Component } from 'react';
import { connect } from 'react-redux';
import NopeButton from '../NopeButton/NopeButton';
import LikeButton from '../LikeButton/LikeButton';
import { fetchPets, fetchDeletePet, fetchLikePostPet } from '../../api_calls/api-calls';
import PetsContainer from '../PetsContainer/PetsContainer';
import PetDescription from '../PetDescription/PetDescription';
import './Pets.css';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export class Pets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petsArray: [],
      loggedIn: true
    };
  }

  handleLikeClick = () => {
    console.log('howdy like');
    // fetchLikePostPet(userId, pet_id)
  }

  loadAllPets = async () => {
    const petsArray = await fetchPets(this.props.userId);
    this.props.storeAllPets(petsArray)
  }

  async componentDidMount() {
    if (this.props.loggedIn) {
      await this.loadAllPets();
    } else {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <h1>Pets to Pet Picker!</h1>

        {this.props.petsArray.length &&
          <img src={this.props.petsArray[0].pic} alt="pic" />}

        <div className="nope-or-like">
          <NopeButton />
        </div>
        <PetDescription />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  userId: state.user.id,
  petsArray: state.pets.petsArray
});

export const mapDispatchToProps = dispatch => ({
  storeAllPets: petsArray => dispatch(actions.petsArray(petsArray)),
  storeIndivPet: indivPetObj => dispatch(actions.indivPet(indivPetObj)),
});

Pets.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userId: PropTypes.number,
  history: PropTypes.object.isRequired,
  petsArray: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Pets);

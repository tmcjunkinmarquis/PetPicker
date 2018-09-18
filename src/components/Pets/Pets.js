import React, { Component } from 'react';
import { connect } from 'react-redux';
import NopeButton from '../NopeButton/NopeButton';
import LikeButton from '../LikeButton/LikeButton';
import { fetchPets } from '../../api_calls/api-calls';
import PetDescription from '../PetDescription/PetDescription';
import './Pets.css';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export class Pets extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  loadAllPets = async () => {
    if (this.props.loggedIn) {
      const petsArray = await fetchPets(this.props.userId);

      if (!petsArray.length) {
        alert('There are no more pets');
        return;
      }
      this.props.storeAllPets(petsArray);
    } else {
      this.props.history.push('/login');
    }
  }

  loadPet = () => {
    if (this.props.petsArray.length) {
      return (
        <div>
        <h3>{this.props.petsArray[0].name}</h3>
        <img className="responsive-img pets-img"
        src={this.props.petsArray[0].pic}
        alt="pic"
        />
        <div className="nope-or-like">
          <NopeButton />
          <LikeButton />
        </div>
        <p className="flow-text">{this.props.petsArray[0].description}</p>
        </div>
      );
    } else {
      this.loadAllPets();
    }
  }


  componentDidMount = async () => {
    await this.loadAllPets();
  }


  render() {
    return (
      <div>
        {this.loadPet()}
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
  storeAllPets: petsArray => dispatch(actions.petsArray(petsArray))
});

Pets.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userId: PropTypes.number,
  history: PropTypes.object.isRequired,
  petsArray: PropTypes.array,
  storeAllPets: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Pets);

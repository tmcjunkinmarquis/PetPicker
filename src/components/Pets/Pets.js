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
      loggedIn: true
    };
  }

  loadAllPets = async () => {

    const petsArray = await fetchPets(this.props.userId);
    if (!petsArray.length) {
      alert('There are no more pets')
      return
    }
    this.props.storeAllPets(petsArray);
  }

  async componentDidMount() {
    if (this.props.loggedIn) {
      await this.loadAllPets();
    } else {
      this.props.history.push('/');
    }
  }

  loadImage = () => {
    if (this.props.petsArray.length) {
      return (<img
        src={this.props.petsArray[0].pic}
        alt="pic"
      />
      );
    } else {
      this.loadAllPets();
    }
  }

  render() {
    return (
      <div>
        <h1>Pets to Pet Picker!</h1>
        {this.loadImage()}

        <div className="nope-or-like">
          <NopeButton />
          <LikeButton />
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

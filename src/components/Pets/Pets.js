import React, { Component } from 'react';
import { connect } from 'react-redux';
import NopeButton from '../NopeButton/NopeButton';
import LikeButton from '../LikeButton/LikeButton';
import { fetchPets, fetchDeletePet, fetchLikePostPet } from '../../api_calls/api-calls';
import PetsContainer from '../PetsContainer/PetsContainer';
import PetDescription from '../PetDescription/PetDescription';
import './Pets.css';
import PropTypes from 'prop-types';


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
    console.log('petsArray: ', petsArray);
    this.setState({ petsArray });
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

        {this.state.petsArray.length &&
          <img src={this.state.petsArray[0].pic} alt="pic" />}

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
  userId: state.user.id
});

export const mapDispatchToProps = dispatch => ({
});

Pets.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userId: PropTypes.number,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Pets);

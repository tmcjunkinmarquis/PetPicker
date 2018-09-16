import React, { Component } from 'react';
import { connect } from 'react-redux';
import NopeButton from '../NopeButton/NopeButton';
import LikeButton from '../LikeButton/LikeButton';
import { fetchPets } from '../../api_calls/api-calls';
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

  handleNopeClick = () => {
    console.log('howdy');
    // toggle
  }

  loadAllPets = async () => {
    const petsArray = await fetchPets(this.props.userId);
    console.log('petsArray: ', petsArray);
    this.setState({ petsArray });
  }

  async componentDidMount() {
    await this.loadAllPets();
  }

  render() {
    return (
      <div>
        <h1>Pets to Pet Picker!</h1>

        <PetsContainer
          petsArray={this.state.petsArray}
          loggedIn={this.state.loggedIn}
        />

        <div className="nope-or-like">
          <NopeButton handleNopeClick={this.handleNopeClick} />
          <LikeButton handleLikeClick={this.handleLikeClick} />
        </div>

        <PetDescription />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  userId: state.user.id
});

export const mapDispatchToProps = dispatch => ({
});

Pets.propTypes = {
  userId: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(Pets);

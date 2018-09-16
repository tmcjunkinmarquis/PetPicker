import React, { Component } from 'react';
import HaveWantPetButton from '../HaveWantPetButton/HaveWantPetButton';
import { fetchWelcomePet } from '../../api_calls/api-calls';
import PetImage from '../PetImage/PetImage';
import './Welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {},
      loggedIn: false
    };
  }



  loadWelcomePet = async () => {
    const pet = await fetchWelcomePet();
    this.setState({ pet });

  }

  makePet = (pet) => {
    return (
      <PetImage pet={pet} />
    );
  }

  async componentDidMount() {
    await this.loadWelcomePet();
  }

  render() {
    return (
      <div>
        <h1>Welcome to Pet Picker!</h1>

        <div>{this.makePet(this.state.pet)}</div>

        <div className="nope-or-like">
          <HaveWantPetButton />
        </div>
      </div>
    );
  }
}

export default Welcome;
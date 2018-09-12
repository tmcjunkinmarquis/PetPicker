import React, { Component } from 'react';
import NopeButton from '../../stateless_components/NopeButton/NopeButton';
import LikeButton from '../../stateless_components/LikeButton/LikeButton';
import { fetchUsers } from '../../api_calls/api-calls'
import PetImage from '../../stateless_components/PetImage/PetImage'
import PetDescription from '../../stateless_components/PetDescription/PetDescription'
import './Welcome.css'

class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = async () => {
    try {
      await fetchUsers()
    } catch (error) {
    }
  }


  render() {
    return (
      <div>
        <h1>Welcome to Pet Picker!</h1>
        <PetImage />
        <div className="nope-or-like">
          <NopeButton handleClick={this.handleClick} />
          <LikeButton handleClick={this.handleClick} />
        </div>
        
        <PetDescription />
      </div>
    )
  }
}

export default Welcome;
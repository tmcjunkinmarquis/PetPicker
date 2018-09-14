import React, { Component } from 'react';
import NopeButton from '../../stateless_components/NopeButton/NopeButton';
import LikeButton from '../../stateless_components/LikeButton/LikeButton';
import { fetchUsers, fetchPets } from '../../api_calls/api-calls'
import PetsContainer from '../../stateless_components/PetsContainer/PetsContainer'
import PetDescription from '../../stateless_components/PetDescription/PetDescription'
import './Welcome.css'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      petsArray:[],
      loggedIn: false
    }
  }

  handleClick = async () => {
    try {
      await fetchUsers()
    } catch (error) {
    }
  }

  loadAllPets =  async ()=>{
    const petsArray = await fetchPets()
    this.setState({petsArray}) 
    
  }
    
  async componentDidMount(){
    await this.loadAllPets()
  }

  render() {
    return (
      <div>
        <h1>Welcome to Pet Picker!</h1>

        <PetsContainer 
          petsArray={this.state.petsArray}
          loggedIn={this.state.loggedIn}
        />
        
        <div className="nope-or-like">
          <NopeButton handleClick={this.handleNopeClick} />
          <LikeButton handleClick={this.handleLikeClick} />
        </div>
        
        <PetDescription />
      </div>
    )
  }
}

export default Welcome;
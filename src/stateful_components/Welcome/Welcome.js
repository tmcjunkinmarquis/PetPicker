import React, { Component } from 'react';
import Button from '../../stateless_components/Button/Button';
import { fetchUsers } from '../../api_calls/api-calls'

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
        <h1>I am the Welcome Page. Welcome to Pet Picker!</h1>
        <Button handleClick={this.handleClick} />
      </div>
    )
  }
}

export default Welcome;
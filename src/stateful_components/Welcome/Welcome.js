import React, { Component } from 'react';
import Button from '../../stateless_components/Button/Button';

class Welcome extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>I am the Welcome Page. Welcome to Pet Picker!</h1>
        <Button />
      </div>
    )
  }
}

export default Welcome;
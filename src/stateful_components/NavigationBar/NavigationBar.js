import React, { Component } from 'react';
import Logo from '../../stateless_components/Logo/Logo'

class NavigationBar extends Component {
  constructor (props){
    super()

  }

  render(){
    return(
      <div>
        <Logo />
        <h3>I am the Navigation Bar</h3>
        
        <hr/>
      </div>
    )
  }
}

export default NavigationBar;
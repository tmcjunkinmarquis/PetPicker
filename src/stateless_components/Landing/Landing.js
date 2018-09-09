import React from 'react';
import NavigationBar from '../../stateful_components/NavigationBar/NavigationBar';
import Welcome from '../../stateful_components/Welcome/Welcome';


const Landing = (props)=>{
  return (
    <div>
      <NavigationBar />
      <Welcome />
    </div>
  )
}

export default Landing;
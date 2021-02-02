// import React and dependencies
import React, { Component } from 'react';

import Kitten from './Kitten';

// define our Hello Component
class Hello extends Component {
  render() {

    console.log(this.props)

    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <h3>You are {this.props.age} years old.</h3>
        <h3>You like {this.props.favorites[0]}</h3> 
      </>
    )
  }
};

// set as default export
export default Hello;
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Nav, Button } from './styles';

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <div>Curriculum Creator</div>
        <div>
          <Button href="#">Home</Button>
          <Button href="#">Create Curriculum</Button>
        </div>
      </Nav>
    );
  }
}

export default Navbar;

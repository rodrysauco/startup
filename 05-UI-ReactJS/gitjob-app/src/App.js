import React, { Component } from 'react';
import Container from './Components/Container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart, faStarHalf);


class App extends Component {
  render() {
    return (
        <Container />
    );
  }
}

export default App;

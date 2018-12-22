import React, { Component } from 'react';
import GlobalStore from './containers/global';
import Container from './containers/app';

import './App.scss';

class App extends Component {
  render() {
    return (
        <GlobalStore component={Container}>
        </GlobalStore>
    );
  }
}

export default App;

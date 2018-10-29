import React, { Component } from 'react';
import './App.css';
import Template from './Template';
import Featured from './Featured';


class Home extends Component {
  render() {
    return (
<Template menu="Home">
  <Featured />
  </Template>
    );

  }
}

export default Home;

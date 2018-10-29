import React, { Component } from 'react';
import './App.css';
import Template from './Template';



class Travel extends Component {
  render() {
    return (
<Template menu="Travel">
<div className="container-fluid">
<div className="row" id="menurow2">
Destinations
</div>
<div className="row" id="menurow2">
Cruises
</div>

</div>
  </Template>
    );

  }
}

export default Travel;

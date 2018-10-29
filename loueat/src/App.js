import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Food from './Food';
import Travel from './Travel';
import NotFound from './NotFound';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Switch>
        <Route exact path='/' render={() => (
          <Home />
        )} />
        <Route exact path='/Food' render={() => (
          <Food />
        )} />
        <Route exact path='/Travel' render={() => (
          <Travel />
        )} />

         <Route  render={() => (
          <NotFound />
        )} />

      </Switch>
    </div>
    );

  }
}

export default App;

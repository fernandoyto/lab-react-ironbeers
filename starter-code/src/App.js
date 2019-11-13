import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Organisms/Home/Home';
import ListBeers from './components/Organisms/ListBeers/ListBeers';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path = '/' component={Home} />} />
          <Route exact path = '/beers' component={ListBeers} ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

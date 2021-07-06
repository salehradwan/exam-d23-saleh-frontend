import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Main from './components/Main';
import Favorites from './components/Favorites';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/favorites" exact>
              <Favorites />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App

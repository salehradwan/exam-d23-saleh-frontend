import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact>
            </Route>
            <Route path="/" exact>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App

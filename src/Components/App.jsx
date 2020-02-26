import React, { Component} from 'react';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

export class App extends Component {
  render() {
    return (
      <Router>
        <>
        <Link to = '/'>Go to Page 1</Link>
        <Link to = '/page2'>Go to Page 2</Link>
        <Switch>
          <Route exact path = '/' component ={Page1}/>
          <Route path = '/page2' component = {Page2} />
        </Switch>
        </>
      </Router>
    )
  }
}

export default App


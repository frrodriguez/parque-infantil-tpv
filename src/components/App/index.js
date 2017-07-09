import React, { Component } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';

import scenes from '../../scenes/scenes'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {scenes}
        </Switch>
      </Router>
    );
  }
}

export default App;

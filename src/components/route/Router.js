import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';

class Router extends Component {
  render() {
    return (
      <main>
      	<Switch>
            <Route exact path='/' component={Home}/>
      	</Switch>
      </main>
    );
  }
}

export default Router;
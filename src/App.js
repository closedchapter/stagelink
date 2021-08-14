import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import 'animate.css'

import Main from './Main'
import Live from './Live'
import Error from './Error'
import * as Nav from './Nav'

function App() {
  return (
    <div>
      <Nav.Bar />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/live' exact component={Live} />
          <Route path="/404" component={ Error } />
          <Redirect to="/404" />
        </Switch>
      <Nav.Footer />
    </div>
  );
}

export default App;

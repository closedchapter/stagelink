import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Main from './Main'
import * as Nav from './Nav'

function App() {
  return (
    <div>
      <Nav.Bar />
        <Switch>
          <Route path='/' exact component={Main} />
        </Switch>
      <Nav.Footer />
    </div>
  );
}

export default App;

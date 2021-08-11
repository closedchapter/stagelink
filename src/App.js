import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Main from './Main'
import Live from './Live'
import * as Nav from './Nav'

function App() {
  return (
    <div className='bg-black'>
      <Nav.Bar />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/live' exact component={Live} />
        </Switch>
      <Nav.Footer />
    </div>
  );
}

export default App;

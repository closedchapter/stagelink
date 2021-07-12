import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Nav />
      <Switch>
        <Route path='/' exact component={Landing} />
      </Switch>
    <Footer />
    </>
  );
}

export default App;
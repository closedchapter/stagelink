import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ComingSoon from './upcoming';
import Landing from './landing';
import Footer from './components/footer';

function App() {
  return (
  <>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/upcoming' exact component={ComingSoon} />
      </Switch>
    <Footer />
  </>
  );
}

export default App;
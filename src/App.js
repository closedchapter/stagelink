import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import Footer from './components/footer';

function App() {
  return (
  <>
      <Switch>
        <Route path='/' exact component={Landing} />
      </Switch>
    <Footer />
  </>
  );
}

export default App;
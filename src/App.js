import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Details, Main } from './Views';

function App() {
  return (
    <div className='appContainer'>
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/:id' component={Details} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>    </div>
  );
}

export default App;

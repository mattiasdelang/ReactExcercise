import React from 'react';
import './App.css';
import Main from "./views/Main/Main";
import Details from "./views/Details/Details";
import Header from './views/Main/Header';
import { BrowserRouter , Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className='appContainer'>
      <BrowserRouter >
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/:id" component={Details} />
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;

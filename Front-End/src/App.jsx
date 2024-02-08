import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        <Route exact path="/login" component={ Login } />

        <Route exact path="/home" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
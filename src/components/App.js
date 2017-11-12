import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import Routes from '../router';
import { Link, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginScreen from './LoginScreen';

//const store = createStore(reducers, {}, applyMiddleware(thunk))

const App = () => (

  //<Provider store={store}>
    <div>
    <Switch>
      <Route exact path="/" component={LoginScreen}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Switch>
    </div>
  //</Provider>
)

export default App;



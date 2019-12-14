import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home.js'
import Rooms from './pages/Rooms.js'
import SingleRoom from './pages/SingleRoom.js'
import Error from './pages/Error.js'

import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/rooms" component={Rooms}/>
        <Route path="/rooms/:slug" component={SingleRoom}/>
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;

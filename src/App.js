import React from 'react';
import './App.css';

import Home from './containers/HomePageContainer'
import Rooms from './containers/RoomsPageContainer'
import SingleRoom from './containers/SingleRoomContainer'
import Error from './pages/Error'
import Navbar from './components/Navbar'

import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

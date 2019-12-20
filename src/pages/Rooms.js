import React, { Component } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";

class Rooms extends Component {
  componentDidMount() {
    const { appState, fetchRooms } = this.props;

    if (appState.rooms.length === 0) {
      fetchRooms();
    }
  }

  render() {
    const { appState, handleFilter } = this.props;
    return (
      <>
        <Hero hero="roomsHero">
          <Banner titile="our rooms">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </Banner>
        </Hero>
        <RoomsContainer appState={appState} handleFilter={handleFilter} />
      </>
    );
  }
}

export default Rooms;

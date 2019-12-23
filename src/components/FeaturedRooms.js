import React, { Component } from "react";
// import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default ({loading, featuredRooms}) => {
  // static contextType = RoomContext;

    const rooms = featuredRooms.map((room, index) => {
      return <Room key={index} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
}

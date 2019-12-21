import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
// import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomsContainer({handleFilter, roomsState}) {
  const { loading, sortedRooms} = roomsState;

  return loading ? (
    <Loading />
  ) : (
    <div>
      <RoomsFilter roomsState={roomsState} handleFilter={handleFilter} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

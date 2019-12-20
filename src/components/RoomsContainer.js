import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
// import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomsContainer({handleFilter, appState}) {
  const { loading, sortedRooms} = appState;

  return loading ? (
    <Loading />
  ) : (
    <div>
      <RoomsFilter appState={appState} handleFilter={handleFilter} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

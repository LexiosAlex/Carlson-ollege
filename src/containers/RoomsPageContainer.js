import Rooms from "../pages/Rooms";

import { connect } from "react-redux";
import { handleFilter, fetchRooms } from "../actions/actions";

const mapStateToProps = state => {
  const {roomsReducer} = state;
  return {
    roomsState: roomsReducer
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRooms: () => {
    dispatch(fetchRooms());
  },
  handleFilter: event => {
    dispatch(handleFilter(event));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);

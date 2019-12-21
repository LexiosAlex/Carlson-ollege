import Home from "../pages/Home";

import { connect } from "react-redux";
import {fetchRooms} from "../actions/RoomsActions";

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

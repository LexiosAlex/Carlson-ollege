import SingleRoom from "../pages/SingleRoom";

import { connect } from "react-redux";
import { fetchRooms } from "../actions/RoomsActions";

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

export default connect(mapStateToProps, mapDispatchToProps)(SingleRoom);

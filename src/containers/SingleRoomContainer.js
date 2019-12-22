import SingleRoom from "../pages/SingleRoom";

import { connect } from "react-redux";
import { fetchRooms } from "../actions/RoomsActions";

const mapStateToProps = state => {
  const {roomsReducer, userReducer} = state;
  return {
    roomsState: roomsReducer,
    userState: userReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRooms: () => {
    dispatch(fetchRooms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRoom);

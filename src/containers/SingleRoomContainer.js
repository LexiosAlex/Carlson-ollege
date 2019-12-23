import SingleRoom from "../pages/SingleRoom";

import { connect } from "react-redux";
import { fetchRooms } from "../actions/RoomsActions";
import {chargeUserCard} from "../actions/UserActions";

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
  chargeUserCard: (orderedRoom, userData, totalPrice) => {
    dispatch(chargeUserCard(orderedRoom, userData, totalPrice))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRoom);

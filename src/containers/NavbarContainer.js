import Navbar from "../components/Navbar";

import { connect } from "react-redux";
import { logOut } from "../actions/UserActions";

const mapStateToProps = state => {
  const { roomsReducer, userReducer } = state;
  return {
    roomsState: roomsReducer,
    userState: userReducer
  };
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

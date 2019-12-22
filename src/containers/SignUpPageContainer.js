import SignUp from "../pages/SignUp";

import { connect } from "react-redux";
import {onUserRegister} from "../actions/UserActions";

const mapStateToProps = state => {
  const { roomsReducer, userReducer } = state;
  return {
    roomsState: roomsReducer,
    userState: userReducer
  };
};

const mapDispatchToProps = dispatch => ({
  onUserRegister: (firstName, lastName, email, password) => {
    dispatch(onUserRegister(firstName, lastName, email, password))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

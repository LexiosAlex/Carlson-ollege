import SignIn from "../pages/SignIn";

import { connect } from "react-redux";
import { onUserLogin } from "../actions/UserActions";

const mapStateToProps = state => {
  const { roomsReducer, userReducer } = state;
  return {
    roomsState: roomsReducer,
    userState: userReducer
  };
};

const mapDispatchToProps = dispatch => ({
  onUserLogin: (email, password) => {
    dispatch(onUserLogin(email, password))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

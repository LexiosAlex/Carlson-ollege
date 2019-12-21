import Account from "../pages/Account";

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);

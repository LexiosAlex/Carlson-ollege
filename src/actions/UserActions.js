import axios from "axios";

export const logOut = () => {
  return {
    type: "USER_LOGIN_OUT",
  }
};

export const onUserLogin = (email, password) => dispatch => {
  dispatch({ type: "USER_LOGGING_IN" });
  axios
    .post("/user/authorisation/login", {
      email,
      password
    })
    .then(response => {
      console.log("login response: ");
      console.log(response);
      dispatch({ type: "USER_LOGIN_SUCCESS", userData: response.userData });
    })
    .catch(error => {
      console.log("login error: ");
      console.log(error);
      dispatch({ type: "USER_LOGIN_ERROR" });
    });
};


export const onUserRegister = (firstName, lastName, email, password) => dispatch => {
  dispatch({ type: "USER_SIGN_UP" });
  axios
    .post("/user/authorisation/register", {
      firstName,
      lastName,
      email,
      password
    })
    .then(response => {
      console.log("register response: ");
      console.log(response);
      dispatch({ type: "USER_SIGN_UP_SUCCESS"});
    })
    .catch(error => {
      console.log("register error: ");
      console.log(error);
      dispatch({ type: "USER_SIGN_UP_ERROR" });
    });
};

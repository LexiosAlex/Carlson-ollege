const userReducer = (
  state = {
    userData: null,
    loggedIn: false,
    isLoading: false,
    isError: false
  },
  action
) => {
  switch (action.type) {
    case "LOGGING_IN":
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case "LOGIN_SUCCESS":
      return {
        userData: action.userData,
        loggedIn: true,
        isLoading: false,
        isError: false
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case "USER_LOGIN_OUT":
      return {
        ...state,
        loggedIn: false,
        userData: null,
      };

    default:
      return state;
  }
};

export default userReducer;

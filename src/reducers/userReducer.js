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
    case "USER_LOGGING_IN":
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case "USER_LOGIN_SUCCESS":
      return {
        userData: action.userData,
        loggedIn: true,
        isLoading: false,
        isError: false
      };

    case "USER_LOGIN_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case "USER_LOGIN_OUT":
      return {
        ...state,
        loggedIn: false,
        userData: null
      };

    case "USER_SIGN_UP":
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case "USER_SIGN_UP_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false
      };

    case "USER_SIGN_UP_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case "UPDATING_USER_ORDERS":
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case "UPDATE_USER_ORDERS_SUCCESS":
      return {
        ...state,
        UserData: action.userData,
        isLoading: false,
        isError: false
      };

    case "UPDATE_USER_ORDERS_ERROR":
      return {
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
};

export default userReducer;

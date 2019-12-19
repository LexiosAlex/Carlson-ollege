const appReducer = (
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  },
  action
) => {
  const {
    rooms,
    featuredRooms,
    sortedRooms,
    minSize,
    maxSize,
    minPrice,
    maxPrice,
    type,
    capacity,
    price,
    breakfast,
    pets
  } = action;

  switch (action.type) {
    case "FETCH_ROOMS":
      return {
        ...state,
        rooms,
        featuredRooms,
        sortedRooms,
        maxSize,
        maxPrice,
        loading: false,
        isError: false
      };

    case "ON_FILTER_CHANGE":
      return {
        ...state,
        minSize,
        minPrice,
        type,
        capacity,
        price,
        breakfast,
        pets
      };

    case "FILTER_ROOMS":
      return {
        ...state,
        sortedRooms,
        loading: false,
        isError: false
      };

    default:
      return state;
  }
};

export default appReducer;

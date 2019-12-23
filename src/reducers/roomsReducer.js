import {filterRooms} from './helpers/helpers';

const roomReducer = (
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
  switch (action.type) {
    case "FETCHING_ROOMS": {
     return {
       ...state,
       loading: true,
       isError: false
     }
    }
    case "FETCH_ROOMS":
      const {
        rooms,
        featuredRooms,
        sortedRooms,
        maxSize,
        maxPrice,
      } = action;
      return {
        ...state,
        rooms,
        featuredRooms,
        sortedRooms,
        maxSize,
        price: maxPrice,
        maxPrice,
        loading: false,
        isError: false
      };

    case "FETCH_ROOMS_ERROR": {
      return {
        ...state,
        loading: true,
        isError: true
      }
    }
    case "ON_FILTER_CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };

    case "FILTER_ROOMS":
      return {
        ...state,
        sortedRooms: filterRooms(state),
      };

    default:
      return state;
  }
};

export default roomReducer;

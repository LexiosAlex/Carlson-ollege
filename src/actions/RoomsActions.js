import axios from "axios";

export const fetchRooms = () => dispatch => {
  dispatch({ type: "FETCHING_ROOMS" });
  axios
    .get(`/api/rooms`)
    .then(res => {
      let rooms = res.data.roomsData;
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));

      dispatch({
        type: "FETCH_ROOMS",
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        maxSize,
        maxPrice
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: "FETCH_ROOMS_ERROR", error });
    });
};

export const handleFilter = event => dispatch => {
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;

  const name = event.target.name;

  const filterRooms = async () => {
    await dispatch({
      type: "ON_FILTER_CHANGE",
      name,
      value
    });
  };

  filterRooms().then(() => {
    dispatch({ type: "FILTER_ROOMS" });
  });
};

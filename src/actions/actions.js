import roomsItems from "../data";

const formatData = items => {
  return items.map(item => {
    let id = item.sys.id;
    let images = item.fields.images.map(image => image.fields.file.url);

    return { ...item.fields, images, id };
  });
};

export const fetchRooms = () => {
  let rooms = formatData(roomsItems);
  let featuredRooms = rooms.filter(room => room.featured === true);
  let maxPrice = Math.max(...rooms.map(item => item.price));
  let maxSize = Math.max(...rooms.map(item => item.size));

  return {
    type: "FETCH_ROOMS",
    rooms,
    featuredRooms,
    sortedRooms: rooms,
    maxSize,
    maxPrice
  };
};

// export const getSingleRoom = (slug, rooms) => {
//   let tempRooms = [...rooms];
//   const room = tempRooms.find(room => room.slug === slug);
//   return {type: 'GET_SINGLE_ROOM' ,room};
//
// };

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

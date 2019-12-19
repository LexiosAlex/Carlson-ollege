import roomsItems from '../data'


const formatData = (items) => {
  return items.map(item => {
    let id = item.sys.id;
    let images = item.fields.images.map(image => image.fields.file.url);

    return  { ...item.fields, images, id };
  });
};


export const fetchRooms = () => {
    let rooms = formatData(roomsItems);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));

    return {
      type: 'FETCH_ROOMS',
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      maxSize,
      maxPrice,
    };
};

// export const getSingleRoom = (slug, rooms) => {
//   let tempRooms = [...rooms];
//   const room = tempRooms.find(room => room.slug === slug);
//   return {type: 'GET_SINGLE_ROOM' ,room};
//
// };

export const handleChange = (event, data) => dispatch => {
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;

  const name = event.target.name;


  dispatch({
    type: 'ON_FILTER_CHANGE',
    [name]: value,
  });
  filterRooms(data)
};

export const filterRooms = (data) => dispatch => {
  let {
    rooms,
    type,
    capacity,
    price,
    minSize,
    maxSize,
    breakfast,
    pets
  } = data;

  capacity = parseInt(capacity);
  let sortedRooms = [...rooms];

  //filter by type
  if (type !== 'all') {
    sortedRooms = sortedRooms.filter(room => room.type === type)
  }
  //filter by persons
  if (capacity !== 1) {
    sortedRooms = sortedRooms.filter(room => room.capacity >= capacity);
  }
  // filter by price
  sortedRooms = sortedRooms.filter(room => room.price <= price);
  //filter by size
  sortedRooms = sortedRooms.filter(
    room => room.size >= minSize && room.size <= maxSize
  );
  //filter by breakfast
  if (breakfast) {
    sortedRooms = sortedRooms.filter(room => room.breakfast === true);
  }
  //filter by pets
  if (pets) {
    sortedRooms = sortedRooms.filter(room => room.pets === true);
  }

  dispatch({
    type: 'FILTER_ROOMS',
    sortedRooms
  });
};

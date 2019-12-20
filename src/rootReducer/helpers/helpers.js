export const filterRooms = (state) => {
  let {
    rooms,
    type,
    capacity,
    price,
    minSize,
    maxSize,
    breakfast,
    pets
  } = state;

  console.log(state);
  console.log(pets);
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

  return sortedRooms
};

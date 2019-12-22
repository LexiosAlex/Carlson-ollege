import RoomModel from "../models/room.js";

export const fetchRooms = (req, res) => {
  console.log(req.query);

  RoomModel.find({}, function (err, rooms) {
    if (err) {
      res.send({
        success: "false",
        message: "cant get rooms"
      });
    }

    res.status(200).send({
      success: "true",
      message: "rooms retrieved successfully",
      roomsData: rooms,
    });
  })
};

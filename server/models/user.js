import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
import uniqueValidator from 'mongoose-unique-validator';
import {connection} from "../connection/connection.js"

const Schema = mongoose.Schema;

let userSchema = new Schema({
  _id: { type:  mongoose.Schema.Types.ObjectId},
  firstName: { type: String, required: true, max: 100},
  lastName: { type: String, required: true, max: 100},
  email: {type: String, required: true, max: 100, unique: true},
  password: {type: String, required: true, max: 100},
  orders: []
});

autoIncrement.initialize(connection);
userSchema.plugin(autoIncrement.plugin, {
  model: "user",
  field: "_id",
  startAt: 1,
  incrementBy: 1
});

userSchema.plugin(uniqueValidator);

export default mongoose.model("users", userSchema);

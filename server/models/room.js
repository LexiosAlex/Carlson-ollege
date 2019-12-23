import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
import { connection } from "../connection/connection.js";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: Number, required: true },
  capacity: { type: Number, required: true },
  pets: { type: Boolean, required: true },
  breakfast: { type: Boolean, required: true },
  featured: { type: Boolean, required: true },
  description: { type: String, required: true, max: 2000 },
  extras: [
    {
      type: String
    }
  ],
  images: [
    {
      type: String
    }
  ]
});

autoIncrement.initialize(connection);
ProductSchema.plugin(autoIncrement.plugin, {
  model: "rooms",
  field: "_id",
  startAt: 1,
  incrementBy: 1
});
export default mongoose.model("rooms", ProductSchema);

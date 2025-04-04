import mongoose from "mongoose";
const HouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  Price: {
    type: Number,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("House", HouseSchema)
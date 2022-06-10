import mongoose from "mongoose";
const { Schema } = mongoose;

const authSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const auth = mongoose.model("auth", authSchema);

export default auth;

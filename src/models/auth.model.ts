import mongoose, { Date } from "mongoose";
const { Schema } = mongoose;
export interface IFormInfo {
  birthday: string;
  gen: string;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  avatar: string;
  coverImage: string;
  createAt: Date;
}

const authSchema = new Schema<IFormInfo>({
  birthday: {
    type: String,
  },
  gen: {
    type: String,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const auth = mongoose.model("auth", authSchema);

export default auth;

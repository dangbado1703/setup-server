import mongoose, { Date } from "mongoose";
import { IFormInfo } from "../typemodel/typeabout";
const AutoIncrement = require("mongoose-sequence")(mongoose);
const { Schema } = mongoose;
const authSchema = new Schema<IFormInfo>(
  {
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
    company: {
      type: String,
    },
    position: {
      type: String,
    },
    description: {
      type: String,
    },
    schoolName: {
      type: String,
    },
    graduated: {
      type: Boolean,
    },
    descriptionSchool: {
      type: String,
    },
    degree: {
      type: String,
    },
    degreeInput: {
      type: String,
    },
    province: {
      type: String,
    },
    from: {
      type: String,
    },
    married: {
      type: String,
      enum: ["", "alone", "married"],
      default: "",
    },
    phone: {
      type: String,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    _id: false,
  }
);
authSchema.plugin(AutoIncrement);
const auth = mongoose.model("auth", authSchema);

export default auth;

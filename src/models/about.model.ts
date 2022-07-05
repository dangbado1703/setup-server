import mongoose from "mongoose";

const { Schema } = mongoose;
const aboutSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "auth",
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
    enum: ["alone", "married"],
    default: "",
  },
  phone: {
    type: String,
  },
});

const about = mongoose.model("about", aboutSchema);
export default about;

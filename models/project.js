const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Project Title"],
  },
  desc: {
    type: String,
    required: [true, "Please Enter Project Description"],
  },
  img: {
    type: String,
  },
  year: {
    type: Number,
    default: 2022,
  },
  timestamps: true,
});

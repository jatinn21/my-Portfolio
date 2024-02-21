// bringing mongoose package
const mongoose = require("mongoose");

//  creating schema
const projectSchema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

// now bring the schema in the model
//  and named it Project
const project = mongoose.model("project", projectSchema);

module.exports = project;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  Name: { type: String, required: true }, // Project Name //
  Employees: { type: Array, required: true }, // findById[employees._id] //
  Active: { type: Boolean, default: true, required: true } // True unless false, then delete //
});

const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  Number: { type: Number, required: true }, // 0001 //
  Name: { type: String, required: true }, // Project Name //
  EmployeesAssigned: { type: Array, required: true }, // findById[employees._id] //
  DaysAssigned: { type: Array, required: true }, // Start Date to the Finish Date //
  Active: { type: Boolean, default: true } // True unless false, then delete //
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;

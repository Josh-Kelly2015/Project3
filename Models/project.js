const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  active: { type: Boolean, default: true, required: true },
  assignedEmployees: { type: Array, required: true },
  assignedDates: { type: Array, required: true }
});
const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;

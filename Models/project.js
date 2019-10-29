const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName: { type: String, required: true },
  projectNumber: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  materials: { type: String, required: true },
  employees: { type: String, required: true },
  timescale: { type: String, required: true },
  datesWorked: { type: String, required: true },
  timeWorked: { type: String, required: true }
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;

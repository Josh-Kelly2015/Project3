const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName: { type: String, required: true },
  projectNumber: { type: Number, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  materials: { type: String, required: true },
  employees: { type: String, required: true },
  timescale: { type: Date, required: true },
  datesWorked: { type: Date, required: true },
  hoursWorked: { type: Number, required: true }
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;

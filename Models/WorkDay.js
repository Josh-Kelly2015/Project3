const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkDaySchema = new Schema({
  Name: { type: String, required: true },
  AssignedProject: { type: String, required: true },
  AssignedEmployee: { type: Array, required: true }
});

const WorkDay = mongoose.model("WorkDay", WorkDaySchema);

module.exports = WorkDay;

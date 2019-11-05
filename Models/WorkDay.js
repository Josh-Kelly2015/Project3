const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkDaySchema = new Schema({
  Name: { type: String, required: true },
  Projects: { type: Array, required: true }
});

const WorkDay = mongoose.model("workday", WorkDaySchema);

module.exports = WorkDay;

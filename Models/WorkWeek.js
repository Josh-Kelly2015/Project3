const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkWeekSchema = new Schema({
  Name: { type: String, required: true }, // Week 01, 02, 03, 04, 05, etc. //
  Days: { type: Array, required: true } // .map([WorkDay]) //
});

const WorkWeek = mongoose.model("WorkWeek", WorkWeekSchema);

module.exports = WorkWeek;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkDaySchema = new Schema({
  name: { type: String, required: true }
});

const WorkDay = mongoose.model("workday", WorkDaySchema);

module.exports = WorkDay;

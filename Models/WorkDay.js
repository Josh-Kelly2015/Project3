const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkDaySchema = new Schema({
  id: { type: Number, require: true },
  name: { type: String, required: true }
});

const WorkDay = mongoose.model("workday", WorkDaySchema);

module.exports = WorkDay;

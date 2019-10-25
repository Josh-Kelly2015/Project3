const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rank: { type: String, required: true }
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;

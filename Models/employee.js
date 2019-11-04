const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  Name: { type: String, required: true }, // John Doe //
  Email: { type: String, required: true }, // johndoe@gmail.com //
  Rank: { type: String, required: true } // admin, manager, employee //
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;

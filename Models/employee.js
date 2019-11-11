const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  employeeName: { type: String, required: true }, // John Doe //
  email: { type: String, required: true }, // johndoe@gmail.com //
  rank: { type: String, required: true }, // [admin, manager, employee] //
  password: {type: Array, required: true}
});

const Employee = mongoose.model("employee", EmployeeSchema);

module.exports = Employee;

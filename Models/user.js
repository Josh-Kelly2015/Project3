const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true }, // John Doe //
  last_name: { type: String, requires: true },
  email: { type: String, required: true }, // johndoe@gmail.com //
  password: { type: Array, required: true } // [admin, manager, employee] //
});
const User = mongoose.model("User", UserSchema);

module.exports = User;

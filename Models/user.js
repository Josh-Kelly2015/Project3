const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true }, // John Doe //
  email: { type: String, required: true }, // johndoe@gmail.com //
  rank: { type: String, required: true }, // [admin, manager, employee] //
  password: { type: String, required: true }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;

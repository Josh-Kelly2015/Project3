const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
<<<<<<< HEAD
  id: { type: Boolean, required: true },
  email: { type: String, required: true }, // johndoe@gmail.com //
  password: { type: Array, required: true } // [admin, manager, employee] //
});

module.exports = User = mongoose.model("users", UserSchema);
=======
  name: { type: String, required: true }, // John Doe //
  email: { type: String, required: true }, // johndoe@gmail.com //
  rank: { type: String, required: true }, // [admin, manager, employee] //
  password: { type: String, required: true }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
>>>>>>> b6d8c461b621a660f1881b21fb54b6a10d0a799c

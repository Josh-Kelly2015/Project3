// const mongoose = require("mongoose");
// const db = require("../Models");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

// const UserSchema = [
//   {

//     email: "johndoe1@gmail.com",
//     password: "admin"
//   },
//   {

//     email: "johndoe2@gmail.com",
//     password: "field"
//   },
//   {

//     email: "johndoe3@gmail.com",
//     password: "manager"
//   },
//   {

//     email: "johndoe4@gmail.com",
//     password: "admin"
//   },
//   {

//     email: "johndoe5@gmail.com",
//     password: "manager"
//   },
//   {

//     email: "johndoe6@gmail.com",
//     password: "field"
//   },
//   {

//     email: "johndoe7@gmail.com",
//     password: "field"
//   },
//   {

//     email: "johndoe8@gmail.com",
//     password: "field"
//   },
//   {

//     email: "johndoe9@gmail.com",
//     password: "manager"
//   },
//   {

//     email: "johndoe10@gmail.com",
//     password: "field"
//   },
//   {

//     email: "johndoe11@gmail.com",
//     password: "manager"
//   },
//   {

//     email: "johndoe12@gmail.com",
//     password: "field"
//   }
// ];

// db.User.remove({})
//   .then(() => db.User.collection.insertMany(UserSchema))
//   .then(data => {
//     console.log(data.result.n + " user records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

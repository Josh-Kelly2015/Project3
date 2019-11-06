// const mongoose = require("mongoose");
// const db = require("../Models");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

// const WorkDaySchema = [
//   {
//     id: 0,
//     day: "Monday"
//   },
//   {
//     id: 1,
//     day: "Tuesday"
//   },
//   {
//     id: 2,
//     day: "Wednesday"
//   },
//   {
//     id: 3,
//     day: "Thursday"
//   },
//   {
//     id: 4,
//     day: "Friday"
//   },
//   {
//     id: 5,
//     day: "Saturday"
//   },
//   {
//     id: 6,
//     day: "Sunday"
//   }
// ];
// db.WorkDay.remove({})
//   .then(() => db.WorkDay.collection.insertMany(WorkDaySchema))
//   .then(data => {
//     console.log(data.result.n + " work day records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

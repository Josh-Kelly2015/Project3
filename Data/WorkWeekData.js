const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const WorkWeekSchema = [
  {
    Name: "Work Week One",
    Days: []
  }
];
db.WorkWeek.remove({})
  .then(() => db.WorkWeek.collection.insertMany(WorkWeekSchema))
  .then(data => {
    console.log(data.result.n + " work week records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const WorkDaySchema = [
  {
    Name: "Monday",
    AssignedProject: "Project Name Seed 1",
    AssignedEmployee: ["John Doe1", "John Doe2"]
  }
];
db.WorkDay.remove({})
  .then(() => db.WorkDay.collection.insertMany(WorkDaySchema))
  .then(data => {
    console.log(data.result.n + " work day records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

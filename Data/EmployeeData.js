const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const EmployeeSchema = [
  {
    Name: "John Doe1",
    Email: "johndoe1@gmail.com",
    Rank: ["admin", "manager", "entry"]
  },
  {
    Name: "John Doe2",
    Email: "johndoe2@gmail.com",
    Rank: ["admin", "manager", "entry"]
  }
];

db.Employee.remove({})
  .then(() => db.Employee.collection.insertMany(EmployeeSchema))
  .then(data => {
    console.log(data.result.n + " employee records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

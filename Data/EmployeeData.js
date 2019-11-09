const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const EmployeeSchema = [
  {
    employeeName: "John Doe1",
    email: "johndoe1@gmail.com",
    rank: "admin"
  },
  {
    employeeName: "John Doe2",
    email: "johndoe2@gmail.com",
    rank: "field"
  },
  {
    employeeName: "John Doe3",
    email: "johndoe3@gmail.com",
    rank: "manager"
  },
  {
    employeeName: "John Doe4",
    email: "johndoe4@gmail.com",
    rank: "admin"
  },
  {
    employeeName: "John Doe5",
    email: "johndoe5@gmail.com",
    rank: "manager"
  },
  {
    employeeName: "John Doe6",
    email: "johndoe6@gmail.com",
    rank: "field"
  },
  {
    employeeName: "John Doe7",
    email: "johndoe7@gmail.com",
    rank: "field"
  },
  {
    employeeName: "John Doe8",
    email: "johndoe8@gmail.com",
    rank: "field"
  },
  {
    employeeName: "John Doe9",
    email: "johndoe9@gmail.com",
    rank: "manager"
  },
  {
    employeeName: "John Doe10",
    email: "johndoe10@gmail.com",
    rank: "field"
  },
  {
    employeeName: "John Doe11",
    email: "johndoe11@gmail.com",
    rank: "manager"
  },
  {
    employeeName: "John Doe12",
    email: "johndoe12@gmail.com",
    rank: "field"
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

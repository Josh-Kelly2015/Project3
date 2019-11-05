const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const EmployeeSchema = [
  {
    name: "John Doe1",
    email: "johndoe1@gmail.com",
    rank: "admin"
  },
  {
    name: "John Doe2",
    email: "johndoe2@gmail.com",
    rank: "field"
  },
  {
    name: "John Doe3",
    email: "johndoe3@gmail.com",
    rank: "manager"
  },
  {
    name: "John Doe4",
    email: "johndoe4@gmail.com",
    rank: "admin"
  },
  {
    name: "John Doe5",
    email: "johndoe5@gmail.com",
    rank: "manager"
  },
  {
    name: "John Doe6",
    email: "johndoe6@gmail.com",
    rank: "field"
  },
  {
    name: "John Doe7",
    email: "johndoe7@gmail.com",
    rank: "field"
  },
  {
    name: "John Doe8",
    email: "johndoe8@gmail.com",
    rank: "field"
  },
  {
    name: "John Doe9",
    email: "johndoe9@gmail.com",
    rank: "manager"
  },
  {
    name: "John Doe10",
    email: "johndoe10@gmail.com",
    rank: "field"
  },
  {
    name: "John Doe11",
    email: "johndoe11@gmail.com",
    rank: "manager"
  },
  {
    name: "John Doe12",
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

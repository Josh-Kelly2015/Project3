const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const employeeSeed = [
  {
    name: "John Doe1",
    email: "johndoe1@gmail.com",
    rank: "admin"
  },
  {
    name: "John Doe2",
    email: "johndoe2@gmail.com",
    rank: "manager"
  },
  {
    name: "John Doe3",
    email: "johndoe3@gmail.com",
    rank: "manager"
  },
  {
    name: "John Doe4",
    email: "johndoe4@gmail.com",
    rank: "employee"
  },
  {
    name: "John Doe5",
    email: "johndoe5@gmail.com",
    rank: "employee"
  },
  {
    name: "John Doe6",
    email: "johndoe6@gmail.com",
    rank: "admin"
  },
  {
    name: "John Doe7",
    email: "johndoe7@gmail.com",
    rank: "employee"
  },
  {
    name: "John Doe8",
    email: "johndoe8@gmail.com",
    rank: "employee"
  },
  {
    name: "John Doe9",
    email: "johndoe9@gmail.com",
    rank: "employee"
  },
  {
    name: "John Doe10",
    email: "johndoe10@gmail.com",
    rank: "employee"
  },
  {
    name: "John Doe11",
    email: "johndoe11@gmail.com",
    rank: "employee"
  },
  {
    name: "John Doe12",
    email: "johndoe12@gmail.com",
    rank: "employee"
  },
  {
    name: "John Doe13",
    email: "johndoe13@gmail.com",
    rank: "manager"
  },
  {
    name: "John Doe14",
    email: "johndoe14@gmail.com",
    rank: "manager"
  },
  {
    name: "John Doe15",
    email: "johndoe15@gmail.com",
    rank: "admin"
  },
  {
    name: "John Doe16",
    email: "johndoe16@gmail.com",
    rank: "manager"
  },
  {
    name: "John Doe17",
    email: "johndoe17@gmail.com",
    rank: "manager"
  },
  {
    name: "John Doe18",
    email: "johndoe18@gmail.com",
    rank: "employee"
  },
  {
    name: "John Doe19",
    email: "johndoe19@gmail.com",
    rank: "employee"
  },
  {
    name: "John Doe20",
    email: "johndoe20@gmail.com",
    rank: "employee"
  }
];

db.Employee.remove({})
  .then(() => db.Employee.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

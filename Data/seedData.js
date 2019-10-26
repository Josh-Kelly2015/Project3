const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const employeeSeed = [
  {
    id: 0,
    name: "John Doe1",
    email: "johndoe1@gmail.com",
    rank: "admin"
  },
  {
    id: 1,
    name: "John Doe2",
    email: "johndoe2@gmail.com",
    rank: "manager"
  },
  {
    id: 2,
    name: "John Doe3",
    email: "johndoe3@gmail.com",
    rank: "manager"
  },
  {
    id: 3,
    name: "John Doe4",
    email: "johndoe4@gmail.com",
    rank: "employee"
  },
  {
    id: 4,
    name: "John Doe5",
    email: "johndoe5@gmail.com",
    rank: "employee"
  },
  {
    id: 5,
    name: "John Doe6",
    email: "johndoe6@gmail.com",
    rank: "admin"
  },
  {
    id: 6,
    name: "John Doe7",
    email: "johndoe7@gmail.com",
    rank: "employee"
  },
  {
    id: 7,
    name: "John Doe8",
    email: "johndoe8@gmail.com",
    rank: "employee"
  },
  {
    id: 8,
    name: "John Doe9",
    email: "johndoe9@gmail.com",
    rank: "employee"
  },
  {
    id: 9,
    name: "John Doe10",
    email: "johndoe10@gmail.com",
    rank: "employee"
  },
  {
    id: 10,
    name: "John Doe11",
    email: "johndoe11@gmail.com",
    rank: "employee"
  },
  {
    id: 11,
    name: "John Doe12",
    email: "johndoe12@gmail.com",
    rank: "employee"
  },
  {
    id: 12,
    name: "John Doe13",
    email: "johndoe13@gmail.com",
    rank: "manager"
  },
  {
    id: 13,
    name: "John Doe14",
    email: "johndoe14@gmail.com",
    rank: "manager"
  },
  {
    id: 14,
    name: "John Doe15",
    email: "johndoe15@gmail.com",
    rank: "admin"
  },
  {
    id: 15,
    name: "John Doe16",
    email: "johndoe16@gmail.com",
    rank: "manager"
  },
  {
    id: 16,
    name: "John Doe17",
    email: "johndoe17@gmail.com",
    rank: "manager"
  },
  {
    id: 17,
    name: "John Doe18",
    email: "johndoe18@gmail.com",
    rank: "employee"
  },
  {
    id: 18,
    name: "John Doe19",
    email: "johndoe19@gmail.com",
    rank: "employee"
  },
  {
    id: 19,
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

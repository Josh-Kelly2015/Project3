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
  },
  {
    Name: "John Doe3",
    Email: "johndoe3@gmail.com",
    Rank: ["admin", "manager", "entry"]
  },
  {
    Name: "John Doe4",
    Email: "johndoe4@gmail.com",
    Rank: ["admin", "manager", "entry"]
  },
  {
    Name: "John Doe5",
    Email: "johndoe5@gmail.com",
    Rank: ["admin", "manager", "entry"]
  },
  {
    Name: "John Doe6",
    Email: "johndoe6@gmail.com",
    Rank: ["admin", "manager", "entry"]
  },
  {
    Name: "John Doe7",
    Email: "johndoe7@gmail.com",
    Rank: ["admin", "manager", "entry"]
  },
  {
    Name: "John Doe8",
    Email: "johndoe8@gmail.com",
    Rank: ["admin", "manager", "entry"]
  },
  {
    Name: "John Doe9",
    Email: "johndoe9@gmail.com",
    Rank: ["admin", "manager", "entry"]
  },
  {
    Name: "John Doe10",
    Email: "johndoe10@gmail.com",
    Rank: ["admin", "manager", "entry"]
  },
  {
    Name: "John Doe11",
    Email: "johndoe11@gmail.com",
    Rank: ["admin", "manager", "entry"]
  },
  {
    Name: "John Doe12",
    Email: "johndoe12@gmail.com",
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

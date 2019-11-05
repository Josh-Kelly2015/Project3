const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const ProjectSchema = [
  {
    Name: "Seed Project 1",
    Employees: [
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
    ],
    Active: true
  },
  {
    Name: "Seed Project 2 ",
    Active: true,
    Employees: [
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
    ]
  }
];

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(ProjectSchema))
  .then(data => {
    console.log(data.result.n + " project records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

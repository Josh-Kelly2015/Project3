const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const ProjectSchema = [
  {
    ProjectName: "Seed Project 1",
    ProjectNumber: 0001,
    DaysAssigned: [],
    EmployeesAssigned: [],
    Active: true
  },
  {
    ProjectName: "Seed Project 2 ",
    ProjectNumber: 0002,
    DaysAssigned: [],
    EmployeesAssigned: [],
    Active: true
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

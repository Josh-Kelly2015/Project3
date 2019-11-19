const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const ProjectSchema = [
  {
    name: "Project One",
    assignedUsers: []
  },
  {
    name: "Project Two",
    assignedUsers: []
  },
  {
    name: "Project Three",
    assignedUsers: []
  },
  {
    name: "Project Four",
    assignedUsers: []
  },
  {
    name: "Project Five",
    assignedUsers: []
  },
  {
    name: "Project Six",
    assignedUsers: []
  },
  {
    name: "Project Seven",
    assignedUsers: []
  },
  {
    name: "Project Eight",
    assignedUsers: []
  },
  {
    name: "Project Nine",
    assignedUsers: []
  },
  {
    name: "Project Ten",
    assignedUsers: []
  },
  {
    name: "Project Eleven",
    assignedUsers: []
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

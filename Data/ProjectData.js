const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");
<<<<<<< HEAD
=======

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
>>>>>>> b6d8c461b621a660f1881b21fb54b6a10d0a799c

const ProjectSchema = [
  {
    projectName: "Project Name One",
    // active: true,
    employees: []
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
<<<<<<< HEAD


=======
>>>>>>> b6d8c461b621a660f1881b21fb54b6a10d0a799c

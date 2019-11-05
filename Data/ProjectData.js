const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const ProjectSchema = [
  {
    name: "Project Name One",
    Active: true,
    DatesActive: [{ days_id: 0, day: "Monday" }, { days_id: 4, day: "Friday" }],
    EmployeesAssigned: [
      {
        employees_id: 0,
        name: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      }
    ]
  },

  {
    name: "Project Name Two",
    Active: true,
    DatesActive: [{ days_id: 0, day: "Monday" }, { days_id: 4, day: "Friday" }],
    EmployeesAssigned: [
      {
        employees_id: 0,
        name: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
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

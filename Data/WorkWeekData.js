const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const WorkWeekSchema = [
  {
    Name: "Work Week One",
    Days: [
      {
        Name: "Monday",
        Projects: [
          // {
          //   Name: "Seed Project 1",
          //   Active: true,
          //   Employees: [
          //     {
          //       Name: "John Doe1",
          //       Email: "johndoe1@gmail.com",
          //       Rank: ["admin", "manager", "entry"]
          //     },
          //     {
          //       Name: "John Doe2",
          //       Email: "johndoe2@gmail.com",
          //       Rank: ["admin", "manager", "entry"]
          //     }
        ]
      },
      {
        Name: "Tuesday",
        Projects: [
          {
            Name: "Seed Project 2 ",
            Active: true,
            Employees: [
              // {
              //   Name: "John Doe1",
              //   Email: "johndoe1@gmail.com",
              //   Rank: ["admin", "manager", "entry"]
              // },
              // {
              //   Name: "John Doe2",
              //   Email: "johndoe2@gmail.com",
              //   Rank: ["admin", "manager", "entry"]
              // }
            ]
          }
        ]
      }
    ]
  }
];
db.WorkWeek.remove({})
  .then(() => db.WorkWeek.collection.insertMany(WorkWeekSchema))
  .then(data => {
    console.log(data.result.n + " work week records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const WorkDaySchema = [
  {
    Name: "Monday",
    Projects: [
      {
        Name: "Seed Project 1",
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
    ]
  },
  {
    Name: "Tuesday",
    Projects: [
      {
        Name: "Seed Project 1",
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
    ]
  },
  {
    Name: "Wedneday",
    Projects: [
      {
        Name: "Seed Project 1",
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
    ]
  },
  {
    Name: "Thursday",
    Projects: [
      {
        Name: "Seed Project 1",
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
    ]
  },
  {
    Name: "Friday",
    Projects: [
      {
        Name: "Seed Project 1",
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
    ]
  },
  {
    Name: "Saturday",
    Projects: [
      {
        Name: "Seed Project 1",
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
    ]
  },
  {
    Name: "Sunday",
    Projects: [
      {
        Name: "Seed Project 1",
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
      },
      {
        Name: "Seed Project 2 ",
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
    ]
  }
];
db.WorkDay.remove({})
  .then(() => db.WorkDay.collection.insertMany(WorkDaySchema))
  .then(data => {
    console.log(data.result.n + " work day records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

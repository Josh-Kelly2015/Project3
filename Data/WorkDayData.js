const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const WorkDaySchema = [
  {
    Name: "Monday",
    Projects: [
      {
        Name: "Seed Project 1",
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
        ],
        Active: true
      },
      {
        Name: "Seed Project 2 ",
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
        ],
        Active: true
      }
    ]
  },
  {
    Name: "Tuesday",
    Projects: [
      {
        Name: "Seed Project 1",
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
        ],
        Active: true
      },
      {
        Name: "Seed Project 2 ",
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
        ],
        Active: true
      }
    ]
  },
  {
    Name: "Wedneday",
    Projects: [
      {
        Name: "Seed Project 1",
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
        ],
        Active: true
      },
      {
        Name: "Seed Project 2 ",
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
        ],
        Active: true
      }
    ]
  },
  {
    Name: "Thursday",
    Projects: [
      {
        Name: "Seed Project 1",
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
        ],
        Active: true
      },
      {
        Name: "Seed Project 2 ",
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
        ],
        Active: true
      }
    ]
  },
  {
    Name: "Friday",
    Projects: [
      {
        Name: "Seed Project 1",
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
        ],
        Active: true
      },
      {
        Name: "Seed Project 2 ",
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
        ],
        Active: true
      }
    ]
  },
  {
    Name: "Saturday",
    Projects: [
      {
        Name: "Seed Project 1",
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
        ],
        Active: true
      },
      {
        Name: "Seed Project 2 ",
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
        ],
        Active: true
      }
    ]
  },
  {
    Name: "Sunday",
    Projects: [
      {
        Name: "Seed Project 1",
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
        ],
        Active: true
      },
      {
        Name: "Seed Project 2 ",
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
        ],
        Active: true
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

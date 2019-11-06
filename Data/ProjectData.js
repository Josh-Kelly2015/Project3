const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const ProjectSchema = [
  {
    name: "Project Name One",
    active: true,
    assignedEmployees: [
      {
        name: "John Doe9",
        email: "johndoe9@gmail.com",
        rank: "manager"
      },
      {
        name: "John Doe10",
        email: "johndoe10@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe11",
        email: "johndoe11@gmail.com",
        rank: "manager"
      },
      {
        name: "John Doe12",
        email: "johndoe12@gmail.com",
        rank: "field"
      }
    ]
  },

  {
    name: "Project Name Two",
    active: true,
    assignedEmployees: [
      {
        name: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        name: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe8",
        email: "johndoe8@gmail.com",
        rank: "field"
      }
    ]
  },
  {
    name: "Project Name Three",
    active: true,
    assignedEmployees: [
      {
        name: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        name: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe8",
        email: "johndoe8@gmail.com",
        rank: "field"
      }
    ]
  },
  {
    name: "Project Name Four",
    active: true,
    assignedEmployees: [
      {
        name: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        name: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe8",
        email: "johndoe8@gmail.com",
        rank: "field"
      }
    ]
  },
  {
    name: "Project Name Five",
    active: true,
    assignedEmployees: [
      {
        name: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        name: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe8",
        email: "johndoe8@gmail.com",
        rank: "field"
      }
    ]
  },
  {
    name: "Project Name Six",
    active: true,
    assignedEmployees: [
      {
        name: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        name: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe8",
        email: "johndoe8@gmail.com",
        rank: "field"
      }
    ]
  },
  {
    name: "Project Name Seven",
    active: true,
    assignedEmployees: [
      {
        name: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        name: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        name: "John Doe8",
        email: "johndoe8@gmail.com",
        rank: "field"
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

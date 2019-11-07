const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const ProjectSchema = [
  {
    projectName: "Project Name One",
    // active: true,
    assignedEmployees: [
      {
        employeeName: "John Doe9",
        email: "johndoe9@gmail.com",
        rank: "manager"
      },
      {
        employeeName: "John Doe10",
        email: "johndoe10@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe11",
        email: "johndoe11@gmail.com",
        rank: "manager"
      },
      {
        employeeName: "John Doe12",
        email: "johndoe12@gmail.com",
        rank: "field"
      }
    ]
  },

  {
    projectName: "Project Name Two",
    // active: true,
    assignedEmployees: [
      {
        employeeName: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        employeeName: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe8",
        email: "johndoe8@gmail.com",
        rank: "field"
      }
    ]
  },
  {
    projectName: "Project Name Three",
    // active: true,
    assignedEmployees: [
      {
        employeeName: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        employeeName: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe8",
        email: "johndoe8@gmail.com",
        rank: "field"
      }
    ]
  },
  {
    projectName: "Project Name Four",
    // active: true,
    assignedEmployees: [
      {
        employeeName: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        employeeName: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe8",
        email: "johndoe8@gmail.com",
        rank: "field"
      }
    ]
  },
  {
    projectName: "Project Name Five",
    // active: true,
    assignedEmployees: [
      {
        employeeName: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        employeeName: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe8",
        email: "johndoe8@gmail.com",
        rank: "field"
      }
    ]
  },
  {
    projectName: "Project Name Six",
    // active: true,
    assignedEmployees: [
      {
        employeeName: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        employeeName: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe8",
        email: "johndoe8@gmail.com",
        rank: "field"
      }
    ]
  },
  {
    projectName: "Project Name Seven",
    // active: true,
    assignedEmployees: [
      {
        employeeName: "John Doe0",
        email: "johndoe0@gmail.com",
        rank: "admin"
      },
      {
        employeeName: "John Doe6",
        email: "johndoe6@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe7",
        email: "johndoe7@gmail.com",
        rank: "field"
      },
      {
        employeeName: "John Doe8",
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

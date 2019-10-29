const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const projectSeed = [
  {
    projectName: "Seed Project Number 1",
    projectNumber: "2000",
    location: " Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 2",
    projectNumber: "2000",
    location: " Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 3",
    projectNumber: "2000",
    location: " Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 4",
    projectNumber: "2000",
    location: " Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 5",
    projectNumber: "2000",
    location: " Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 6",
    projectNumber: "2000",
    location: " Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 7",
    projectNumber: "2000",
    location: " Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 8",
    projectNumber: "2000",
    location: "209 Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 9",
    projectNumber: "2000",
    location: "Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 10",
    projectNumber: "2000",
    location: "Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 11",
    projectNumber: "2000",
    location: "Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 12",
    projectNumber: "2000",
    location: "Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 13",
    projectNumber: "2000",
    location: "Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 14",
    projectNumber: "2000",
    location: " Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 15",
    projectNumber: "2000",
    location: " Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 16",
    projectNumber: "2000",
    location: " Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  },
  {
    projectName: "Seed Project Number 17",
    projectNumber: "2000",
    location: " Peachtree St NE Atlanta, Georgia 30303",
    contact: "name: Ol dude from that way ago, phone: 134523431525342432, ",
    materials:
      "1000 ft blue Comscope category 6A, 3 bundles of ceiling grid wire, 200 plastic ceiling hooks",
    employees:
      "John Doe1, John Doe12, John Doe15, John Doe12, John Doe3, John Doe3,John Doe3,John Doe3,John Doe3,John Doe3,John Doe3, ",
    timescale: "Monday 10/28/2019 - Monday 12/2/2019",
    dateWorked:
      "Monday 10/28/2019, Tuesday 10/29/2019, Wednesday 10/30/2019, Thursday 10/31/2019, Friday 12/01/2019, Monday 11/02/2019, Tuesday 11/03/2019,",
    timeWorked:
      "8 hours 15 min, 8 hours 15 min, 8 hours 15 min, 8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,8 hours 15 min,"
  }
];

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " project records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

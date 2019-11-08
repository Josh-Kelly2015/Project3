const router = require("express").Router();
const EmployeeRoutes = require("./Employee");
const ProjectRoutes = require("./Project");
// const WorkDayRoutes = require("./WorkDay");
router.use("/employees", EmployeeRoutes);
router.use("/projects", ProjectRoutes);
// router.use("/workday", WorkDayRoutes);

module.exports = router;

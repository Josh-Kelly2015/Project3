const router = require("express").Router();
const EmployeeRoutes = require("./Employee");
const ProjectRoutes = require("./Project");
const WorkDayRoutes = require("./WorkDay");
const WorkWeekRoutes = require("./WorkWeek");
router.use("/employee", EmployeeRoutes);
router.use("/project", ProjectRoutes);
router.use("/workday", WorkDayRoutes);
router.use("/workweek", WorkWeekRoutes);

module.exports = router;

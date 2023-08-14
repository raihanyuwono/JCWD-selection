const { mAuth, isAdmin } = require("../middelwares");
const { cPayroll } = require("../contollers");

const router = require("express").Router();

// Get Payroll logs (monthly/yearly) - list
router.get("/log", mAuth, isAdmin, cPayroll.getAllLogs);
// Get Payroll logs (monthly/yearly) - list peruser
router.get("/log/:id", mAuth, isAdmin, cPayroll.getLogs);
// Get Payroll logs (monthly/yearly) - total list
router.get("/total", mAuth, isAdmin, cPayroll.getAllTotal);
// Get Payroll logs (monthly/yearly) - total list per user
router.get("/total", mAuth, isAdmin, cPayroll.getTotal);

module.exports = router;

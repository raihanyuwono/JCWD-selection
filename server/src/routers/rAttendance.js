const { mAuth } = require("../middelwares");
const { cAttendance } = require("../contollers");
const router = require("express").Router();

// Clock-in -> Create new attendance, check shift,
// set payroll with salary from table salary
router.post("/clock", mAuth, cAttendance.clockIn);
// Clock-out -> update clock-out
router.patch("/clock", mAuth, cAttendance.clockOut);
// Get logs user
router.get("/", mAuth, cAttendance.getAttendance);
// Check clock
router.get("/clock/:token", mAuth, cAttendance.checkClock);

module.exports = router;

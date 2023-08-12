const router = require("express").Router();
const { cAuth } = require("../contollers");

// Login
router.post("/login", cAuth.login);
// Create new user
router.post("/user", cAuth.createUser);
// Edit new user
router.patch("/user", cAuth.editUser);

module.exports = router;

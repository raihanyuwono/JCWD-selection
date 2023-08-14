const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env"),
});
const { rAuth, rUser, rAttendance, rPayroll } = require("./routers");

const PORT = process.env.PORT || 8000;
const WHITELIST = process.env.WHITELIST;
const app = express();

app.use(
    cors({
        origin: [WHITELIST && WHITELIST.split(",")],
    })
);

// require("./models").sequelize.sync({ alter: true });
app.use(express.json());

app.use("/api/auth", rAuth);
app.use("/api/users", rUser);
app.use("/api/attendances", rAttendance);
app.use("/api/payrolls", rPayroll);

// Not found
app.use((err, req, res, next) => {
    if (req.path.includes("/api/"))
        res.status(404).json({ message: "Not Found!" });
    else next();
});

// Error
app.use((err, req, res, next) => {
    if (req.path.includes("/api/")) res.status(500).json({ message: "Error!" });
    else next();
});

app.listen(PORT, (err) => {
    if (err) console.log(`Error: ${err}`);
    else console.log(`APP RUNNING at ${PORT} ✅`);
});

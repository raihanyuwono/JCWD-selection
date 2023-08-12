const path = require("path");
const express = require("express");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env"),
});
const { rAuth, rUser } = require("./routers");

const PORT = process.env.PORT || 8000;
const app = express();

// require("./models").sequelize.sync({ alter: true });
app.use(express.json());

app.use("/api/auth", rAuth);
app.use("/api/users", rUser);

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

const path = require("path");
const { messages } = require("../../helpers");
const db = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config({
    path: path.resolve(__dirname, "../../.env"),
});

const attendances = db["attendance"];
const KEY_JWT = process.env.KEY_JWT;

function isValid(last, current) {
    function checkTime(maxHour, curHour, inTime) {
        if (!inTime) return false;
        return curHour < maxHour;
    }
    // max 4h overtime
    const maxHour = last["shift"] === "day" ? 19 : 3;
    const lastDate = new Date(last["clock_in"]).getDate();
    const curHour = current.getHours() % 24;
    const curDate = current.getDate();
    switch (last["shift"]) {
        case "day":
            return checkTime(maxHour, curHour, lastDate === curDate);
        case "night":
            return checkTime(
                maxHour,
                curHour === 23 ? -1 : curHour,
                lastDate + 1 === curDate
            );
        default:
            return false;
    }
}

async function checkClock(curToken) {
    if (!curToken || curToken === "null")
        return messages.error("500", "No timer found");
    const { id } = jwt.verify(curToken, KEY_JWT);
    const currentDate = new Date();
    const lastAttendance = await attendances.findOne({ where: { id } });
    // If already clockout
    if (lastAttendance["clock_out"]) return messages.error(500, "Already out");
    const valid = isValid(lastAttendance, currentDate);
    if (!valid) return messages.error(400, "Timeout");
    // Update token if valid
    const payload = { id: lastAttendance["id"] };
    const token = jwt.sign(payload, KEY_JWT);
    return messages.success("", { token });
}

module.exports = checkClock;

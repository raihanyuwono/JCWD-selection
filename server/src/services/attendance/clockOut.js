const path = require("path");
const { messages } = require("../../helpers");
const db = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config({
    path: path.resolve(__dirname, "../../.env"),
});

const attendances = db["attendance"];
const payrolls = db["payroll"];
const salaries = db["salary"];
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

async function clockOut(timerToken) {
    if (!timerToken || timerToken === "null")
        return messages.error("500", "No timer found");
    const { id } = jwt.verify(timerToken, KEY_JWT);
    const currentDate = new Date();
    const lastAttendance = await attendances.findOne({ where: { id } });
    if (lastAttendance["clock_out"]) return messages.error(500, "Already out");
    const valid = isValid(lastAttendance, currentDate);
    if (!valid) return messages.error(400, "Timeout");
    return await db.sequelize.transaction(async function (t) {
        const salary = await salaries.findOne({
            where: { id_user: lastAttendance["id_user"] },
        });
        await attendances.update(
            { clock_out: currentDate },
            { where: { id: lastAttendance["id"] }, transaction: t }
        );
        await payrolls.update(
            { salary: salary["amount"] },
            { where: { id_attendance: lastAttendance["id"] }, transaction: t }
        );
        return messages.success("Successfully updated");
    });
}

module.exports = clockOut;

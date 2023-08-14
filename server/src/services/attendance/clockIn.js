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

function getShift(hour) {
    if (hour >= 7 && hour < 15) return "day";
    if (hour >= 15 && hour < 23) return "night";
    return false;
}

function setAttributes(id_user) {
    // Day : 7-15, Night: 15-23 - Over max 4h
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const shift = getShift(hour);
    if (!shift) return false;
    return {
        id_user,
        clock_in: currentDate,
        shift,
    };
}

async function clockIn(account) {
    const { id } = account;
    const attr = setAttributes(id);

    if (!attr) return messages.error(400, "You cannot start in this time");
    let salary = await salaries.findOne({ where: { id_user: id } });
    salary = parseInt(salary["amount"] * 0.5);

    return await db.sequelize.transaction(async function (t) {
        const attendance = await attendances.create(attr, { transaction: t });
        await payrolls.create(
            {
                id_attendance: attendance["id"],
                salary,
            },
            { transaction: t }
        );
        const payload = { id: attendance["id"] };
        const token = jwt.sign(payload, KEY_JWT);
        return messages.success("Successfully start the clock", {
            token,
            shift: attendance["shift"],
        });
    });
}

module.exports = clockIn;

const path = require("path");
const { messages } = require("../../helpers");
const db = require("../../models");

const attendances = db["attendance"];

async function getAttendance(account) {
    const { id } = account;
    const result = await attendances.findAll({
        where: { id_user: id },
        order: [["created_at", "DESC"]],
    });
    return messages.success("", result);
}

module.exports = getAttendance;

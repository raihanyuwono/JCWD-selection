const { messages } = require("../../helpers");
const db = require("../../models");

const attendances = db["attendance"];
const payrolls = db["payroll"];

const include = [
    {
        model: payrolls,
        attributes: ["salary"],
    },
];

async function getAttendance(account) {
    const { id } = account;
    const result = await attendances.findAll({
        include,
        order: [["created_at", "DESC"]],
        where: { id_user: id },
    });
    return messages.success("", result);
}

module.exports = getAttendance;

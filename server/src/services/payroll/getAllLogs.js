const { fn, col } = require("sequelize");
const { messages } = require("../../helpers");
const db = require("../../models");

const attendances = db["attendance"];
const payrolls = db["payroll"];
const users = db["user"];

function setAttributes() {
    return {
        include: [
            [fn("YEAR", col("attendance.created_at")), "date"],
            [fn("SUM", col("payroll.salary")), "total_salary"],
        ],
        exclude: [
            "id",
            "clock_in",
            "clock_out",
            "shift",
            "created_at",
            "updated_at",
        ],
    };
}

const include = [
    { model: users, attributes: ["username"] },
    { model: payrolls, attributes: [] },
];

const order = [["created_at", "DESC"]];
const group = [["date", "id_user"]];

async function getAllLogs(queries) {
    // const
    const result = await attendances.findAll({
        attributes: setAttributes(),
        include,
        order,
        group,
    });
    return messages.success("", result);
}

module.exports = getAllLogs;

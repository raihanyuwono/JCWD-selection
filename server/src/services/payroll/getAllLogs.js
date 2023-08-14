const { fn, col } = require("sequelize");
const { messages } = require("../../helpers");
const db = require("../../models");

const attendances = db["attendance"];
const payrolls = db["payroll"];
const users = db["user"];

function setAttributes(filter) {
    return {
        include: [
            [
                fn(
                    filter === "year" ? "YEAR" : "MONTH",
                    col("attendance.created_at")
                ),
                "date",
            ],
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
    console.log("LOGS QUERIES", queries);
    const { filter_by, date } = queries;
    const result = await attendances.findAll({
        attributes: setAttributes(filter_by),
        include,
        order,
        group,
        where: {

        }
    });
    return messages.success("", result);
}

module.exports = getAllLogs;

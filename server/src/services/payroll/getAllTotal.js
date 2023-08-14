const { fn, col } = require("sequelize");
const db = require("../../models");
const { messages } = require("../../helpers");

const attendances = db["attendance"];
const payrolls = db["payroll"];

function setAttributes() {
    return {
        include: [
            [fn("DATE", col("attendance.created_at")), "date"],
            [fn("SUM", col("payroll.salary")), "total_payroll"],
        ],
        exclude: [
            "id",
            "id_user",
            "clock_in",
            "clock_out",
            "shift",
            "created_at",
            "updated_at",
        ],
    };
}

const include = [{ model: payrolls, attributes: [] }];

const order = [["date", "ASC"]];
const group = [["date"]];

async function getAllTotal(queries) {
    console.log("QUERIES", queries)
    const result = await attendances.findAll({
        attributes: setAttributes(),
        include,
        order,
        group,
    });
    return messages.success("", result);
}

module.exports = getAllTotal;

const { messages } = require("../../helpers");
const db = require("../../models");

const salaries = db["salary"];

async function changeSalary(id_user, amount) {
    return await db.sequelize.transaction(async function (t) {
        await salaries.update(
            { amount },
            { where: { id_user }, transaction: t }
        );
        return messages.success("Successfully update user salary");
    });
}

module.exports = changeSalary;

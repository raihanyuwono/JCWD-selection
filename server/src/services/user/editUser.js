const { messages } = require("../../helpers");
const db = require("../../models");

const users = db["user"];
const salaries = db["salary"];

async function editUser(attr) {
    const { id_user } = attr;
    delete attr["id_user"];
    return await db.sequelize.transaction(async function (t) {
        if (attr["amount"])
            await salaries.update(attr, { where: { id_user }, transaction: t });
        else
            await users.update(attr, {
                where: { id: id_user },
                transaction: t,
            });
        return messages.success("Updated successfully");
    });
}

module.exports = editUser;

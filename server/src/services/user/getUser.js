const { messages } = require("../../helpers");
const db = require("../../models");

const users = db["user"];
const salaries = db["salary"];

function setInclude(role) {
    if (role !== "admin") return [];
    return [{ model: salaries,  attributes: ["amount"]}];
}

function setAttributes(role) {
    const exclude = ["password", "id_role", "updated_at"];
    if (role !== "admin") exclude.push("id");
    return { exclude };
}

async function getUser(account, id) {
    const { role } = account;
    const user = await users.findOne({
        attributes: setAttributes(role),
        include: setInclude(role),
        where: { id },
    });
    return messages.success("", user);
}

module.exports = getUser;

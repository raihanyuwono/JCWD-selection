const { messages } = require("../../helpers");
const db = require("../../models");

const users = db["user"];
const salaries = db["salary"];
const roles = db["role"];

const oInclude = [
    {
        model: roles,
        attributes: [],
        where: {name: "employee"},
    },
    {
        model: salaries,
        attributes: ["amount"]
    }
]

async function getUsers(){
    const result = await users.findAll({
        attributes: {
            exclude: ["id_role", "password"],
        },
        include: oInclude,
    })
    return messages.success("", result);
}

module.exports = getUsers;
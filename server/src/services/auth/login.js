const path = require("path");
const { Op } = require("sequelize");
const db = require("../../models");
const { messages } = require("../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({
    path: path.resolve(__dirname, "../../../.env"),
});

const users = db["user"];
const KEY_JWT = process.env.KEY_JWT;

async function findUser(id) {
    return await users.findOne({
        where: {
            [Op.or]: [{ username: id }, { email: id }],
        },
    });
}

async function login(identifier, password) {
    const account = findUser(identifier);
    if (!account) return messages.error(500, "Account not found");

    const compared = await bcrypt.compare(password, account["password"]);
    if (!compared) return messages.error(400, "Invalid username or password");

    const payload = { id: account["id"] };
    const token = jwt.sign(payload, KEY_JWT);

    return messages.success("Login success", { token });
}

module.exports = login;
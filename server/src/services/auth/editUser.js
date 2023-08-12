const path = require("path");
const jwt = require("jsonwebtoken");
const { messages } = require("../../helpers");
const db = require("../../models");
const bcrypt = require("bcrypt");
require("dotenv").config({
    path: path.resolve("../../../.env"),
});

const KEY_JWT = process.env.KEY_JWT;
const users = db["user"];

async function passHass(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

async function editUser(token, attributes) {
    const payload = jwt.verify(token, KEY_JWT);
    if (!payload) return messages.error(400, "Wrong token");
    const { email } = payload;

    const isExist = await users.findOne({ where: { email } });
    if (isExist) return messages.error(500, "User has been registered");

    const { name, username, phone, password, birthday } = attributes;
    const pass = await hashPass(password);

    return await db.sequelize.transaction(async function (t) {
        await users.create(
            {
                name,
                username,
                email,
                phone,
                password: pass,
                birthday,
            },
            { transaction: t }
        );
        return messages.success("Your data successfully added");
    });
}

module.exports = editUser;

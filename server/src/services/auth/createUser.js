const path = require("path");
const db = require("../../models");
const jwt = require("jsonwebtoken");
const sendMail = require("../../helpers/transporter");
const { messages } = require("../../helpers");
require("dotenv").config({
    path: path.resolve(__dirname, "../../../.env"),
});

const users = db["user"];
const FE_URL = process.env.FE_URL;
const KEY_JWT = process.env.KEY_JWT;

async function createUser(email) {
    const isExist = await users.findOne({ where: { email } });
    if (isExist) return messages.error(500, "Email has been registered");
    
    const payload = { email };
    const token = jwt.sign(payload, KEY_JWT, {
        expiresIn: "24h",
    });
    const redirect = `${FE_URL}/register/${token}`;

    await sendMail(email, "Complete your data", { redirect });
    return messages.success("Success send email to the employee");
}

module.exports = createUser;

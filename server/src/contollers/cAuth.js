const { sAuth } = require("../services");
const { messages } = require("../helpers");

async function login(req, res) {
    try {
        const { identifier, password } = req.body;
        const result = await sAuth.login(identifier, password);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createUser(req, res) {
    try {
        const { email } = req.body;
        const result = await sAuth.craeteUser(email);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function editUser(req, res) {
    try {
        let token = req.headers.authorization;
        if (!token || token == "null")
            return res.status(400).json({ message: "Not Authorized" });

        token = token.split(" ")[1];
        const attributes = req.body;
        const result = await sAuth.editUser(token, attributes);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    login,
    createUser,
    editUser,
};

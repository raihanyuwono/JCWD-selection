const { messages } = require("../helpers");
const { sUser } = require("../services");

async function getUser(req, res) {
    try {
        const { account } = req;
        const { id } = req.params;
        const result = await sUser.getUser(account, id);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getUsers(req, res) {
    try {
        const result = await sUser.getUsers();
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function changeSalary(req, res) {
    try {
        const { id, amount } = req.body;
        const result = await sUser.changeSalary(id, amount);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getUser,
    getUsers,
    changeSalary,
};

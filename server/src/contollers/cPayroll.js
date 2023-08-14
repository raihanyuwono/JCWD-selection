const { messages } = require("../helpers");
const { sPayroll } = require("../services");

async function getAllLogs(req, res) {
    try {
        const queries = req.query;
        const result = await sPayroll.getAllLogs(queries);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getLogs(req, res) {
    try {
        const queries = req.query;
        const { id } = req.params;
        const result = await sPayroll.getLogs(id, queries);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAllTotal(req, res) {
    try {
        const queries = req.query;
        const { id } = req.params;
        const result = await sPayroll.getAllTotal(id, queries);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getTotal(req, res) {
    try {
        const queries = req.query;
        const { id } = req.params;
        const result = await sPayroll.getTotal(id, queries);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getLogs,
    getAllLogs,
    getTotal,
    getAllTotal,
};

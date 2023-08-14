const { messages } = require("../helpers");
const { sAttendance } = require("../services");

async function clockIn(req, res) {
    try {
        const { account } = req;
        const result = await sAttendance.clockIn(account);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function clockOut(req, res) {
    try {
        const {token} = req.body;
        const result = await sAttendance.clockOut(token);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function checkClock(req, res) {
    try {
        const { token } = req.params;
        const result = await sAttendance.checkClock(token);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAttendance(req, res) {
    try {
        const { account } = req;
        const result = await sAttendance.getAttendance(account);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    clockIn,
    clockOut,
    checkClock,
    getAttendance,
};

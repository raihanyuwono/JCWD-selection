import axios from "axios";
import ToastNotification from "../components/ToastNotification";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const ATTENDANCE_URL = `${BASE_URL}/attendances`;
const TOKEN = localStorage.getItem("token");
const HEADERS = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

async function clockIn(toast) {
    try {
        const response = await axios.post(
            `${ATTENDANCE_URL}/clock`,
            {},
            HEADERS
        );
        console.log("API CLOCK-IN", response.data);
        ToastNotification(toast, {
            title: response.data.message,
            status: response.status,
        });
        return response.data;
    } catch (error) {
        ToastNotification(toast, {
            title: error.response.data.message,
            status: error.response.status,
        });
    }
}

async function clockOut(toast) {
    const token = localStorage.getItem("timer");
    try {
        const response = await axios.patch(
            `${ATTENDANCE_URL}/clock`,
            { token },
            HEADERS
        );
        ToastNotification(toast, {
            title: response.data.message,
            status: response.status,
        });
        return response.data;
    } catch (error) {
        ToastNotification(toast, {
            title: error.response.data.message,
            status: error.response.status,
        });
    }
}

async function checkClock(toast) {
    try {
        const token = localStorage.getItem("timer");
        const response = await axios.get(
            `${ATTENDANCE_URL}/clock/${token}`,
            HEADERS
        );
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function getLogs() {
    try {
        const response = await axios.get(ATTENDANCE_URL, HEADERS);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

export { clockIn, clockOut, checkClock, getLogs };

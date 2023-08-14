import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PAYROLL_URL = `${BASE_URL}/payrolls`;
const TOKEN = localStorage.getItem("token");
const HEADERS = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

async function getAllLogs() {
    try {
        const response = await axios.get(`${PAYROLL_URL}/log`, HEADERS);
        console.log("API GET ALL LOGS >> ", response.data);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function getAllTotal() {
    try {
        const response = await axios.get(`${PAYROLL_URL}/total`, HEADERS);
        console.log("API GET ALL TOTAL >> ", response.data);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

export { getAllLogs, getAllTotal };

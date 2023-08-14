import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PAYROLL_URL = `${BASE_URL}/payrolls`;
const TOKEN = localStorage.getItem("token");
const HEADERS = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

function createQuery(queries = {}) {
    // title, id_category, order_by, order, page=1, limit=10
    // if (!queries["page"]) queries["page"] = 1;
    // if (!queries["limit"]) queries["limit"] = 10;
    let query = "";
    for (const key in queries) {
        query += `${key}=${queries[key]}&`;
    }
    return query.replace(/&$/, "");
}

async function getAllLogs(queries) {
    try {
        const query = createQuery(queries);
        console.log(`${PAYROLL_URL}/log?${query}`);
        const response = await axios.get(
            `${PAYROLL_URL}/log?${query}`,
            HEADERS
        );
        console.log("API GET ALL LOGS >> ", response.data);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function getAllTotal(queries) {
    try {
        const query = createQuery(queries);
        const response = await axios.get(
            `${PAYROLL_URL}/total?${query}`,
            HEADERS
        );
        console.log("API GET ALL TOTAL >> ", response.data);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

export { getAllLogs, getAllTotal };

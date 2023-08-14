import axios from "axios";
import ToastNotification from "../components/ToastNotification";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const USER_URL = `${BASE_URL}/users`;
const TOKEN = localStorage.getItem("token");
const HEADERS = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

async function getUsers() {
    try {
        const response = await axios.get(USER_URL, HEADERS);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function getUser(id) {
    try {
        const response = await axios.get(`${USER_URL}/${id}`, HEADERS);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function changeSalary(toast, id, amount) {
    try {
        const params = { id, amount };
        const response = await axios.patch(USER_URL, params, HEADERS);
        ToastNotification(toast, {
            title: response.data.message,
            status: response.status,
        });
        return response;
    } catch (error) {
        ToastNotification(toast, {
            title: error.response.data.message,
            status: error.response.status,
        });
    }
}

export { getUsers, getUser, changeSalary };

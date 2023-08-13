import axios from "axios";
import ToastNotification from "../components/ToastNotification";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const AUTH_URL = `${BASE_URL}/auth`;
const TOKEN = localStorage.getItem("token");
const HEADERS = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

async function login(toast, identifier, password) {
    try {
        const response = await axios.post(`${AUTH_URL}/login`, {
            identifier,
            password,
        });
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

async function newUser(toast, email) {
    try {
        const response = await axios.post(
            `${AUTH_URL}/user`,
            {
                email,
            },
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

async function register(toast, token, attributes) {
    try {
        const response = await axios.patch(`${AUTH_URL}/user`, attributes, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
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

export { login, newUser, register };

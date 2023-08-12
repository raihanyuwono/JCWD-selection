import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const AUTH_URL = `${BASE_URL}/auth`;
const TOKEN = localStorage.getItem("token");
const HEADERS = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

async function login(identifier, password) {
    try {
        const response = await axios.post(`${AUTH_URL}/login`, {
            identifier,
            password,
        });
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function newUser(email) {
    try {
        const response = await axios.post(
            `${AUTH_URL}/user`,
            {
                email,
            },
            HEADERS
        );
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

async function fillData(token, attributes) {
    try {
        const response = await axios.patch(`${AUTH_URL}/user`, attributes, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}

export { login, newUser, fillData };

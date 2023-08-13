import { useEffect, useState } from "react";
import DashboardAdmin from "../components/DashboardAdmin";
import DashboardEmployee from "../components/DashboardEmployee";
import Navbar from "../components/Navbar";
import jwt_decode from "jwt-decode";
import { Flex } from "@chakra-ui/react";

const container = {
    w: "100vw",
    h: "full",
    direction: "column",
};

function pickDashboard(role) {
    switch (role) {
        case "admin":
            return <DashboardAdmin />;
        case "employee":
            return <DashboardEmployee />;
        default:
            return;
    }
}

function Dashboard() {
    const [role, setRole] = useState("admin");

    function checkTokenLogin() {
        const token = localStorage.getItem("token");
        // if (!token) return document.location.href = "/login";

        // const decoded = jwt_decode(token);
        // setRole(decoded["role"]["name"]);
    }

    useEffect(() => {
        checkTokenLogin();
    }, []);

    return (
        <Flex {...container}>
            <Navbar />
            {pickDashboard(role)}
        </Flex>
    );
}

export default Dashboard;

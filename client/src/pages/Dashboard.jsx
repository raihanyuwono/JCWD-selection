import { useEffect, useState } from "react";
import DashboardAdmin from "../components/DashboardAdmin";
import DashboardEmployee from "../components/DashboardEmployee";
import Navbar from "../components/Navbar";
import jwt_decode from "jwt-decode";
import { Flex } from "@chakra-ui/react";

const container = {
    w: "full",
    minH: "full",
};

function Dashboard() {
    const [role, setRole] = useState("");

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
            {/* {role === "admin" ? <DashboardAdmin /> : <DashboardEmployee />} */}
        </Flex>
    );
}

export default Dashboard;

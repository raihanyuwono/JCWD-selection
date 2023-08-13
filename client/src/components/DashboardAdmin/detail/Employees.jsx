import { useEffect, useState } from "react";
import { getUsers } from "../../../api/user";
import EmployeeCard from "./EmployeeCard";
import { Grid } from "@chakra-ui/react";

const dummy = [
    { username: "Kashtira Shang-Ira" },
    { username: "Kashtira Shang-Ira" },
    { username: "Kashtira Shang-Ira" },
    { username: "Kashtira Shang-Ira" },
    { username: "Kashtira Shang-Ira" },
    { username: "Kashtira Shang-Ira" },
    { username: "Kashtira Shang-Ira" },
    { username: "Kashtira Shang-Ira" },
    { username: "Kashtira Shang-Ira" },
    { username: "Kashtira Shang-Ira" },
    { username: "Kashtira Shang-Ira" },
];

const container = {
    w: "full",
    gap: "8px",
    templateColumns: {
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
    },
};

function Employees() {
    const [employees, setEmployees] = useState([]);

    async function fetchEmployees() {
        const { data } = await getUsers();
        setEmployees(data);
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <Grid {...container}>
            {employees.map((employee, index) => (
                <EmployeeCard user={employee} key={index} />
            ))}
        </Grid>
    );
}

export default Employees;

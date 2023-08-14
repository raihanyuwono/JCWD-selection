import { useEffect, useState } from "react";
import { getUsers } from "../../../api/user";
import EmployeeCard from "./EmployeeCard";
import { Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux"

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
    const triggerUpdate = useSelector((state) => state.info.infoTrigger);

    async function fetchEmployees() {
        const { data } = await getUsers();
        setEmployees(data);
    }

    useEffect(() => {
        fetchEmployees();
    }, [triggerUpdate]);

    return (
        <Grid {...container}>
            {employees.map((employee, index) => (
                <EmployeeCard user={employee} key={index} />
            ))}
        </Grid>
    );
}

export default Employees;

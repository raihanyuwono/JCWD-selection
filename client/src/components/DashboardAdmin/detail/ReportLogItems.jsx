import { Tbody } from "@chakra-ui/react"
import ReportLogItem from "./ReportLogItem"
import { useEffect, useState } from "react";
import { getAllLogs } from "../../../api/payroll";

const tBody = {
    oveflow: "scroll",
};

function ReportLogItems(){
    const [logs, setLogs] = useState([]);

    async function fetchAllLogs() {
        const { data } = await getAllLogs();
        setLogs(data);
    }

    useEffect(() => {
        fetchAllLogs();
    }, [])

    return (
        <Tbody {...tBody}>
            {logs.map((log, index) => (
                <ReportLogItem log={log} key={index} />
            ))}
        </Tbody>
    )
}

export default ReportLogItems
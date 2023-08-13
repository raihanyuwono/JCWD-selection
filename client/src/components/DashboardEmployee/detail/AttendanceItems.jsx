import { Tbody } from "@chakra-ui/react";
import { useState } from "react";
import AttendanceItem from "./AttendanceItem";

const tBody = {
    
    oveflow: "scroll",
}

function AttendanceItems() {
    const [logs, setLogs] = useState([
        { date: "2023-10-02", shift:"Day", clock_in: "09.30", clock_out: "17.20" },
        { date: "2023-10-03", shift:"Night", clock_in: "09.30", clock_out: "17.20" },
        { date: "2023-10-04", shift:"Day", clock_in: "09.30", clock_out: "17.20" },
        { date: "2023-10-05", shift:"Day", clock_in: "09.30", clock_out: "17.20" },
        { date: "2023-10-06", shift:"Night", clock_in: "09.30", clock_out: "17.20" },
        { date: "2023-10-07", shift:"Day", clock_in: "09.30", clock_out: "17.20" },
        { date: "2023-10-08", shift:"Day", clock_in: "09.30", clock_out: "17.20" },
    ]);
    return (
        <Tbody {...tBody}>
            {logs.map((log, index) => (
                <AttendanceItem log={log} key={index} />
            ))}
        </Tbody>
    );
}

export default AttendanceItems;

import { Tbody } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AttendanceItem from "./AttendanceItem";
import { getLogs } from "../../../api/attendance";
import { useSelector } from "react-redux";

const tBody = {
    oveflow: "scroll",
};

function AttendanceItems() {
    const triggerUpdate = useSelector((state) => state.clock.isClockStart);
    const [logs, setLogs] = useState([]);

    async function fetchLogs() {
        const { data } = await getLogs();
        setLogs(data);
    }

    useEffect(() => {
        fetchLogs();
    }, [triggerUpdate]);

    return (
        <Tbody {...tBody}>
            {logs.map((log, index) => (
                <AttendanceItem log={log} key={index} />
            ))}
        </Tbody>
    );
}

export default AttendanceItems;

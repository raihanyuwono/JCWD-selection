import { Tbody, filter } from "@chakra-ui/react";
import ReportLogItem from "./ReportLogItem";
import { useEffect, useState } from "react";
import { getAllLogs } from "../../../api/payroll";
import { useSelector } from "react-redux";

const tBody = {
    oveflow: "scroll",
};

function ReportLogItems() {
    const [logs, setLogs] = useState([]);
    const filterMode = useSelector((state) => state.report.filterMode);
    const filterDate = useSelector((state) => state.report.filterDate);
    const filterOrder = useSelector((state) => state.report.filterOrder);

    async function fetchAllLogs() {
        const queries = {
            filter_by: filterMode,
            date: filterDate,
            order: filterOrder,
        };
        const { data } = await getAllLogs(queries);
        setLogs(data);
    }

    useEffect(() => {
        fetchAllLogs();
    }, [filterMode, filterDate]);

    return (
        <Tbody {...tBody}>
            {logs.map((log, index) => (
                <ReportLogItem log={log} key={index} />
            ))}
        </Tbody>
    );
}

export default ReportLogItems;

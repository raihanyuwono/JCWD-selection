import { Td, Tr } from "@chakra-ui/react";
import { dateFormater, timeFormater } from "../../../helpers/Formater";

const td = {
    color: "textPrimaryDark",
    textAlign: "center",
};

function AttendanceItem({ log }) {
    return (
        <Tr>
            <Td {...td}>{dateFormater(log["created_at"])}</Td>
            <Td {...td}>{log["shift"]}</Td>
            <Td {...td}>{timeFormater(log["clock_in"])}</Td>
            <Td {...td}>{timeFormater(log["clock_out"])}</Td>
        </Tr>
    );
}

export default AttendanceItem;

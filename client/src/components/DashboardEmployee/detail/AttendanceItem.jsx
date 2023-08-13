import { Td, Tr } from "@chakra-ui/react";

const td = {
    color: "textPrimaryDark",
    textAlign: "center",
};

function AttendanceItem({log}){
    return <Tr>
        <Td {...td}>{log["date"]}</Td>
        <Td {...td}>{log["shift"]}</Td>
        <Td {...td}>{log["clock_in"]}</Td>
        <Td {...td}>{log["clock_out"]}</Td>
    </Tr>
}

export default AttendanceItem;
import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import AttendanceItems from "./AttendanceItems";

const mainContainer = {
    w: "full",
    h: "full",
};

const th = {
    color: "textPrimaryDark",
    textAlign: "center",
};

function Attendances({ attendances = [] }) {
    return (
        <TableContainer {...mainContainer}>
            <Table>
                <Thead>
                    <Tr>
                        <Th {...th}>Date</Th>
                        <Th {...th}>Shift</Th>
                        <Th {...th}>Clock In</Th>
                        <Th {...th}>Clock Out</Th>
                    </Tr>
                </Thead>
                <AttendanceItems />
            </Table>
        </TableContainer>
    );
}

export default Attendances;

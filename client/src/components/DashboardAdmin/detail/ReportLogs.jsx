import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import ReportLogItems from "./ReportLogItems";

const mainContainer = {
    w: "full",
    h: "full",
};

const th = {
    color: "textPrimaryDark",
    textAlign: "center",
};

function ReportLogs() {
    return (
        <TableContainer {...mainContainer}>
            <Table>
                <Thead>
                    <Tr>
                        <Th {...th}>Username</Th>
                        <Th {...th}>Date</Th>
                        <Th {...th}>Payroll</Th>
                    </Tr>
                </Thead>
                <ReportLogItems />
            </Table>
        </TableContainer>
    );
}

export default ReportLogs;

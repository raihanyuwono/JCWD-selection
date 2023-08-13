import { Divider, Flex, GridItem, Text } from "@chakra-ui/react";
import LiveTime from "./LiveTime";
import ClockButton from "./ClockButton";
import AttendanceInfo from "./AttendanceInfo";

const mainContainer = {
    border: "1px solid",
    borderRadius: "8px",
    fontFamily: "Fira Code",
    minH: "calc(100vh - 56px)",
    p: "12px",
};

const container = {
    alignItems: "center",
    direction: "column",
    gap: "8px",
};

const title = {
    fontSize: "20px",
    fontWeight: "semibold",
};

function AttendanceLogs() {
    return (
        <GridItem {...mainContainer}>
            <Flex {...container}>
                <Text {...title}>Attendance</Text>
                <Divider />
                <LiveTime />
                <ClockButton />
                <AttendanceInfo />
            </Flex>
        </GridItem>
    );
}

export default AttendanceLogs;

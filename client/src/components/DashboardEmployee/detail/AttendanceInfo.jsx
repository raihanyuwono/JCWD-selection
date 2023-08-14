import { Divider, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const mainContainer = {
    w: "full",
    direction: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "8px",
    mt: "16px",
};

const container = {
    direction: "column",
    alignItems: "center",
    textAlign: "center",
};

function getShift(shift) {
    if (shift === "") return;
    return (
        <>
            <Text>Shift: {shift}</Text>
            <Text>
                Schedule: {shift === "day" ? "07:00-15:00" : "15:00-23:00"}
            </Text>
        </>
    );
}

function AttendanceInfo() {
    const shift = useSelector((state) => state.clock.shift);
    return (
        <Flex {...mainContainer}>
            <Text>Today Schedule</Text>
            <Divider />
            <Flex {...container}>{getShift(shift)}</Flex>
        </Flex>
    );
}

export default AttendanceInfo;

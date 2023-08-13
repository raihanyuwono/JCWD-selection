import { Divider, Flex, Text } from "@chakra-ui/react";

const mainContainer = {
    w: "full",
    direction: "column",
    alignItems: "center",
    gap: "8px",
    mt: "16px",
};

const container = {
    direction: "column",
    alignItems: "center",
};

function AttendanceInfo() {
    return (
        <Flex {...mainContainer}>
            <Text>Today Schedule</Text>
            <Divider />
            <Flex {...container}>
                <Text>Shift: Day</Text>
                <Text>Schedule: 09.00 - 17.00</Text>
            </Flex>
        </Flex>
    );
}

export default AttendanceInfo;

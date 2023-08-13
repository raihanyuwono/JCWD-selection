import { Divider, Flex, GridItem, Text } from "@chakra-ui/react";
import Attendances from "./Attendances";

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

function AttendanceHistory() {
    return (
        <GridItem {...mainContainer}>
            <Flex {...container}>
                <Text {...title}>Log</Text>
                <Divider />
                <Attendances />
            </Flex>
        </GridItem>
    );
}

export default AttendanceHistory;

import { Divider, Flex, GridItem, Text } from "@chakra-ui/react";
import Employees from "./Employees";

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

function ManageUser() {
    return (
        <GridItem {...mainContainer}>
            <Flex {...container}>
                <Text {...title}>Employees</Text>
                <Divider />
                <Employees />
            </Flex>
        </GridItem>
    );
}

export default ManageUser;

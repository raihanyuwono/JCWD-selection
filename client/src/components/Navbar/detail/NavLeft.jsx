import { Flex, Text } from "@chakra-ui/react";
import { MdOutlineTimelapse } from "react-icons/md";

const container = {
    alignItems: "center",
    w: "full",
    gap: "8px",
    fontSize: "20px",
};

function NavLeft() {
    return (
        <Flex {...container}>
            <MdOutlineTimelapse />
            <Text>Timaeus</Text>
        </Flex>
    );
}

export default NavLeft;

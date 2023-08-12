import { Flex, Spacer } from "@chakra-ui/react";
import NavLeft from "./detail/NavLeft";
import NavRight from "./detail/NavRight";

const container = {
    w: "full",
    h: "56px",
    px: "16px",
    bgColor: "secondary",
    fontFamily: "Fira Code",
};

function Navbar() {
    return (
        <Flex {...container}>
            <NavLeft />
            <Spacer />
            <NavRight />
        </Flex>
    );
}

export default Navbar;

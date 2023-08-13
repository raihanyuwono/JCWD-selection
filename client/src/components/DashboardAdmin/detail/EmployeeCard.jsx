import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import ModalDetailEmployee from "./ModalDetailEmployee";

const mainContainer = {
    border: "1px solid",
    borderRadius: "8px",
    p: "16px",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    _hover: {
        bgColor: "secondaryDark",
    },
};

function EmployeeCard({ user }) {
    const { onOpen, isOpen, onClose } = useDisclosure();
    return (
        <Flex {...mainContainer} onClick={onOpen}>
            <Text>{user["username"]}</Text>
            <ModalDetailEmployee user={user} isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
}

export default EmployeeCard;

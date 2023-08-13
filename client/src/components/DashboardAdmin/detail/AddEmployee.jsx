import { Flex, useDisclosure } from "@chakra-ui/react";
import { AiOutlineUserAdd } from "react-icons/ai";
import ModalAddEmployee from "./ModalAddEmployee";

const mainContainer = {
    w: "64px",
    h: "64px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3rem",
    bgColor: "secondaryLight",
    pos: "fixed",
    right: "20px",
    bottom: "20px",
    cursor: "pointer",
};

function AddEmployee() {
    const { onOpen, isOpen, onClose } = useDisclosure();
    return (
        <Flex {...mainContainer} onClick={() => onOpen()}>
            <AiOutlineUserAdd size={"32px"} />
            <ModalAddEmployee isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
}

export default AddEmployee;

import {
    Button,
    Flex,
    Modal,
    ModalContent,
    ModalOverlay,
    Text,
    useToast,
} from "@chakra-ui/react";
import CustomInput from "../../Custom/CustomInput";
import { FiMail } from "react-icons/fi";
import { newUser } from "../../../api/auth";
import { useState } from "react";

const overlay = {
    backdropFilter: "blur(2px)",
};

const content = {
    p: "16px",
    m: "auto",
};

const container = {
    direction: "column",
    alignItems: "center",
    fontFamily: "Fira Code",
    gap: "16px",
};

const title = {
    fontSize: "24px",
    fontWeight: "semibold",
};

const sumbitButton = {
    w: "full",
    bgColor: "successPrimary",
    color: "textPrimaryDark",
    borderRadius: "3rem",
    _hover: {
        bgColor: "successSecondary",
    },
};

const inputEmail = {
    id: "email",
    type: "email",
    placeholder: "Email",
    icon: <FiMail />,
};

function ModalAddEmployee({ isOpen, onClose }) {
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    async function handleAddUser() {
        const email = document.getElementById("email").value;
        setIsLoading(true);
        await newUser(toast, email);
        setIsLoading(false);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay {...overlay} />
            <ModalContent {...content}>
                <Flex {...container}>
                    <Text {...title}>Add New Employee</Text>
                    <CustomInput {...inputEmail} />
                    <Button {...sumbitButton} isLoading={isLoading} onClick={handleAddUser}>SUBMIT</Button>
                </Flex>
            </ModalContent>
        </Modal>
    );
}

export default ModalAddEmployee;

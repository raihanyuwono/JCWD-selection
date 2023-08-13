import { Flex } from "@chakra-ui/react";
import RegisterForm from "../components/Register/detail/RegisterForm";

function setAttributes(id, type, placeholder, icon) {
    return { id, type, placeholder, icon };
}

const mainContaier = {
    alignItems: "center",
    justifyContent: "center",
    w: "full",
    h: "100vh",
    p: "16px",
};

function Register() {
    return (
        <Flex {...mainContaier}>
            <RegisterForm />
        </Flex>
    );
}

export default Register;

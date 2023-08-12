import { Flex } from "@chakra-ui/react";
import LoginForm from "../components/Login/detail/LoginForm";

const mainContaier = {
    justifyContent: "center",
    w: "full",
    h: "full",
    pt: "128px"
};

function Login() {
    return (
        <Flex {...mainContaier}>
            <LoginForm />
        </Flex>
    );
}

export default Login;

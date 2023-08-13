import { Flex, Spacer, Text } from "@chakra-ui/react";
import { FiUnlock, FiUser } from "react-icons/fi";
import CustomInput from "../../Custom/CustomInput";
import LoginButton from "./LoginButton";

function setAttributes(id, type, placeholder, icon) {
    return { id, type, placeholder, icon };
}

const mainContaier = {
    alignItems: "center",
    justifyContent: "center",
    bgColor: "primaryLight",
    direction: "column",
    w: "512px",
    h: "fit-content",
    minH: "256px",
    p: "16px",
    gap: "8px",
    borderRadius: "8px",
    color: "textPrimaryLight",
    fontFamily: "Fira Code",
};

const title = {
    fontSize: "28px",
    fontWeight: "semibold",
    fontFamily: "Fira Sans",
    mb: "16px",
};

const identifier = setAttributes("identifier", "text", "Username", <FiUser />);
const password = setAttributes(
    "password",
    "password",
    "Password",
    <FiUnlock />
);

function LoginForm() {
    return (
        <Flex {...mainContaier}>
            <Text {...title}>Login</Text>
            <Spacer />
            <CustomInput {...identifier} />
            <CustomInput {...password} />
            <Spacer />
            <LoginButton />
        </Flex>
    );
}

export default LoginForm;

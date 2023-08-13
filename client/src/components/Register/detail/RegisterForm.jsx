import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { FiCalendar, FiPhone, FiUnlock, FiUser } from "react-icons/fi";
import jwt_decode from "jwt-decode";
import CustomInput from "../../Custom/CustomInput";

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

const username = setAttributes("username", "text", "Username", <FiUser />);
const name = setAttributes("name", "text", "Name", <FiUser />);
const phone = setAttributes("phone", "tel", "Phone", <FiPhone />);
const birthday = setAttributes("birthday", "date", "Birthday", <FiCalendar />);
const password = setAttributes(
    "password",
    "password",
    "Password",
    <FiUnlock />
);
const confirmPassword = setAttributes(
    "confirm-password",
    "password",
    "Confirm Password",
    <FiUnlock />
);

const title = {
    fontSize: "20px",
    fontWeight: "semibold",
};

const button = {
    w: "full",
    borderRadius: "3rem",
    color: "textPrimaryDark",
    bgColor: "successPrimary",
    _hover: {
        bgColor: "successSecondary",
    },
};

function getEmail() {
    const url = window.location.href.split("/");
    const token = url.pop();
    try {
        const { email } = jwt_decode(token);
        return email;
    } catch (error) {
        document.location.href = "/";
    }
}

function RegisterForm() {
    const email = getEmail();
    return (
        <Flex {...mainContaier}>
            <Text {...title}>Register</Text>
            <Spacer />
            <CustomInput {...username} />
            <CustomInput {...name} />
            <CustomInput {...phone} />
            <CustomInput {...birthday} />
            <CustomInput {...password} />
            <CustomInput {...confirmPassword} />
            <Button {...button}>REGISTER</Button>
        </Flex>
    );
}

export default RegisterForm;
